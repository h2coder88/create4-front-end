import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import mList from "./mock-list.js";
import mTraditions from "./mock-traditions.js";

let data = {
  list: mList,
  traditions: mTraditions
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");
