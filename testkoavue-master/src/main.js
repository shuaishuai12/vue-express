// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as utils from './utils';


//引入vux
import { AjaxPlugin, LoadingPlugin, ToastPlugin, ConfirmPlugin,AlertPlugin } from 'vux';
Vue.use(AjaxPlugin);
Vue.use(ToastPlugin);
Vue.use(LoadingPlugin);
Vue.use(ConfirmPlugin);
Vue.use(AlertPlugin)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  utils,
  components: { App },
  template: '<App/>'
})
