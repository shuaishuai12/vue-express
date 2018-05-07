import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import { routes } from './Router'

Vue.use(Router)

const router =new Router({
  // mode: 'history',
  routes: routes
})


export default router;



