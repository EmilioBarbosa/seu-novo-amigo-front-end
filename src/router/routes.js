
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue')
      }
    ]
  },

  {
    path: '/login',
    component: () => import('pages/LoginPage.vue'),
    name: 'login'
  },

  {
    path: '/cadastro',
    component: () => import('pages/SignUpPage.vue'),
    name: 'signup'
  },

  // {
  //   path: '/',
  //   component: () => import('pages/SignUpPage.vue'),
  //   name: 'signup'
  // },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
