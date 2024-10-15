<template>
  <div class="container">
    <ProductList></ProductList>
    <ShoppingCart></ShoppingCart>
  </div>
</template>

<script setup>
import ProductList from './ProductList.vue'
import ShoppingCart from './ShoppingCart.vue'
</script>

<style>
.container {
  display: flex;
  gap: 20px; /* Khoảng cách giữa 2 component, tùy chỉnh nếu cần */
}
</style>
