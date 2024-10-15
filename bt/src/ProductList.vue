<template>
  <div class="product-list">
    <h2>List Product</h2>
    <div class="product" v-for="product in products" :key="product.id">
      <img :src="product.image" alt="product image" />
      <div class="product-details">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p><b>Total: </b>{{product.quantity}}</p>
        <div class="product-info">
          <div class="price-quantity">
            <input type="number" />
            <span>Price: ${{ product.price }}</span>
          </div>
          <button v-if="product.quantity===0" disabled @click="handCheck" class="add-cart">Add to cart</button>
          <button v-else class="add-cart">Add to cart</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed , onMounted} from 'vue'
import {useStore} from 'vuex'

const store = useStore();

onMounted(() => {
   store.dispatch("getDataAction")

})
// computed được sử dụng để tạo ra các thuộc tính mà giá trị của chúng phụ thuộc vào các thuộc tính khác (ví dụ: state từ Vuex).
const products = computed(()=>
 store.state.product.products
) 


const handCheck = () =>{
  console.log(" da bi ban");

}
</script>

<style scoped>
.product-list {
  width: 50%;
}
.product {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 1rem;
}
img {
  width: 200px;
  height: 100%;
  border-radius: 5px;
}
.product-details {
  flex-grow: 1;
}
.product-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.price-quantity {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.add-cart {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Thêm transition để có hiệu ứng khi hover */
}

.add-cart:hover {
  background-color: #0056b3; /* Màu khi hover */
}

/* Trạng thái khi nút bị disable */
.add-cart:disabled {
  background-color: #cccccc; /* Màu xám khi nút bị disable */
  color: #666666; /* Màu chữ khi nút bị disable */
  cursor: not-allowed; /* Con trỏ sẽ trở thành dấu chéo khi hover vào nút bị disable */
  opacity: 0.6; /* Làm cho nút có cảm giác bị vô hiệu hóa */
}

</style>
