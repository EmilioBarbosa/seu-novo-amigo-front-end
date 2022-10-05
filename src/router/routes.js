
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    name: 'home',
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: '/adotar',
        component: () => import('pages/AdoptPage.vue'),
        name: 'adopt'
      },
      {
        path: '/cadastrar-animal',
        component: () => import('src/pages/AnimalSignUp.vue'),
        name: 'animalSignUp'
      },
      {
        path: '/login',
        component: () => import('pages/LoginPage.vue'),
        name: 'login'
      },

      {
        path: '/cadastro',
        component: () => import('pages/SignUpPage.vue'),
        name: 'signUp'
      },
      {
        path: '/inicio-rapido',
        component: () => import('pages/FastInitPage.vue'),
        name: 'fastInit'
      },
      {
        path: '/sobre',
        component: () => import('pages/AboutPage.vue'),
        name: 'about'
      },
      {
        path: '/informacoes-do-animal',
        component: () => import('pages/AnimalDetailsPage.vue'),
        name: 'AnimalDetails'
      },
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
