import { computed, ref } from "vue";
import { useStore } from "vuex";

const useTodo = () => {
  const store = useStore();
  const currentTab = ref("all");

  return {
    currentTab,
    toggleTodo: (id) => store.commit("toggleTodo", id),
    pending: computed(() => store.getters["pendingTodo"]),
    all: computed(() => store.getters["allTodo"]),
    completed: computed(() => store.getters["completedTodo"]),
    // done: computed(() => store.state.todo.filter((t) => t.done)),
    getBytab: computed(() => store.getters["getTodoByTab"](currentTab.value)),
    todoForm: ref({ title: "", completed: false }),
    createTodo: (todo) => store.commit("createTodo", todo),
  };
};

export default useTodo;
