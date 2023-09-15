<template>
  <button
    class="w-20 h-20 text-3xl border-black rounded-full btn-icon place-items-center border-1"
  >
    <IconAsterisk />
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import IconAsterisk from "~icons/streamline/computer-keyboard-asterisk-2-asterisk-star-keyboard";
export default defineComponent({
  components: {
    IconAsterisk,
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
