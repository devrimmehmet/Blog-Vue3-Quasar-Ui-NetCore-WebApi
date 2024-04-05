import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/canakkale-turkusu-yazari',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/canakkale-turkusu-yazari.vue') }],
  },
  {
    path: '/kafkas-cephesi',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/kafkas-cephesi.vue') }],
  },
  {
    path: '/Contact',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Contact.vue') }],
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
