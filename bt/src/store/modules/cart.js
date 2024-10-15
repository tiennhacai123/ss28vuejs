import { getDataCart } from "@/api/cartApi";
const cart ={
    state:{
        carts:[]
    },
    mutations:{
        getDataMutations: async (state)=>{
            state.carts = await getDataCart();
        }
    },
    actions:{
        getDataActions:({commit})=>{
            commit("getDataMutations");
        }
    }
}
export default cart