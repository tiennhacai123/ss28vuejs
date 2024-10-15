<template>
    <div>
        <h1>Danh sach san pham</h1>
        <button @click="add">Them san pham</button>
        <ul>
            <li v-for="pro in store.state.product.products" :key="pro.id"
            >{{pro.name}}</li>
        </ul>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import {addProduct} from '../api/productApi'
    const store = useStore();
    //muon dung actions phai ban dispatch len
    store.dispatch("getAllProduct")

    console.log("gia tri porduct", store.state.product.products);
    

    const add = async ()=>{
        store.dispatch("addProductAction",{
            data: await addProduct({
                name: "mi tom"
            })
        });
    }
</script>

<style>

</style>