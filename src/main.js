import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import HomePage from "./components/HomePage";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/', component: HomePage }
  ];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')