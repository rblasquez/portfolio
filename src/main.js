import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/pillar-1.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render (h) {
    return h(App);
  },
}).$mount('#app');
