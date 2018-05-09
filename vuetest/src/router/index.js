// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
//
// Vue.use(Router)
//
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: () =>
//     }
//   ]
// })


import Vue from 'vue';
import Router from 'vue-router';
/*import store from '../store';*/
import { routes } from './routes';

Vue.use(Router);

const router = new Router({
  //mode: 'history',
  routes: routes
});
//
// router.beforeEach((to, from, next) => {
//   Vue.$vux.loading.show({ text: '加载中' });
//
// // if (to.matched.some(record => record.meta.requiresAuth)) {
// if (/^\/login/.test(to.path) || store.state.user.userid) return next();
//
// store.dispatch('userinfo').then(
//   result => next(),
//   error => {
//   if (/^\/login/.test(from.path)) {
//     next(false);
//     setTimeout(() => Vue.$vux.loading.hide(), 60);
//   } else {
//     next({ path: '/login' });
//   }
// }
// );
// });
//
// router.afterEach(to => setTimeout(() => Vue.$vux.loading.hide(), 60));

export default router;

