<template>
  <div class="">
    <div v-for="item in paginatedData" :key="item.num">
      <RouterLink :to="`/cart/${item.num}`">
        <img :src="item.image" />
      </RouterLink>
      {{ item.name }}
    </div>
    <button @click="backPage">prev</button>
    <button
      v-for="item in Math.ceil(data.data.length / perPage)"
      :key="item"
      @click="() => goPage(item)"
    >
      {{ item }}
    </button>
    <button @click="nextPage">next</button>
  </div>
</template>

<script setup>
import { useDataStore } from "../stores/data";
import { ref, computed } from "vue";

let page = ref(1);
const data = useDataStore();
const perPage = 5;

const paginatedData = computed(() =>
  data.data
    .map((item) => item)
    .slice((page.value - 1) * perPage, page.value * perPage)
);

const nextPage = () => {
  if (page.value !== Math.ceil(data.data.length / perPage)) {
    page.value += 1;
  }
};

const backPage = () => {
  if (page.value !== 1) {
    page.value -= 1;
  }
};

const goPage = (numPage) => {
  page.value = numPage;
};
</script>

<style scoped></style>
