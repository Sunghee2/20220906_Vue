import { createStore } from "vuex";
import todoListS from "./todoList";

const store = new createStore({
  // 전역에서 사용할 변수 관리
  state: {
    title: "Counter Store",
    num: 0,
    contacts: [
      { no: 1001, name: "김유신", tel: "010-1212-3331", address: "경주" },
      { no: 1002, name: "장보고", tel: "010-1212-3332", address: "청해진" },
      { no: 1003, name: "관창", tel: "010-1212-3333", address: "황산벌" },
    ],
  },
  // state에 값을 변경할 메서드를 기술 (view에서 직접 호출할 수 있음)
  mutations: {
    increase(state, payload) {
      state.num = state.num + payload;
    },
    decrease(state) {
      state.num = state.num - 1;
    },
  },
  // view에서 호출되는 메서드. 여기서 mutations를 호출 (사전처리, ajax 등..)
  actions: {},
  // state의 값을 참조하는 getter method.
  // component의 computed와 같이 기존 값을 참조로 새로운 값이 필요한 경우 사용
  getters: {
    itemCounter: (state) => state.contacts.length,
    getItem: (state) => (no) => state.contacts.find((item) => item.no === no),
  },
  // 하위 store를 구성할 목적으로 사용
  modules: {
    todoListS,
    /*
    todoList: {
      state: {},
      mutations: {},
      actions: {},
      modules: {}
    }
    */
  },
});
export default store;
