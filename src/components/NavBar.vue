<template>
  <div class="navbar-container">
    <div>
      <RouterLink to="/" class="navbar-left">
        <font-awesome-icon icon="fa-solid fa-house" />
      </RouterLink>

      <Modal ref="modal" />
      <button @click="openModal" class="navbar-left">CART</button>

      <RouterLink to="/login" class="navbar-right">USER</RouterLink>

      <form class="search-bar">
        <input type="search" id="search" />
        <button style="color: white">Search</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Modal from "./Modal.vue";

const modal = ref();

const openModal = () => {
  modal.value.openModal();
};
</script>

<style scoped>
.navbar-container {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: red;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}

section {
  float: right;
  display: block;
  padding: 14px 0px;
}
.navbar-left {
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.navbar-right {
  float: right;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.search-bar {
  float: right;
  display: block;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding: 14px 0px;
}
.modal-button {
  float: left;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

button {
  border: none;
  background-color: #333;
}
</style>
