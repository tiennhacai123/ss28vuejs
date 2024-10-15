<template>
  <div class="shopping-cart">
    <h2>Shopping Cart</h2>
    <div class="cart-item" v-for="cart in carts" :key="cart.id">
      <img :src="cart.image" alt="cart item image" />
      <div class="cart-details">
        <h3>{{ cart.name }}</h3>
        <span class="cart-price">${{ cart.price }}</span>
        <div class="cart-controls">
          <input type="number" class="cart-quantity" :value="cart.quantity" />
          <button class="update-cart">Update</button>
          <button class="remove-item">Remove</button>
        </div>
      </div>
    </div>
    <div class="cart-summary">
      <h3>Subtotal: ${{ subtotal }}</h3>
      <p class="update-success">Product updated successfully!</p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
console.log(store);

onMounted(() => {
  store.dispatch("getDataActions")
});

const carts = computed(() => store.state.cart.carts);
</script>

<style scoped>
.shopping-cart {
  width: 60%;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
h2 {
  text-align: center;
  color: #343a40;
  margin-bottom: 1.5rem;
}
.cart-item {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}
img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #ddd;
}
.cart-details {
  flex-grow: 1;
}
h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #333;
}
.cart-price {
  font-size: 1.1rem;
  color: #007bff;
  font-weight: bold;
  margin-top: 0.5rem;
}
.cart-controls {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}
.cart-quantity {
  width: 60px;
  padding: 0.3rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 1rem;
}
.update-cart {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.update-cart:hover {
  background-color: #218838;
}
.remove-item {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 1rem;
  transition: background-color 0.3s ease;
}
.remove-item:hover {
  background-color: #c82333;
}
.cart-summary {
  padding: 1.5rem;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
}
.update-success {
  background-color: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  margin-top: 1rem;
  font-size: 1rem;
  display: none; /* Ẩn thông báo khi không cần thiết */
}
</style>
