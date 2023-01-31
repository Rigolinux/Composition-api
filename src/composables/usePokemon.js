import { ref } from "vue";

const usePokemon = (pokemonId = 1) => {
  const pokemon = ref();
  const isLoading = ref(false);
  const errorMessage = ref();

  const searchPokemon = async (id) => {
    if (!id) return;
    isLoading.value = true;
    pokemon.value = null;

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      pokemon.value = data;
      errorMessage.value = null;
    } catch (error) {
      errorMessage.value = error.message;
    } finally {
      isLoading.value = false;
    }
  };

  searchPokemon(pokemonId);

  return {
    pokemon,
    isLoading,
    errorMessage,
    searchPokemon,
  };
};

export default usePokemon;
