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
  <button @click="isOpen = true">Crear Todo</button>
  <modal-component v-if="isOpen" @on:close="isOpen = false">
    <template v-slot:header>
      <h1>New Todo</h1>
    </template>
    <template v-slot:body>
      <form
        @submit.prevent="
          createTodo({ title: todoForm.title, completed: todoForm.completed });
          isOpen = false;
        "
      >
        <label for="title">Title</label>
        <input type="text" v-model="todoForm.title" />
        <label for="completed">Completed</label>
        <input type="checkbox" v-model="todoForm.completed" />
        <button type="submit">Crear Todo</button>
      </form>
    </template>
  </modal-component>
</template>

<script>
import useTodo from "@/composables/useTodo";
import ModalComponent from "@/components/ModalComponent.vue";
import { ref } from "@vue/reactivity";

export default {
  components: { ModalComponent },
  name: "TodoVuex",
  setup() {
    const { getBytab, pending, currentTab, toggleTodo, todoForm, createTodo } =
      useTodo();
    return {
      getBytab,
      pending,
      currentTab,
      toggleTodo,
      todoForm,
      createTodo,
      isOpen: ref(false),
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
