import { createApp } from "vue";
import dayjs from "dayjs";
import App from "./App.vue";
// import ElementPlus from "element-plus"; // 使用 CSS
// import "element-plus/dist/index.css";

let app = createApp(App);

app.config.globalProperties.$dayjs = dayjs;
let appEl = window.document.getElementById("app");
// app.use(ElementPlus);

app.mount(appEl);
