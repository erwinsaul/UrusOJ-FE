import Vue from 'vue'
import VueI18n from 'vue-i18n'
// iview UI
import ivenUS from 'iview/dist/locale/en-US'
import ivzhCN from 'iview/dist/locale/zh-CN'
import ivzhTW from 'iview/dist/locale/zh-TW'
import ivesBE from 'iview/dist/locale/es-ES' // Usar español de España como base
// element UI
import elenUS from 'element-ui/lib/locale/lang/en'
import elzhCN from 'element-ui/lib/locale/lang/zh-CN'
import elzhTW from 'element-ui/lib/locale/lang/zh-TW'
import elesES from 'element-ui/lib/locale/lang/es' // Usar español de España como base

Vue.use(VueI18n)

const languages = [
  {value: 'en-US', label: 'English', iv: ivenUS, el: elenUS},
  {value: 'zh-CN', label: '简体中文', iv: ivzhCN, el: elzhCN},
  {value: 'zh-TW', label: '繁體中文', iv: ivzhTW, el: elzhTW},
  {value: 'es-BO', label: 'Español (Bolivia)', iv: ivesBE, el: elesES} // Agregamos español Bolivia
]
const messages = {}

// combine admin and oj
for (let lang of languages) {
  let locale = lang.value
  let m = require(`./oj/${locale}`).m
  Object.assign(m, require(`./admin/${locale}`).m)
  let ui = Object.assign(lang.iv, lang.el)
  messages[locale] = Object.assign({m: m}, ui)
}

// load language packages
export default new VueI18n({
  locale: 'es-BO', // Ahora sí está definido en languages
  fallbackLocale: 'en-US', // Agregamos fallback por seguridad
  messages: messages
})

export {languages}