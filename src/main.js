import Vue from 'vue'
import App from './App.vue'
import store from './store/index';
import axios from 'axios';
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

axios.defaults.baseURL = "https://conteudo.saude.es.gov.br/DevSEG/ConsultaNormas/";

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
