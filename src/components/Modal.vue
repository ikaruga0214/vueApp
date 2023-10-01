<template>
  <div>
    <dialog id="modal1">
      <h1>PRICE</h1>
      <div v-if="store.shoppingCart.length === 0">NO ITEM</div>
      <section v-for="(item, index) in store.shoppingCart" :key="index">
        <div class="horizontal-container">
          <div>{{ item.name }}</div>
          <div>
            {{ "$" + store.itemCost(index) }}
          </div>
          <button @click="store.addQuantity(item.id)">+</button>
          <div>{{ item.quantity }}</div>
          <button @click="store.decreaseQuantity(item.id)">-</button>
          <button @click="store.removeItem(item.id)">clear</button>
        </div>
      </section>
      <div>{{ "$ " + store.totalPrise }}</div>
      <form method="dialog">
        <button>OK</button>
      </form>
    </dialog>
  </div>
</template>

<script setup>
import { useCartStore } from "../stores/shoppingCart";
import { storeToRefs } from "pinia";

const store = useCartStore();
const { shoppingCart } = storeToRefs(store);

function openModal() {
  const dialog = document.getElementById("modal1");
  if (!dialog.open) {
    dialog.showModal();
  }
}

defineExpose({
  openModal,
});
</script>

<style scoped>
.horizontal-container {
  display: flex;
}
</style>
