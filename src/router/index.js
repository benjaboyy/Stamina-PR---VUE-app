import { createRouter, createWebHistory } from 'vue-router'
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
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/submit',
    name: 'submit',
    component: () => import(/* webpackChunkName: "submit" */ '../views/SubmitView.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import(/* webpackChunkName: "history" */ '../views/HistoryView.vue')
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: () => import(/* webpackChunkName: "ranking" */ '../views/RankingView.vue')
  },
  {
    path: '/monthly/:year/:month',
    name: 'monthly',
    component: () => import(/* webpackChunkName: "monthly" */ '../views/RankingMonth.vue')
  },
  {
    path: '/verify',
    name: 'verify',
    component: () => import(/* webpackChunkName: "verify" */ '../views/VerifyView.vue')
  },
  {
    path: '/hallOfFame',
    name: 'hallOfFame',
    component: () => import(/* webpackChunkName: "hallOfFame" */ '../views/HallOfFameView.vue')
  },
  {
    path: '/qrtester',
    name: 'qrTester',
    component: () => import(/* webpackChunkName: "qrTester" */ '../views/QrTester.vue')
  },
  {
    path: '/points',
    name: 'points',
    component: () => import(/* webpackChunkName: "qrTester" */ '../views/EditPoints.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/ShopView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
