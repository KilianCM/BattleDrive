import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';

import HomePage from "./components/Home/HomePage";
import WhoPage from "./components/Who/WhoPage";
import ProgramPage from "./components/Program/ProgramPage";
import PartnersPage from "./components/Partners/PartnersPage";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
    { path: '/', component: HomePage, name: 'home' },
    { path: '/qui-sommes-nous', component: WhoPage, name: 'us' },
    { path: '/notre-programme', component: ProgramPage, name: 'program' },
    { path: '/nos-partenaires', component: PartnersPage, name: 'partners' }
  ];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');