<template>
  <div>
    <div class="login-header">
      <h2>Ingresar</h2>
    </div>
    
    <Form ref="formLogin" :model="formLogin" :rules="ruleLogin">
      <FormItem prop="username">
        <Input type="text" v-model="formLogin.username" :placeholder="$t('m.LoginUsername')" size="large" @on-enter="handleLogin">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formLogin.password" :placeholder="$t('m.LoginPassword')" size="large" @on-enter="handleLogin">
        <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="tfa_code" v-if="tfaRequired">
        <Input v-model="formLogin.tfa_code" :placeholder="$t('m.TFA_Code')">
        <Icon type="ios-lightbulb-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
    </Form>
    
    <div class="footer">
      <Button
        type="primary"
        @click="handleLogin"
        class="btn" 
        long
        :loading="btnLoginLoading">
        {{$t('m.UserLogin')}}
      </Button>
      <div class="forgot-password">
        <a v-if="website.allow_register" @click.stop="handleBtnClick('register')">{{$t('m.No_Account')}}</a>
        <a @click.stop="goResetPassword">{{$t('m.Forget_Password')}}</a>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import api from '@oj/api'
  import { FormMixin } from '@oj/components/mixins'

  export default {
    mixins: [FormMixin],
    data () {
      const CheckRequiredTFA = (rule, value, callback) => {
        if (value !== '') {
          api.tfaRequiredCheck(value).then(res => {
            this.tfaRequired = res.data.data.result
          })
        }
        callback()
      }

      return {
        tfaRequired: false,
        btnLoginLoading: false,
        formLogin: {
          username: '',
          password: '',
          tfa_code: ''
        },
        ruleLogin: {
          username: [
            {required: true, trigger: 'blur'},
            {validator: CheckRequiredTFA, trigger: 'blur'}
          ],
          password: [
            {required: true, trigger: 'change', min: 6, max: 20}
          ]
        }
      }
    },
    methods: {
      ...mapActions(['changeModalStatus', 'getProfile']),
      handleBtnClick (mode) {
        this.changeModalStatus({
          mode,
          visible: true
        })
      },
      handleLogin () {
        this.validateForm('formLogin').then(valid => {
          this.btnLoginLoading = true
          let formData = Object.assign({}, this.formLogin)
          if (!this.tfaRequired) {
            delete formData['tfa_code']
          }
          api.login(formData).then(res => {
            this.btnLoginLoading = false
            this.changeModalStatus({visible: false})
            this.getProfile()
            this.$success(this.$i18n.t('m.Welcome_back'))
          }, _ => {
            this.btnLoginLoading = false
          })
        })
      },
      goResetPassword () {
        this.changeModalStatus({visible: false})
        this.$router.push({name: 'apply-reset-password'})
      }
    },
    computed: {
      ...mapGetters(['website', 'modalStatus']),
      visible: {
        get () {
          return this.modalStatus.visible
        },
        set (value) {
          this.changeModalStatus({visible: value})
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .login-header {
    text-align: center;
    margin-bottom: 30px;
    
    h2 {
      font-size: 24px;
      font-weight: normal;
      color: #333;
      margin: 0;
      text-align: center;
      width: 100%;
    }
  }

  
  /deep/ .ivu-input {
    border-radius: 4px;
    border: 1px solid #dcdee2;
    
    &:focus {
      border-color: #2d8cf0;
      box-shadow: 0 0 0 2px rgba(45, 140, 240, 0.2);
    }
  }

  .footer {
    text-align: center !important;
    margin-top: 30px;
    margin-bottom: -15px;
    background: white !important;
    
    /* Forzar estilos del botón - mantener azul */
    /deep/ .ivu-btn {
      width: 100% !important;
      height: 40px !important;
      font-size: 16px !important;
      border-radius: 4px !important;
      margin-bottom: 20px !important;
      background-color: #2d8cf0 !important;
      border-color: #2d8cf0 !important;
      color: white !important;
      
      &:hover {
        background-color: #2b85e4 !important;
        border-color: #2b85e4 !important;
      }
    }
    
    .forgot-password {
      text-align: center !important;
      display: block !important;
      width: 100% !important;
      background: white !important;
      
      a {
        color: #2d8cf0 !important;
        text-decoration: none !important;
        font-size: 14px !important;
        display: block !important;
        margin: 8px 0 !important;
        text-align: center !important;
        background: white !important;
        
        &:hover {
          text-decoration: underline !important;
          background: white !important;
        }
      }
    }
  }

  /* Espaciado coherente con recuperar contraseña */
  /deep/ .ivu-form-item {
    margin-bottom: 20px;
  }

  .ivu-form-item {
    transition: all 0.3s ease;
  }
</style>