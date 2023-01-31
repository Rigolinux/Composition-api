<template>
  <h1>Counter</h1>
  <h3>{{ count }}</h3>
  <button @click="increse">+</button>
  <button @click="decrese">-</button>
</template>

<script>
import useCounter from "@/composables/useCounter";
export default {
  name: "Counter-component",
  setup() {
    const { count, decrese, increse } = useCounter();

    return {
      count,
      decrese,
      increse,
    };
  },
};
</script>

<style></style>
