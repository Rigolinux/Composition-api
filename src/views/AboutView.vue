<template>
  <div class="about">
    <h1>This is an lifecicle hooks of setup</h1>
  </div>
</template>

<script>
import {
  onMounted,
  onUpdated,
  onUnmounted,
  onActivated,
  onDeactivated,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onRenderTracked,
  onRenderTriggered,
} from "vue";

export default {
  setup() {
    // onMounted is a hook that is executed when the component is mounted
    onMounted(() => {
      console.log("Mounted");
    });

    // onUpdated is a hook that is executed when the component is updated
    onUpdated(() => {
      console.log("Updated");
    });

    // onUnmounted is a hook that is executed when the component is unmounted
    onUnmounted(() => {
      console.log("Unmounted");
    });

    // onActivated is a hook that is executed when the component is activated
    onActivated(() => {
      console.log("Activated");
    });

    // onDeactivated is a hook that is executed when the component is deactivated
    onDeactivated(() => {
      console.log("Deactivated");
    });

    // onBeforeMount is a hook that is executed before the component is mounted
    onBeforeMount(() => {
      console.log("Before Mount");
    });

    // onBeforeUpdate is a hook that is executed before the component is updated
    onBeforeUpdate(() => {
      console.log("Before Update");
    });

    // onBeforeUnmount is a hook that is executed before the component is unmounted
    onBeforeUnmount(() => {
      console.log("Before Unmount");
    });

    // onBeforeUnmount is a hook that is executed before the component is unmounted
    onBeforeUnmount(() => {
      console.log("Before Unmount");
    });

    // onRenderTracked is a hook that is executed when the component is rendered
    onRenderTracked(() => {
      console.log("Render Tracked");
    });

    // onRenderTriggered is a hook that is executed when the component is rendered
    onRenderTriggered(() => {
      console.log("Render Triggered");
    });

    return {};
  },
};
</script>
