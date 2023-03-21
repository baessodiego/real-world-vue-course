import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EventListView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/event/:id',
      props: true,
      name: 'eventDetails',
      component: () => import('../views/EventDetailsView.vue')
    },
    {
      path: "*",
      name: "ErrorPage",
      component: () => import('../views/ErrorPageView.vue')
    }
  ]
})

export default router
