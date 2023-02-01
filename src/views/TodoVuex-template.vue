<template>
  <h1>Lista de tareas</h1>
  <!-- <h4>Tareas {{ $store.state.todo.length }}</h4> -->
  +
  <h4>Pendientes {{ pending.length }}</h4>
  <hr />
  <button :class="{ active: currentTab === 'all' }" @click="currentTab = 'all'">
    Todos
  </button>
  <button
    :class="{ active: currentTab === 'pending' }"
    @click="currentTab = 'pending'"
  >
    Pendientes
  </button>
  <button
    :class="{ active: currentTab === 'completed' }"
    @click="currentTab = 'completed'"
  >
    Completadas
  </button>
  <div>
    <ul>
      <li
        v-for="t in getBytab"
        :key="t.id"
        :class="{ ' completed': t.completed === true }"
        @dblclick="toggleTodo(t.id)"
      >
        <!-- <input type="checkbox" v-model="t.completed" /> -->
        {{ t.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "TodoVuex",
  setup() {
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
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

ul {
  list-style: none;
  width: 300px;
  text-align: left;
}

li {
  cursor: pointer;
}

.active {
  background-color: #2c3e50;
  color: #fff;
}

.completed {
  text-decoration: line-through;
}
</style>
