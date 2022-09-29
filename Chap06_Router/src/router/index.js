import { createRouter, createWebHistory } from "vue-router";
import A01Binding from "./../views/A01Binding.vue";
import A02Attribute from "./../views/A02Attribute.vue";
import A03Params from "@views/A03Params.vue";
import A04Props from "@views/A04Props.vue";
import A05Contact from "@views/A05Contact.vue";
import A05ContactChild from "@views/A05ContactChild.vue";
// import A06Query from "@views/A06Query.vue";
// import A07Push from "@views/A07Push.vue";
import A08ChildRouter from "@views/A08ChildRouter.vue";
import CompanyInfo from "@components/CompanyInfo.vue";
import CompanyWay from "@components/CompanyWay.vue";
import A09NotFound from "@views/A09NotFound.vue";

const routes = [
  { path: "/", name: "index", redirect: "/A01Binding" },
  { path: "/A01Binding", name: "bind", component: A01Binding },
  { path: "/A02Attr", name: "attr", component: A02Attribute },

  // :no는 패스이면서 변수명의 역할을 한다. 값은 link에서 할당한 값이 대입된다
  // 값 참조는 각 컴퍼넌트(A03Prams.vue)에서 참조하여 사용한다.
  { path: "/A03Params/:no/:name", name: "params", component: A03Params },

  // props: true면 패스의 no와 name을 props: ['no', ...] 형태로 받아 사용 가능
  { path: "/A04Props/:no/:name", name: "props", component: A04Props, props: true },

  { path: "/A05Contact", name: "contact", component: A05Contact },
  {
    path: "/A05ContactChild/:no",
    name: "contactChild",
    component: A05ContactChild,
    props: (route) => ({ no: Number(route.params.no) }),
  },

  // 주소줄의 ?key=value&key=value#hash 의 값을 받아 처리할 목적. 값은 router-link에서 설정한다.
  // { path: "/A06Query", name: "query", component: A06Query },
  // { path: "/A07Push", name: "push", component: A07Push },

  // lazy load. link가 클릭되면 그때 서버에 요청해서 해당 컴퍼넌트를 불러온다.
  { path: "/A06Query", name: "query", component: () => import("@views/A06Query.vue") },
  { path: "/A07Push", name: "push", component: () => import("@views/A07Push.vue") },

  // 하위 router를 구성한다
  {
    path: "/A08Child",
    name: "child",
    component: A08ChildRouter,
    children: [
      { path: "", name: "info", component: CompanyInfo },
      { path: "way", name: "way", component: CompanyWay },
      {
        path: "/A08Child/view/:no",
        name: "view",
        component: A05ContactChild,
        props: (route) => ({ no: Number(route.params.no) }),
      },
    ],
  },
  { path: "/:path(.*)", name: "not", component: A09NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
