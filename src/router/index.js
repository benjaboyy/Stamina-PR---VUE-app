import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/submit',
    name: 'submit',
    component: () => import(/* webpackChunkName: "about" */ '../views/SubmitView.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import(/* webpackChunkName: "about" */ '../views/HistoryView.vue')
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: () => import(/* webpackChunkName: "about" */ '../views/RankingView.vue')
  },
  {
    path: '/verify',
    name: 'verify',
    component: () => import(/* webpackChunkName: "about" */ '../views/VerifyView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router