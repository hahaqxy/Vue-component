import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Hxvue from "../lib/hxvue.umd";
import "../lib/hxvue.css";
import App from "./App.vue";
import "@/icons";
// import Fragment from 'vue-fragment'


Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(Hxvue);
// Vue.use(Fragment.Plugin);

new Vue({
  render: h => h(App)
}).$mount("#app");
