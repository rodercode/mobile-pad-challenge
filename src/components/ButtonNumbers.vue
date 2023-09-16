<template>
  <button>
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
