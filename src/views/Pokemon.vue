<template>
  <div>
    <h1>Pokemon View</h1>
    <div v-if="isLoading">
      <h2>Loading...</h2>
    </div>
    <div v-else-if="errorMessage">
      <h2>{{ errorMessage }}</h2>
    </div>
    <div v-else>
      <h2>{{ pokemon.name }}</h2>
      <img :src="pokemon.sprites.front_default" />
    </div>
  </div>
  <router-link to="/">Back to Home</router-link>
</template>

<script>
import { watch } from "vue";
import { useRoute, onBeforeRouteLeave } from "vue-router";
import usePokemon from "@/composables/usePokemon";
export default {
  name: "Pokemon-component",
  setup() {
    const route = useRoute();
    const { pokemon, isLoading, errorMessage, searchPokemon } = usePokemon(
      route.params.id
    );
    watch(
      () => route.params.id,
      (id) => {
        pokemon.value = null;
        isLoading.value = true;
        errorMessage.value = null;
        pokemon.value = searchPokemon(id);
      }
    );
    onBeforeRouteLeave((to, from, next) => {
      const answer = window.confirm("Are you sure you want to leave?");
      if (answer) {
        next();
      } else {
        next(false);
      }
    });
    return {
      pokemon,
      isLoading,
      errorMessage,
    };
  },
};
</script>

<style></style>
