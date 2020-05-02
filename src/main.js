import Vue from "vue";
import App from "./App";
import router from "./router";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";
import VueChatScroll from "vue-chat-scroll";

Vue.use(VueChatScroll);

Vue.config.productionTip = false;

let app = null;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  }
});
