<template>
  <button @click="click">
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
  methods: {
    click(event: any) {
      this.$emit("set-child-data", event.target.innerHTML);
    },
  },
});
</script>

<style></style>
