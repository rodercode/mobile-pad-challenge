<template>
  <button
    class="w-20 h-20 text-3xl border-black rounded-full btn-icon border-1"
  >
    <IconCall class="w-8 h-8" />
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import IconCall from "~icons/material-symbols/call";
export default defineComponent({
  props: {
    name: {
      type: String,
    },
  },
  components: {
    IconCall,
  },
});
</script>

<style lang="scss" scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
