<template>
  <!-- HOME -->
  <main class="py-12 m-auto bg-white home rounded-xl basis-96">
    <!-- HEADER -->
    <header class="mb-8">
      <!-- PHONE NUMBER -->
      <h1 class="h-8 text-3xl text-center">{{ phoneNumber }}</h1>
    </header>

    <!-- GRID CONTAINER -->
    <div class="grid justify-between grid-cols-3 m-auto max-w-xxs gap-y-6">
      <!-- BTNS NUMBERS FROM 1-9 -->
      <ButtonNumber
        v-on:set-number="updatePhoneNumber"
        v-for="number in numbers"
        :key="number"
        :name="number"
      />

      <!-- BTN ASTERISK -->
      <ButtonIcon @click="updatePhoneNumber('*')">
        <IconAsterisk />
      </ButtonIcon>

      <!-- BTN NUMBER 0 -->
      <ButtonNumber v-on:set-number="updatePhoneNumber" name="0" />

      <!-- BTN HASH -->
      <ButtonIcon @click="updatePhoneNumber('#')">
        <IconHash />
      </ButtonIcon>

      <!-- BTN PLUS -->
      <button class="text-5xl border-none">+</button>
      <!-- BTN CALL -->
      <button
        class="text-white border-none bg-secondary-color-base hover:bg-secondary-color-light"
      >
        <IconCall />
      </button>

      <!-- BTN BACKSPACE -->
      <button
        :disabled="phoneNumber.length <= 0"
        @click="deleteLastDigit"
        class="border-none"
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
  data() {
    return {
      numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      phoneNumber: "",
      numberIsEmpty: true,
    };
  },
  methods: {
    updatePhoneNumber(digit: string) {
      this.phoneNumber += digit;
    },
    deleteLastDigit() {
      if (this.phoneNumber.length > 0) {
        console.log("Delete last digit");
        this.phoneNumber = this.phoneNumber.slice(0, -1);
      }
    },
  },
});
</script>
