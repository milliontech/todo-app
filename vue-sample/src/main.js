import "./main.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import moment from "moment";

Vue.config.productionTip = false;

Vue.filter('format', function (value) {
    return moment(value).format('MMMM Do YYYY, h:mm:ss a');
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
