export default {
    name: 'card',
    component: () => import('../layouts/mainLayout.vue'),
    children: [
        {
            path: ':name',
            name: 'contact-card',
            component: () => import('../views/ContactView.vue')
        },
        {
            path: ':name/about',
            name: 'about-card',
            component: () => import('../views/AboutView.vue')
        },
    ]
}