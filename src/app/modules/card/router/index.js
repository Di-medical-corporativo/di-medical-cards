export default {
  name: 'card',
  component: () => import('../layouts/mainLayout.vue'),
  children: [
    {
      path: ':id',
      name: 'contact-card',
      component: () => import('../views/ContactView.vue'),
      meta: { transition: 'slide-left' }
    },
    {
      path: ':id/about',
      name: 'about-card',
      component: () => import('../views/AboutView.vue'),
      meta: { transition: 'slide-right' }
    },
    {
      path: ':id/qr',
      name: 'qr-card',
      component: () => import('../views/QRCodeView.vue'),
      meta: { transition: 'slide-left' }
    },
    {
      path: ':id/products',
      name: 'products-card',
      component: () => import('../views/ProductsView.vue'),
      meta: { transition: 'slide-right' }
    }
  ]
}
