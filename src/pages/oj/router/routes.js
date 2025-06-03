// all routes here.
import {
  About,
  ACMRank,
  Announcements,
  ApplyResetPassword,
  FAQ,
  Home,
  Logout,
  NotFound,
  OIRank,
  Problem,
  ProblemList,
  ResetPassword,
  SubmissionDetails,
  SubmissionList,
  UserHome
} from '../views'

import * as Contest from '@oj/views/contest'
import * as Setting from '@oj/views/setting'

import { generateTitle } from '@oj/utils/site-config'

export default [
  {
    name: 'home',
    path: '/',
    meta: {title: 'Inicio'},  
    component: Home
  },
  {
    name: 'logout',
    path: '/logout',
    meta: {title: 'Cerrar Sesión'},  // ← Cambiar
    component: Logout
  },
  {
    name: 'apply-reset-password',
    path: '/apply-reset-password',
    meta: {title: 'Solicitar Nueva Contraseña'},  // ← Cambiar
    component: ApplyResetPassword
  },
  {
    name: 'reset-password',
    path: '/reset-password/:token',
    meta: {title: 'Restablecer Contraseña'},  // ← Cambiar
    component: ResetPassword
  },
  {
    name: 'problem-list',
    path: '/problem',
    meta: {title: 'Lista de Problemas'},  // ← Cambiar
    component: ProblemList
  },
  {
    name: 'problem-details',
    path: '/problem/:problemID',
    meta: {title: 'Detalle del Problema'},  // ← Cambiar
    component: Problem
  },
  {
    name: 'submission-list',
    path: '/status',
    meta: {title: 'Lista de Envíos'},  // ← Cambiar
    component: SubmissionList
  },
  {
    name: 'submission-details',
    path: '/status/:id/',
    meta: {title: 'Detalle de Envío'},  // ← Cambiar
    component: SubmissionDetails
  },
  {
    name: 'contest-list',
    path: '/contest',
    meta: {title: 'Lista de Concursos'},  // ← Cambiar
    component: Contest.ContestList
  },
  {
    name: 'contest-details',
    path: '/contest/:contestID/',
    component: Contest.ContestDetails,
    meta: {title: 'Detalle del Concurso'},  // ← Cambiar
    children: [
      {
        name: 'contest-submission-list',
        path: 'submissions',
        meta: {title: 'Envíos del Concurso'},  // ← AGREGAR
        component: SubmissionList
      },
      {
        name: 'contest-problem-list',
        path: 'problems',
        meta: {title: 'Problemas del Concurso'},  // ← AGREGAR
        component: Contest.ContestProblemList
      },
      {
        name: 'contest-problem-details',
        path: 'problem/:problemID/',
        meta: {title: 'Problema del Concurso'},  // ← AGREGAR
        component: Problem
      },
      {
        name: 'contest-announcement-list',
        path: 'announcements',
        meta: {title: 'Anuncios del Concurso'},  // ← AGREGAR
        component: Announcements
      },
      {
        name: 'contest-rank',
        path: 'rank',
        meta: {title: 'Ranking del Concurso'},  // ← AGREGAR
        component: Contest.ContestRank
      },
      {
        name: 'acm-helper',
        path: 'helper',
        meta: {title: 'Ayudante ACM'},  // ← AGREGAR
        component: Contest.ACMContestHelper
      }
    ]
  },
  {
    name: 'acm-rank',
    path: '/acm-rank',
    meta: {title: 'Ranking'},  // ← Cambiar
    component: ACMRank
  },
  {
    name: 'oi-rank',
    path: '/oi-rank',
    meta: {title: 'Rankings OI'},  // ← Cambiar
    component: OIRank
  },
  {
    name: 'user-home',
    path: '/user-home',
    component: UserHome,
    meta: {requiresAuth: true, title: 'Mi Perfil'}  // ← Cambiar
  },
  {
    path: '/setting',
    component: Setting.Settings,
    meta: {title: 'Configuraciones'},  // ← AGREGAR
    children: [
      {
        name: 'default-setting',
        path: '',
        meta: {requiresAuth: true, title: 'Configuraciones'},  // ← Cambiar
        component: Setting.ProfileSetting
      },
      {
        name: 'profile-setting',
        path: 'profile',
        meta: {requiresAuth: true, title: 'Configurar Perfil'},  // ← Cambiar
        component: Setting.ProfileSetting
      },
      {
        name: 'account-setting',
        path: 'account',
        meta: {requiresAuth: true, title: 'Configurar Cuenta'},  // ← Cambiar
        component: Setting.AccountSetting
      },
      {
        name: 'security-setting',
        path: 'security',
        meta: {requiresAuth: true, title: 'Configurar Seguridad'},  // ← Cambiar
        component: Setting.SecuritySetting
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    meta: {title: 'Acerca de'},  // ← Cambiar
    component: About
  },
  {
    path: '/faq',
    name: 'faq',
    meta: {title: 'Preguntas Frecuentes'},  // ← Cambiar
    component: FAQ
  },
  {
    path: '*',
    meta: {title: 'Página no encontrada'},  // ← Cambiar
    component: NotFound
  }
]