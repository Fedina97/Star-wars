import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/MainPage')
  },
  {
    path: '/people',
    name: 'people',
    props: true,
    component: () => import('../views/PeoplePage.vue'),
  },
  {
    path: '/people/:id',
    name:'about-person',
    props: true,
    component: () => import('../views/AboutPerson')
  },
  {
    path: '/starships',
    name: 'starships',
    props: true,
    component: () => import('../views/StarshipsPage'),
  },
  {
    path: '/starship/:id',
    name:'about-starship',
    props: true,
    component: () => import('../views/AboutStarship')
  },
  {
    path: '/catalog',
    name:'catalog',
    props: true,
    component: () => import('../views/Catalog')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
