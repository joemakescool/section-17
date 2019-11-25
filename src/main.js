import Vue from 'vue'
import App from './App.vue'

// Styles
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Data Store
import {store} from './components/store/store'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store // global object now access via $store
}).$mount('#app');
