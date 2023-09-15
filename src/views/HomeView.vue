<template>
  <!-- HOME -->
  <div>
    <NavLink name="Home" />
    <HomeLink />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import baselineSignalWifi1Bar from "~icons/ic/baseline-signal-wifi-1-bar";
import BaseButtonLink from "../components/base/BaseButtonLink.vue";
import ButtonMenu from "../components/ButtonMenu.vue";
import NavLink from "../components/NavLink.vue";
import HomeLink from "../components/HomeLink.vue";

export default defineComponent({
  components: {
    baselineSignalWifi1Bar,
    BaseButtonLink,
    ButtonMenu,
    NavLink,
    HomeLink,
  },
  name: "HomeView",
  data() {
    return {};
  },
});
</script>
