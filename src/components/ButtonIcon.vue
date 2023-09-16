<template>
  <button class="w-20 h-20 text-3xl duration-500 rounded-full border-primary-color-light hover:bg-primary-color-base w-29 btn-icon border-1 hover:text-white">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
