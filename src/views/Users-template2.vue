<template>
  <h2 v-if="isLoading">Espere ...</h2>
  <h2 v-else>Usuarios</h2>
  <h5 v-if="errorMessage">Error en carga</h5>
  <div v-if="users.length > 0">
    <ul>
      <li v-for="user in users" :key="user.id">
        <h4>{{ user.first_name }} {{ user.last_name }}</h4>
        <h6>{{ user.email }}</h6>
      </li>
    </ul>
  </div>
  <button @click="prevPage">Atras</button>
  <span>{{ currentPage }}</span>
  <button @click="nextPage">Siguiente</button>
</template>

<script>
import useUsers from "@/composables/useUsers";
export default {
  name: "Users-component",
  setup() {
    const { users, isLoading, errorMessage, currentPage, nextPage, prevPage } =
      useUsers();
    return {
      currentPage,
      errorMessage,
      isLoading,
      users,
      nextPage,
      prevPage,
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  width: 100%;
}

div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 250px;
}
</style>
