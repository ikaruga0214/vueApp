import { defineStore } from "pinia";
import router from "../router";
import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));
const login = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const useLoginStore = defineStore("login", {
  state: () => {
    return { email: "", password: "", isLogin: false, login };
  },

  actions: {
    getLogin() {
      if (this.email && this.password.length > 0) {
        this.isLogin = true;
      }
      axios.post("/");
    },

    getLogout() {
      this.isLogin = false;
      this.email = "";
      this.password = "";
      router.push("/");
    },
  },
});
