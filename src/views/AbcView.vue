<template>
  <Hui :product="product" />
</template>

<script setup>
const props = defineProps(["product"]);
import Hui from "../components/Hui.vue";
</script>

<style lang="scss" scoped></style>
