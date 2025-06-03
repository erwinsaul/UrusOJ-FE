 // src/utils/site-config.js
export default {
  siteName: 'UrusOJ',
  baseTitle: 'UrusOJ - Juez Virtual de Programación - Ing. de Sistemas e Ing. Informática - FNI',
  shortTitle: 'UrusOJ - SISINF FNI',
  
  // Títulos por página
  pageTitles: {
    // Páginas principales
    'home': 'Inicio',
    'problem-list': 'Lista de Problemas', 
    'problem-details': 'Problema',
    'submission-list': 'Envíos',
    'contest-list': 'Concursos',
    'contest-details': 'Concurso',
    'contest-rank': 'Ranking del Concurso',
    'rank': 'Ranking General',
    'status': 'Estado de Envíos',
    'about': 'Acerca de',
    
    // Páginas de usuario
    'login': 'Iniciar Sesión',
    'register': 'Registro',
    'reset-password': 'Restablecer Contraseña',
    'user-home': 'Mi Perfil',
    'setting-profile': 'Configurar Perfil',
    'setting-security': 'Seguridad',
    
    // Páginas de admin
    'admin': 'Administración',
    'admin-user': 'Gestión de Usuarios',
    'admin-problem': 'Gestión de Problemas',
    'admin-contest': 'Gestión de Concursos'
  }
}

// Función para generar título completo
export function generateTitle(pageName, customTitle = '') {
  const config = siteTitleConfig.default || siteTitleConfig
  
  if (customTitle && customTitle !== 'undefined') {
    return `${customTitle} | ${config.shortTitle}`
  }
  
  if (pageName && config.pageTitles[pageName]) {
    return `${config.pageTitles[pageName]} | ${config.shortTitle}`
  }
  
  return config.baseTitle
}

const siteTitleConfig = { default: arguments[0] }
export { siteTitleConfig }