<template>
  <div id="header">
    <!-- Nueva sección superior para la imagen -->
    <div class="header-image-section">
      <div class="image-container">
        <img :src="require('@/assets/LogoSisInf.png')" alt="Ingeniera de Sistemas e Ingenieria Informatica" class="header-image" />
      </div>
    </div>
    
    <!-- Menú existente -->
    <Menu theme="dark" mode="horizontal" @on-select="handleRoute" :active-name="activeMenu" class="oj-menu">
      <div class="logo"><span>{{website.website_name}}</span></div>
      <Menu-item name="/">
        <Icon type="home"></Icon>
        {{$t('m.Home')}}
      </Menu-item>
      <Menu-item name="/problem">
        <Icon type="ios-keypad"></Icon>
        {{$t('m.NavProblems')}}
      </Menu-item>
      <Menu-item name="/contest">
        <Icon type="trophy"></Icon>
        {{$t('m.Contests')}}
      </Menu-item>
      <Menu-item name="/status">
        <Icon type="ios-pulse-strong"></Icon>
        {{$t('m.NavStatus')}}
      </Menu-item>
      <Menu-item name="/acm-rank">
        <Icon type="podium"></Icon>
        {{$t('m.Rank')}}
      </Menu-item>
      <Menu-item name="/FAQ">
        <Icon type="help-circled"></Icon>
        {{$t('m.FAQ')}}
      </Menu-item>
      <Menu-item name="/about">
        <Icon type="information-circled"></Icon>
        {{$t('m.Judger')}}
      </Menu-item>
      <template v-if="!isAuthenticated">
        <div class="btn-menu">
          <Button type="primary"
                  ref="loginBtn"
                  shape="circle"
                  @click="handleBtnClick('login')"
                  class="header-btn">{{$t('m.Login')}}
          </Button>
          <Button v-if="website.allow_register"
                  type="default"
                  shape="circle"
                  @click="handleBtnClick('register')"
                  class="header-btn register-btn"
                  style="margin-left: 5px;">{{$t('m.Register')}}
          </Button>
        </div>
      </template>
      <template v-else>
        <Dropdown class="drop-menu" @on-click="handleRoute" placement="bottom" trigger="click">
          <Button type="text" class="drop-menu-title">{{ user.username }}
            <Icon type="arrow-down-b"></Icon>
          </Button>
          <Dropdown-menu slot="list" class="dropdown-custom">
            <Dropdown-item name="/user-home">{{$t('m.MyHome')}}</Dropdown-item>
            <Dropdown-item name="/status?myself=1">{{$t('m.MySubmissions')}}</Dropdown-item>
            <Dropdown-item name="/setting/profile">{{$t('m.Settings')}}</Dropdown-item>
            <Dropdown-item v-if="isAdminRole" name="/admin">{{$t('m.Management')}}</Dropdown-item>
            <Dropdown-item divided name="/logout">{{$t('m.Logout')}}</Dropdown-item>
          </Dropdown-menu>
        </Dropdown>
      </template>
    </Menu>
    <Modal v-model="modalVisible" :width="400">
      <div slot="header" class="modal-title">{{$t('m.Welcome_to')}} {{website.website_name_shortcut}}</div>
      <component :is="modalStatus.mode" v-if="modalVisible"></component>
      <div slot="footer" style="display: none"></div>
    </Modal>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import login from '@oj/views/user/Login'
  import register from '@oj/views/user/Register'

  export default {
    components: {
      login,
      register
    },
    mounted () {
      this.getProfile()
      this.adjustBodyPadding()
    },
    methods: {
      ...mapActions(['getProfile', 'changeModalStatus']),
      handleRoute (route) {
        if (route && route.indexOf('admin') < 0) {
          this.$router.push(route)
        } else {
          window.open('/admin/')
        }
      },
      handleBtnClick (mode) {
        this.changeModalStatus({
          visible: true,
          mode: mode
        })
      },
      // Método para ajustar el espaciado del contenido principal
      adjustBodyPadding () {
        this.$nextTick(() => {
          const header = document.getElementById('header')
          if (header) {
            const headerHeight = header.offsetHeight
            document.body.style.paddingTop = `${headerHeight}px`
            
            // También aplicar a la clase main-content si existe
            const mainContent = document.querySelector('.main-content, #main, .content-wrapper')
            if (mainContent) {
              mainContent.style.marginTop = `${headerHeight}px`
            }
          }
        })
      }
    },
    computed: {
      ...mapGetters(['website', 'modalStatus', 'user', 'isAuthenticated', 'isAdminRole']),
      // 跟随路由变化
      activeMenu () {
        return '/' + this.$route.path.split('/')[1]
      },
      modalVisible: {
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

<style lang="less" scoped>
  #header {
    min-width: 300px;
    position: fixed;
    top: 0;
    left: 0;
    height: auto;
    width: 100%;
    z-index: 1000;
    background-color: #fff;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);

    // Nueva sección para la imagen superior
    .header-image-section {
      width: 100%;
      background-color: #f8f8f9;
      padding: 10px 0;
      border-bottom: 2px solid #3498db; // Misma línea azul del footer
      
      .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        
        .header-image {
          max-height: 80px;
          max-width: 300px;
          height: auto;
          width: auto;
          object-fit: contain;
        }
      }
    }

    // Menú con colores del footer
    .oj-menu {
      background: #2c3e50 !important; // Mismo color del footer
      border-bottom: none;
      
      // Items del menú
      .ivu-menu-item {
        color: #ecf0f1 !important; // Texto claro como el footer
        border-bottom: 2px solid transparent;
        transition: all 0.3s ease;
        
        &:hover {
          color: #3498db !important; // Azul del footer al hover
          background-color: rgba(52, 152, 219, 0.1) !important;
          border-bottom-color: #3498db;
        }
        
        &.ivu-menu-item-active, &.ivu-menu-item-selected {
          color: #3498db !important; // Azul activo
          background-color: rgba(52, 152, 219, 0.15) !important;
          border-bottom-color: #3498db;
        }
        
        i {
          color: inherit !important;
        }
      }
    }

    .logo {
      margin-left: 2%;
      margin-right: 2%;
      font-size: 20px;
      float: left;
      line-height: 60px;
      color: #ecf0f1 !important; // Color claro del footer
      font-weight: 600;
      
      span {
        color: #ecf0f1 !important;
      }
    }

    // Dropdown del usuario
    .drop-menu {
      float: right;
      margin-right: 30px;
      position: absolute;
      right: 10px;
      
      &-title {
        font-size: 18px;
        color: #ecf0f1 !important;
        
        &:hover {
          color: #3498db !important;
        }
        
        i {
          color: #ecf0f1 !important;
        }
      }
    }
    
    // Botones de login/register
    .btn-menu {
      font-size: 16px;
      float: right;
      margin-right: 10px;
      
      .header-btn {
        border-color: #3498db;
        transition: all 0.3s ease;
        
        &.ivu-btn-primary {
          background-color: #3498db;
          border-color: #3498db;
          
          &:hover {
            background-color: #5dade2;
            border-color: #5dade2;
          }
        }
        
        &.register-btn {
          background-color: transparent;
          color: #ecf0f1;
          border-color: #ecf0f1;
          
          &:hover {
            background-color: #ecf0f1;
            color: #2c3e50;
            border-color: #ecf0f1;
          }
        }
      }
    }
  }

  .modal {
    &-title {
      font-size: 18px;
      font-weight: 600;
    }
  }

  // Responsive design para la imagen
  @media (max-width: 768px) {
    #header .header-image-section .image-container .header-image {
      max-height: 60px;
      max-width: 250px;
    }
  }

  @media (max-width: 480px) {
    #header .header-image-section .image-container .header-image {
      max-height: 50px;
      max-width: 200px;
    }
  }
</style>

<!-- Estilos globales para el dropdown -->
<style>
  // Dropdown personalizado con colores del footer
  .dropdown-custom.ivu-dropdown-menu {
    background-color: #2c3e50 !important;
    border: 1px solid #3498db !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
    
    .ivu-dropdown-item {
      color: #ecf0f1 !important;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: #3498db !important;
        color: #fff !important;
      }
      
      &.ivu-dropdown-item-divided {
        border-top-color: #3498db !important;
      }
    }
  }

  // Override para el menú de iView
  .ivu-menu-horizontal.ivu-menu-dark {
    background: #2c3e50 !important;
    
    .ivu-menu-item {
      color: #ecf0f1 !important;
      
      &:hover {
        color: #3498db !important;
        background-color: rgba(52, 152, 219, 0.1) !important;
      }
      
      &.ivu-menu-item-active {
        color: #3498db !important;
        background-color: rgba(52, 152, 219, 0.15) !important;
      }
    }
  }
</style>

<!-- 
IMPORTANTE: También necesitas agregar este CSS GLOBAL 
en tu archivo de estilos principales (app.css, main.css, etc.)
-->
<style>
/* Estilos globales para ajustar el contenido principal */

/* Opción 1: Espaciado fijo (más simple) */
body {
  padding-top: 140px; /* Ajusta según la altura real de tu header */
}

/* Opción 2: Espaciado usando CSS variables (más dinámico) */
:root {
  --header-height: 140px; /* Cambia este valor según tu header */
}

.main-content,
#main,
.content-wrapper,
.app-main {
  margin-top: var(--header-height);
  padding-top: 20px; /* Espaciado adicional */
}

/* Opción 3: Clase específica para contenido */
.with-header-image {
  margin-top: 140px !important;
  padding-top: 20px;
}

/* Para móviles - ajustar según tus media queries */
@media (max-width: 768px) {
  body {
    padding-top: 120px;
  }
  
  :root {
    --header-height: 120px;
  }
  
  .main-content,
  #main,
  .content-wrapper,
  .app-main,
  .with-header-image {
    margin-top: 120px !important;
  }
}

@media (max-width: 480px) {
  body {
    padding-top: 110px;
  }
  
  :root {
    --header-height: 110px;
  }
  
  .main-content,
  #main,
  .content-wrapper,
  .app-main,
  .with-header-image {
    margin-top: 110px !important;
  }
}
</style>