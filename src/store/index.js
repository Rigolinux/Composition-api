import { createStore } from "vuex";

export default createStore({
  state: {
    todo: [
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
      { id: 3, title: "Todo 3", completed: true },
      { id: 4, title: "Todo 4", completed: false },
      { id: 5, title: "Todo 5", completed: true },
    ],
  },
  getters: {
    pendingTodo: (state) => {
      return state.todo.filter((todo) => !todo.completed);
    },
    allTodo: (state) => {
      return [...state.todo];
    },
    completedTodo: (state) => {
      return state.todo.filter((todo) => todo.completed);
    },
    getTodoByTab: (_, getters) => (tab) => {
      switch (tab) {
        case "all":
          return getters.allTodo;
        case "pending":
          return getters.pendingTodo;
        case "completed":
          return getters.completedTodo;
        default:
          return getters.allTodo;
      }
    },
  },
  mutations: {
    toggleTodo(state, id) {
      const todo = state.todo.findIndex((todo) => todo.id === id);
      state.todo[todo].completed = !state.todo[todo].completed;
    },
  },
  actions: {},
  modules: {},
});
