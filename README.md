# OnlineJudge Frontend
[![vue](https://img.shields.io/badge/vue-2.5.13-blue.svg?style=flat-square)](https://github.com/vuejs/vue)
[![vuex](https://img.shields.io/badge/vuex-3.0.1-blue.svg?style=flat-square)](https://vuex.vuejs.org/)
[![echarts](https://img.shields.io/badge/echarts-3.8.3-blue.svg?style=flat-square)](https://github.com/ecomfe/echarts)
[![iview](https://img.shields.io/badge/iview-2.8.0-blue.svg?style=flat-square)](https://github.com/iview/iview)
[![element-ui](https://img.shields.io/badge/element-2.0.9-blue.svg?style=flat-square)](https://github.com/ElemeFE/element)
[![Build Status](https://travis-ci.org/QingdaoU/OnlineJudgeFE.svg?branch=master)](https://travis-ci.org/QingdaoU/OnlineJudgeFE)


## Características

+ Webpack3 con múltiples páginas y optimización del tamaño de bundle
+ Editor simditor fácil de usar y excelente editor de código codemirror
+ Gráficos y visualización increíbles (echarts)
+ Operación amigable para el usuario
+ Bastante hermoso :)

## Primeros Pasos

Instala nodejs **v8.12.0** primero.

### Linux

```bash
npm install
# utilizamos webpack DllReference para disminuir el tiempo de construcción,
# este comando solo necesita ejecutarse una vez a menos que actualices el paquete en build/webpack.dll.conf.js
export NODE_ENV=development 
npm run build:dll

# el servidor de desarrollo configurará la tabla proxy hacia tu backend
export TARGET=http://Tu-backend

# servir con recarga en caliente en localhost:8080
npm run dev
```

### Windows

```bash
npm install
# utilizamos webpack DllReference para disminuir el tiempo de construcción,
# este comando solo necesita ejecutarse una vez a menos que actualices el paquete en build/webpack.dll.conf.js
set NODE_ENV=development 
npm run build:dll

# el servidor de desarrollo configurará la tabla proxy hacia tu backend
set TARGET=http://Tu-backend

# servir con recarga en caliente en localhost:8080
npm run dev
```

## Compatibilidad de Navegadores

Navegadores modernos e Internet Explorer 10+.

## LICENCIA

[MIT](http://opensource.org/licenses/MIT)