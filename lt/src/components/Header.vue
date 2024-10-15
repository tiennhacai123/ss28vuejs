<template>
  <div>
    <h1>Header</h1>
    <p>gia tri count: {{store.state.count.count}}</p>
    <button @click="handleClick">increase</button>
  </div>
</template>

<script setup>
import {useStore} from 'vuex'
const store = useStore();
console.log("gia tri store ",store);

const handleClick = ()=>{
    // dùng commit để gọi hàm từ store: lưu ý phải chuyền đúng tên hàm từ store vào commit
    // store.commit("increase");
    store.commit("increase",{
        payload: 5
    });
    
}
</script>

<style>

</style>