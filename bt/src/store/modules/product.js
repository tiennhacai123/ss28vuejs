import {getData} from '../../api/productApi.js'
const product={
    state: {
        products: [],
    },
    mutations: {
        getDataMutation: async (state)=>{
            state.products = await getData();
        }
    },
    actions: {
        // xu ly bat dong bo, call APi, async await
        getDataAction: ({commit})=>{
            commit("getDataMutation")
        }
    }
}
export default product;