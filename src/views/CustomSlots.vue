<template>
  <h1>Learning About Slots</h1>
  <button @click="openModal">watchmodal</button>
  <ModalComponent v-if="isOpen" @on:close="closeModal" title="holaMundo">
    <template v-slot:header>
      <h1>Header</h1>
    </template>
    <template v-slot:body>
      <h1>Body</h1>
    </template>
    <template v-slot:footer>
      <button @click="closeModal">Close</button>
    </template>
    <template v-slot:exposed="{ newTitle }">
      <!-- <h1>{{ slotProps }}</h1> -->
      <h1>{{ newTitle }}</h1>
    </template>
  </ModalComponent>
</template>

<script>
import ModalComponent from "@/components/ModalComponent.vue";
import { ref } from "vue";
export default {
  components: {
    ModalComponent,
  },
  setup() {
    const isOpen = ref(false);
    return {
      isOpen,
      openModal() {
        isOpen.value = true;
      },
      closeModal() {
        isOpen.value = false;
      },
    };
  },
};
</script>

<style></style>
