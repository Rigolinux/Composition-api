<template>
  <!-- <ul>
    <li v-for="user in users" :key="user.id">
      <h4>{{ user.first_name }} {{ user.last_name }}</h4>
      <h6>{{ user.email }}</h6>
    </li>
  </ul> -->
  <slot v-for="user in users" :user="user" :key="user.id"></slot>
</template>

<script>
export default {
  name: "UserList",
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
ul {
  list-style: none;
}
</style>
