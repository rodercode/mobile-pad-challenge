<template>
  <!-- HOME -->
  <div>
    <h1>Hello world</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import baselineSignalWifi1Bar from "~icons/ic/baseline-signal-wifi-1-bar";

export default defineComponent({
  components: {
    baselineSignalWifi1Bar,
  },
  name: "HomeView",
  data() {
    return {};
  },
});
</script>
