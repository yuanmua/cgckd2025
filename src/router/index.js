import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

import Home from "@/views/page/Home.vue";
import theme from "@/views/page/theme.vue";
import organization from "@/views/page/organization.vue";
// import PagerContribution from " /views/page/PagerContribution.vue";
import scenery from "@/views/page/scenery.vue";
import PagerContributions from "@/views/page/PagerContributions.vue";
import report from "@/views/page/report.vue";
import agenda from "@/views/page/agenda.vue";
import registerM from "@/views/page/registerM.vue";
import ContactMe from "@/views/page/ContactMe.vue";
import base from "@/views/page/base.vue";


const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  linkActiveClass:'router-link-exact-active',
  routes:  [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/theme',
      name: 'theme',
      component: theme
    },
    {
      path: '/organization',
      name: 'organization',
      component: organization
    },
    {
      path: '/scenery',
      name: 'scenery',
      component: () => import('../views/page/scenery.vue')
    },
    {
      path: '/PagerContributions',
      name: 'PagerContributions',
      component: PagerContributions
    },
    {
      path: '/scenery',
      name: 'scenery',
      component: scenery
    },
    {
      path: '/report',
      name: 'report',
      component: report
    },
    {
      path: '/agenda',
      name: 'agenda',
      component: agenda
    },
    {
      path: '/registerM',
      name: 'registerM',
      component: registerM
    },
    {
      path: '/ContactMe',
      name: 'ContactMe',
      component: ContactMe
    },
    {
      path: '/base/:id',
      name: 'base',
      component: base,
      props: true
}
  ]
})

export default router
