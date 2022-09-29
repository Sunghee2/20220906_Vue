import { createApp } from "vue";
import App from "./App.vue";

// 모든 컴퍼넌트에서 사용할 CSS 파일을 등록
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);

app.config.unwrapInjectedRef = true;
app.config.errorHandler = (err, vm, info) => {
  console.log(" ----------------- Global Error ------------------");
  console.error(err);
  console.log(vm); // Error가 발생한 컴퍼넌트
  console.log(info); // vue 자체 안내 문구
};

// main만 존재
app.config.warnHandler = (err, vm, info) => {
  console.log(" ----------------- Global Warn ------------------");
  console.warn(err);
  console.log(vm); // Error가 발생한 컴퍼넌트
  console.log(info); // vue 자체 안내 문구
};

app.mount("#app");
