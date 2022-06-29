import { createApp } from "vue";
import { createPinia } from "pinia";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from "./App.vue";
import router from "./router";
import apiService from "../service/api.service";

const app = createApp(App);
apiService.init();
app.use(createPinia());
app.use(router);
app.use(Toast);
app.mount("#app");
