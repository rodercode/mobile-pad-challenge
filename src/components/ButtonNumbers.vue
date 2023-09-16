<template>
  <button class="component-btn" @click="handleButtonClick">
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
    handleButtonClick(event: any) {
      this.$emit("set-number", event.target.innerHTML);
    },
  },
});
</script>
