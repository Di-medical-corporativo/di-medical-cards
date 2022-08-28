export default {
  name: 'card',
  component: () => import('../layouts/mainLayout.vue'),
  children: [
    {
      path: ':name',
      name: 'contact-card',
      component: () => import('../views/ContactView.vue'),
      meta: { transition: 'slide-left' }
    },
    {
      path: ':name/about',
      name: 'about-card',
      component: () => import('../views/AboutView.vue'),
      meta: { transition: 'slide-right' }
    },
    {
      path: ':name/products',
      name: 'products-card',
      component: () => import('../views/ProductsView.vue'),
      meta: { transition: 'slide-left' }
    }
  ]
}
