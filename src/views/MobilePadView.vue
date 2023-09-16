<template>
  <!-- HOME -->
  <main class="py-12 m-auto bg-white home rounded-xl">
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

      <!-- BTN ASTERISK -->
      <ButtonIcon>
        <IconAsterisk />
      </ButtonIcon>

      <!-- BTN NUMBER 0 -->
      <ButtonNumber name="0" />

      <!-- BTN HASH -->
      <ButtonIcon>
        <IconHash />
      </ButtonIcon>

      <button
        class="w-20 h-20 text-3xl duration-500 border-none rounded-full hover:bg-primary-color-base w-29 btn-icon border-1 hover:text-white"
      >
        +
      </button>

      <button
        class="w-20 h-20 text-3xl text-white duration-500 border-none rounded-full hover:bg-secondary-color-light bg-secondary-color-base w-29 btn-icon border-1"
      >
        <IconCall />
      </button>
      <button
        class="w-20 h-20 text-3xl duration-500 border-none rounded-full hover:bg-primary-color-base w-29 btn-icon border-1 hover:text-white"
      >
        <IconBackspace />
      </button>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// IMPORT BUTTONS COMPONENTS
import ButtonNumber from "../components/ButtonNumbers.vue";
import ButtonIcon from "../components/ButtonIcon.vue";

// IMPORT ICONS COMPONENTS
import IconCall from "~icons/material-symbols/call";
import IconAsterisk from "~icons/streamline/computer-keyboard-asterisk-2-asterisk-star-keyboard";
import IconHash from "~icons/ph/hash-straight-bold";
import IconBackspace from "~icons/material-symbols/backspace-rounded";

export default defineComponent({
  components: {
    // BUTTONS COMPONENTS
    ButtonNumber,
    ButtonIcon,

    // ICONS COMPONENTS
    IconCall,
    IconAsterisk,
    IconHash,
    IconBackspace,
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
  row-gap: 1.5rem;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
