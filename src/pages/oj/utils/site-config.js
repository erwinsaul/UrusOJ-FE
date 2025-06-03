// src/pages/oj/utils/site-config.js
export const SITE_CONFIG = {
  siteName: 'UrusOJ',
  baseTitle: 'UrusOJ - Juez Virtual de Programación - Ing. de Sistemas e Ing. Informática - FNI',  
  shortTitle: 'UrusOJ - SISINF FNI',
  separator: ' | '
}

// Función para generar título completo
export function generateTitle(pageTitle) {
  if (!pageTitle || pageTitle === 'undefined' || pageTitle === '') {
    return SITE_CONFIG.baseTitle
  }
  return `${pageTitle}${SITE_CONFIG.separator}${SITE_CONFIG.shortTitle}`
}