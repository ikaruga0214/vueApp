import { defineStore } from "pinia";
import { useDataStore } from "./data";

export const useCartStore = defineStore("cart", {
  state: () => ({
    shoppingCart: [],
  }),
  getters: {
    itemCost: (state) => {
      return (index) =>
        state.shoppingCart[index].cost * state.shoppingCart[index].quantity;
    },

    totalPrise: (state) => {
      return state.shoppingCart
        .map((item) => item.cost * item.quantity)
        .reduce((item, i) => item + i, 0);
    },
  },
  actions: {
    addItem(index) {
      const data = useDataStore();
      const item = this.shoppingCart.find(
        (item) => item.id === data.data[index].id
      );
      if (!item) {
        this.shoppingCart.push({
          name: data.data[index].name,
          cost: data.data[index].cost,
          id: data.data[index].id,
          quantity: 1,
        });
      } else {
        item.quantity++;
      }
    },
    addQuantity(id) {
      const item = this.shoppingCart.find((item) => item.id === id);
      if (item && item.quantity > 0) {
        item.quantity++;
      } else if ((item.quantity = 0)) {
        this.shoppingCart.filter((item) => this.shoppingCart.id !== item.id);
      }
    },
    decreaseQuantity(id) {
      const item = this.shoppingCart.find((item) => item.id === id);
      console.log(id);
      if (item && item.quantity >= 1) {
        item.quantity--;
        if (item.quantity <= 0) {
          this.shoppingCart = this.shoppingCart.filter((item) => {
            return item.id !== id;
          });
        }
      }
    },
    removeItem(id) {
      this.shoppingCart = this.shoppingCart.filter((item) => item.id !== id);
    },
  },
});
