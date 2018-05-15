import Vue from 'vue';
import Vuetify from 'vuetify';
import ECharts from 'vue-echarts/components/ECharts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'vuetify/dist/vuetify.css';

import App from './App.vue';
import router from './router';
import store from './store';
// import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.component('chart', ECharts);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
