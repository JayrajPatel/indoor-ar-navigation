import Vue from 'vue';
import App from './App.vue';
import router from './router';
import * as THREE from 'three';

Vue.config.productionTip = false;
Vue.prototype.$three = THREE;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
