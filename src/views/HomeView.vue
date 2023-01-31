<template>
  <div class="home">
    <h1>Reactive VS Ref</h1>
    <h2>{{ ironman }}</h2>
    <h2>{{ hulk }}</h2>
    <button @click="changueIronamn">Changue Ironman</button>
    <button @click="changueHulk">Changue Hulk</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, reactive } from "vue";
export default {
  name: "HomeView",
  components: {},
  setup() {
    const ironman = ref({
      name: "Tony Stark",
      age: 45,
      isAvenger: true,
    });

    // the property reactive only works with the object
    const hulk = reactive({
      name: "Bruce Banner",
      age: 40,
      isAvenger: true,
    });

    return {
      ironman,
      hulk,
      changueIronamn() {
        ironman.value.name = "Tony Stark";
        ironman.value.age = 46;
      },
      changueHulk() {
        hulk.name = "Bruce Banner";
        hulk.age = 41;
      },
    };
  },
};
</script>
