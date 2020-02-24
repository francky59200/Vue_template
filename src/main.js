import Vue from "vue";
import App from "./App.vue";
import { ButtonPlugin } from "bootstrap-vue";
Vue.use(ButtonPlugin);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
