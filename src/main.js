import Vue from 'vue';

import App from './App';
import router from './routers';
import Http from './apis';

Vue.config.productionTip = false;

Vue.use(Http);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
