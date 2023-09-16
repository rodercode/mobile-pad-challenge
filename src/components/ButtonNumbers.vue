<template>
  <button
    class="w-20 h-20 text-3xl duration-500 rounded-full border-primary-color-light hover:bg-primary-color-base w-29 btn-icon border-1 hover:text-white"
  >
    {{ name }}
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    name: {
      type: String,
    },
  },
});
</script>

<style></style>
