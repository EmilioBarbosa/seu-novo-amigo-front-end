
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: '/cadastrar-animal',
        component: () => import('src/pages/AnimalSignUp.vue'),
        name: 'animal-signup'
      },
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
  {
    path: '/inicio-rapido',
    component: () => import('pages/FastInitPage.vue'),
    name: 'fast-init'
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
