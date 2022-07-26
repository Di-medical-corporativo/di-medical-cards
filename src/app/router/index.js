import { createRouter, createWebHashHistory } from 'vue-router'
import CardRouter from '../modules/card/router';
import checkSucursalParam from './sucursal-guard';

const routes = [
  {
    path: '/:sucursal',
    ...CardRouter,
    beforeEnter: checkSucursalParam,
    redirect: { name: 'not-found' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
}

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
