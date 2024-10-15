import { createStore } from 'vuex'

import count from './modules/count';
import user from './modules/user';
import product from './modules/product';
const store = createStore({
    modules:{
        count:count,
        user:user,
        product:product
    }
    // state:{
    //     // nơi khai báo dữ liệu (state)
    //     count : 0,
    //     users:[],
    //     products: [],
    // },
    // getters: {
    //     // de layt ra cac store
    // },
    // mutations: {
    //     // noi khai bao cac ham (method) de bien doi state
    //     //khai bao ham tang count
    //     increase:(state, payload)=>{
    //         console.log("gia tri payload", payload);
            
    //         state.count += payload.payload;
    //     }
    // },
    // actions: {
    //     // cung di cap nhat thay doi state, (xu ly bat dong bo ) nhu call API, su dung async await 
    // }
})
export default store;