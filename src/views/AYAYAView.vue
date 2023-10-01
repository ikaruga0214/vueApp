<template>
  <Items />
  <ToTopButton />
  <RouterView />
</template>

<script setup>
import { ref } from "vue";
import Modal from "../components/Modal.vue";
import Items from "../components/Items.vue";
import NavBar from "../components/NavBar.vue";
import { RouterView } from "vue-router";
import ToTopButton from "../components/ToTopButton.vue";
</script>
