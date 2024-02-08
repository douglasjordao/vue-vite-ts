import { RouteRecordRaw } from 'vue-router';

import Layout from '@/layout/Index.vue';
import Home from '@/views/Home/Index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home,
      },
    ],
  },
];

export default routes;
