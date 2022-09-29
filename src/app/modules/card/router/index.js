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
    }
  ]
}
