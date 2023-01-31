<template>
  <div>
    <h1>Search Pokemon: {{ pokemonId }}</h1>
    <form @submit.prevent="onSubmit">
      <input
        type="number"
        placeholder="Search Pokemon"
        autofocus
        v-model="pokemonId"
        ref="txtSearch"
      />
      <span>Press enter to continue</span>
    </form>
  </div>
</template>

<script>
import { ref, onActivated } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "SearchPokemon-component",
  setup() {
    const router = useRouter();
    const pokemonId = ref(null);
    const txtSearch = ref();

    onActivated(() => {
      txtSearch.value.select();
    });

    return {
      pokemonId,
      txtSearch,
      onSubmit: () => {
        console.log(pokemonId.value);
        router.push({
          name: "pokemon-detail",
          params: { id: pokemonId.value },
        });
      },
    };
  },
};
</script>

<style></style>
