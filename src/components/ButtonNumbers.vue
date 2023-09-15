<template>
  <button
    class="w-20 h-20 text-3xl border-black rounded-full btn-icon border-1"
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
