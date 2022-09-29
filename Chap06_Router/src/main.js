import { createApp } from "vue";
import App from "./App.vue";

// import 구문에서 파일명을 지정하지 않으면 index.js를 의미
import router from "./router/";

// 모든 컴퍼넌트에서 사용할 CSS 파일을 등록
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
