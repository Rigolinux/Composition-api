<template>
  <h1>Lista de tareas</h1>
  <!-- <h4>Tareas {{ $store.state.todo.length }}</h4> -->

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
import useTodo from "@/composables/useTodo";

export default {
  name: "TodoVuex",
  setup() {
    const { getBytab, pending, currentTab, toggleTodo } = useTodo();
    return {
      getBytab,
      pending,
      currentTab,
      toggleTodo,
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
