import { getAllProduct } from "@/api/productApi";

const product = {
    state: {
        products: [],
    },
    mutations: {
        getAllProduct: async (state) => {
             state.products = await getAllProduct()
        },
        addProductMutation: async (state, payload) => {
            // console.log("gia tri vua them", payload);
            await state.products.push(payload.data);
        }
    },
    actions: {
        //xu ly cac tac vu bat dong bo!!!!!!!
        //ham di lay tat ca san pham
        getAllProduct: ({commit}) => {
            commit("getAllProduct")
        },
        addProductAction:({commit}, payload)=>{
            // payload ở đay chính là data chứa dữ liệu được thêm vào khi tiến hành gọi hàm add ở Product.vue
            commit("addProductMutation",payload)    
        }
    }
}
export default product;