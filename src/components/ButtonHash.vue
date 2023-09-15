<template>
  <button
    class="w-20 h-20 text-3xl border-black rounded-full btn-icon place-items-center border-1"
  >
    <IconHash />
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import IconHash from "~icons/ph/hash-straight-bold";
export default defineComponent({
  components: {
    IconHash,
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
