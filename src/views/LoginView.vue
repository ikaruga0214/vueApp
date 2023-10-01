<template>
  <div class="wrapper">
    <div class="login-container">
      <div class="card-container">
        <h1 style="color: white">登入</h1>
        <img v-if="isLoading" src="/Spinner.gif" />
        <form @submit="userLogin" id="myForm1">
          <section>
            <label style="color: white" for="email">Email</label>
            <input
              id="email"
              autocomplete="email"
              name="email"
              type="email"
              placeholder="請輸入信箱"
              size="30"
              v-model="userEmail"
              required
            />
          </section>

          <section>
            <label style="color: white" for="user-password">Password</label>
            <input
              id="user-password"
              autocomplete="user-password"
              name="user-password"
              type="password"
              placeholder="請輸入密碼"
              required
              v-model="userPassword"
            />
          </section>

          <button class="mybtn" @click="userLogin" type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useLoginStore } from "../stores/login";
import { useRouter } from "vue-router";
import axios from "axios";

const userEmail = ref("");
const userPassword = ref("");
const isLoading = ref(false);
const router = useRouter();

const store = useLoginStore();

const userLogin = (e) => {
  e.preventDefault();

  if (userEmail.value && userPassword.value.length > 0) {
    store.isLogin = true;
    isLoading.value = true;
  }

  // console.log(store.isLogin);
  // if (isLogin) {
  //   router.push("/");
  // }

  axios({
    method: "POST",
    url: "https://vue-app-h44d.onrender.com/login",
    data: {
      email: userEmail.value,
      password: userPassword.value,
    },
  })
    .then((res) => {
      if (res.data.token) {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data));
        router.push("/");
      }
    })
    .catch((err) => {
      console.error(err);
      isLoading.value = false;
    });

  userEmail.value = "";
  userPassword.value = "";
};
</script>

<style scoped>
.wrapper {
  align-items: center;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
}
.login-container {
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  place-items: center;
  overflow: hidden;
  font-family: poppins;
}

.card-container {
  position: relative;
  width: 950px;
  height: auto;
  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;
  background: #000435;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

input:invalid {
  background-color: ivory;
  border: none;
  outline: 2px solid red;
  border-radius: 5px;
}

.mybtn {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

.mybtn:hover {
  opacity: 0.8;
}
</style>
