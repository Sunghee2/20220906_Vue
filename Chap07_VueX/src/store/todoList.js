const TODOLIST_UPDATE = "TODOLIST_UPDATE";
const TODOLIST_DELETE = "TODOLIST_DELETE";
const TODOLIST_ADD = "TODOLIST_ADD";
const TODOLIST_CHANGETEXT = "TODOLIST_CHANGETEXT";

const todoList = {
  namespaced: true,
  state: {
    todoList: [
      { id: 1, text: "첫 번째 할 일", done: true },
      { id: 2, text: "두 번째 할 일", done: false },
      { id: 3, text: "세 번째 할 일", done: false },
    ],
    text: "",
    id: 4,
  },
  mutations: {
    [TODOLIST_UPDATE]: (state, payload) => {
      const todo = state.todoList.find((todo) => todo.id === payload);
      todo.done = !todo.done;
    },
    [TODOLIST_DELETE]: (state, payload) => {
      const index = state.todoList.findIndex((todo) => todo.id === payload);
      state.todoList.splice(index, 1);
    },
    [TODOLIST_ADD]: (state, payload) => {
      console.log(payload);
      const todo = { id: state.id++, text: payload, done: false };
      state.todoList.push(todo);
    },
    [TODOLIST_CHANGETEXT]: (state, payload) => {
      state.text = payload;
    },
  },
  actions: {
    [TODOLIST_UPDATE]: (action, value) => {
      console.log(value);
      setTimeout(() => {
        const result = Number(value);
        action.commit(TODOLIST_UPDATE, result);
      }, 1000);
    },
  },
  getters: {
    itemCounter: (state) => state.todoList.length,
  },
  modules: {},
};
export default todoList;
