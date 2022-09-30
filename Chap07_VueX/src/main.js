import { createApp } from "vue";
import App from "./App.vue";

// store
import store from "./store";

// 모든 컴퍼넌트에서 사용할 CSS 파일을 등록
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);
app.use(store);

app.mount("#app");
