<template>
  <div class="app-container">
    <NavBar></NavBar>
    <div class="content-app">
      <transition name="fadeInUp" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-info">
          <p v-html="website.website_footer"></p>
          <p class="developer-info">
            <strong>UrusOJ</strong> 
            <span class="separator">|</span> 
            Desarrollado por: <span class="highlight">@erwinsaul</span>
          </p>
          <p class="version-info">
            <span v-if="version">Versión: {{ version }}</span>
            <span v-if="version" class="separator">|</span>
            Powered by <a href="https://github.com/QingdaoU/OnlineJudge" target="_blank" class="powered-link">OnlineJudge</a>
          </p>
        </div>
      </div>
    </footer>
    <BackTop></BackTop>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import NavBar from '@oj/components/NavBar.vue'

  export default {
    name: 'app',
    components: {
      NavBar
    },
    data () {
      return {
        version: process.env.VERSION
      }
    },
    created () {
      try {
        document.body.removeChild(document.getElementById('app-loader'))
      } catch (e) {
      }
    },
    mounted () {
      this.getWebsiteConfig()
    },
    methods: {
      ...mapActions(['getWebsiteConfig', 'changeDomTitle'])
    },
    computed: {
      ...mapState(['website'])
    },
    watch: {
      'website' () {
        this.changeDomTitle()
      },
      '$route' () {
        this.changeDomTitle()
      }
    }
  }
</script>

<style lang="less">
  // Reset global para el body y html
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  // Contenedor principal con flexbox
  .app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    background-color: transparent;
    &:active, &:hover {
      outline-width: 0;
    }
  }

  // Contenido principal que crece para empujar el footer al final
  .content-app {
    flex: 1;
    padding: 0 2%;
    
    @media screen and (max-width: 1200px) {
      margin-top: 160px;
    }

    @media screen and (min-width: 1200px) {
      margin-top: 80px;
    }
  }

  // Footer sticky al final de la página
  .footer {
    background: #2c3e50;
    border-top: 2px solid #3498db;
    margin-top: auto; // Esto empuja el footer al final
    padding: 8px 0;
    color: #ecf0f1;
    text-align: center;
    
    // Eliminar todos los elementos de lista y puntos
    * {
      list-style: none !important;
      margin: 0;
      padding: 0;
      background: transparent !important;
    }
    
    ul, ol, li {
      list-style: none !important;
      margin: 0 !important;
      padding: 0 !important;
      background: none !important;
    }
    
    // Eliminar cualquier contenido ::before o ::after
    *::before, *::after {
      display: none !important;
    }
    
    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      
      .footer-info {
        p {
          margin: 2px 0;
          line-height: 1.3;
          background: none !important;
          
          &:first-child {
            font-size: 12px;
            opacity: 0.9;
          }
        }
        
        .developer-info {
          font-size: 13px;
          font-weight: 500;
          
          .highlight {
            color: #3498db;
            font-weight: 600;
          }
          
          .separator {
            margin: 0 6px;
            color: #7f8c8d;
          }
        }
        
        .version-info {
          font-size: 11px;
          color: #bdc3c7;
          
          .separator {
            margin: 0 4px;
          }
          
          .powered-link {
            color: #3498db;
            transition: color 0.3s ease;
            
            &:hover {
              color: #5dade2;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }

  // Animaciones
  .fadeInUp-enter-active {
    animation: fadeInUp .8s;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 40px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  // Responsive para footer
  @media screen and (max-width: 768px) {
    .footer {
      padding: 6px 0;
      
      .footer-content {
        padding: 0 15px;
        
        .footer-info {
          .developer-info {
            font-size: 12px;
          }
          
          .version-info {
            font-size: 10px;
          }
        }
      }
    }
  }
</style>