<template>
  <button
    class="w-20 h-20 text-3xl border-black rounded-full btn-icon place-items-center border-1"
  >
    <IconBackspace class="w-12 h-12" />
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import IconBackspace from "~icons/material-symbols/backspace-rounded";
export default defineComponent({
  components: {
    IconBackspace,
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
