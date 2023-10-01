<template>
  <div class="grid-container">
    <div class="items" v-for="(item, index) in store.data" :key="index">
      <RouterLink :to="`/items/${index}`">
        <img :src="`./${item.image}`" />
      </RouterLink>
      <div>{{ item.name }}</div>
      <div>{{ "$" + item.cost }}</div>
      <div>{{ store.newItem }}</div>
      <button @click="addItem(index)">ADD TO CART</button>
    </div>
    <div>
      <button @click="topFunction()" id="myBtn" title="Go to top">Top</button>
    </div>
  </div>
</template>

<script setup>
import { useDataStore } from "../stores/data";
import { useCartStore } from "../stores/shoppingCart";

const store = useDataStore();
const { addItem } = useCartStore();
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  justify-items: center;
}

img {
  height: 300px;
  width: 300px;
}

.items {
  display: block;
}
/* .item-container {
  display: inline-block;
  text-align: center;
} */
/* .responsive {
  display: block;
  padding: 0 6px;
  float: left;
  width: 24.99999%;
} */

#myBtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: red;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 10px;
  font-size: 18px;
}
</style>
