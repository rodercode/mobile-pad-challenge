<template>
  <!-- HOME -->
  <main class="py-12 m-auto bg-white home">
    <!-- HEADER -->
    <header class="mb-8">
      <!-- PHONE NUMBER -->
      <h1 class="text-3xl text-center">0748 869 733</h1>

      <!-- FULLNAME  -->
      <p class="text-lg text-center">Larry Black</p>
    </header>

    <!-- GRID CONTAINER -->
    <div class="m-auto max-w-xxs grid-container">
      <!-- BTN NUMBERS 1-9 -->
      <ButtonNumber v-for="number in numbers" :key="number" :name="number" />

      <ButtonAsterisk />
      <!-- BTN NUMBER 0 -->
      <ButtonNumber name="0" />
      <ButtonHash />
      <ButtonAdd />
      <ButtonCall />
      <ButtonBackSpace />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// IMPORT COMPONENTS
import ButtonNumber from "../components/ButtonNumbers.vue";
import ButtonHash from "../components/ButtonHash.vue";
import ButtonAsterisk from "../components/ButtonAsterisk.vue";
import ButtonAdd from "../components/ButtonAdd.vue";
import ButtonCall from "../components/ButtonCall.vue";
import ButtonBackSpace from "../components/ButtonBackSpace.vue";

export default defineComponent({
  components: {
    ButtonNumber,
    ButtonHash,
    ButtonAsterisk,
    ButtonAdd,
    ButtonCall,
    ButtonBackSpace,
  },
  name: "HomeView",
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
});
</script>

<style lang="scss" scoped>
.home {
  flex-basis: 375px;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: space-between;
  row-gap: 1rem;
  border: 1px solid black;
}
</style>
