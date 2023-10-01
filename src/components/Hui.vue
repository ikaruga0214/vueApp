<template>
  <div>
    <RouterLink to="/">
      <img :src="`../${data.data[product].image}`" />
    </RouterLink>
    <p>{{ data.data[product].description }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["product"]);
import { useDataStore } from "../stores/data";
const data = useDataStore();
</script>

<style scoped>
img {
  max-width: 50%;
}
</style>
