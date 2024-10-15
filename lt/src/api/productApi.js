//api lay toan bo thong tin cua san pham
import axios from 'axios'
export const getAllProduct = async ()=>{
    const res = await axios.get("  http://localhost:3000/products")
    return res.data
}
//api lay chi tiet 1 san pham
export const getOneProduct = async (id) =>{
    const product = await axios.get("http://localhost3000/products/${id}") 
    return product.data
}

export const addProduct = async (product)=> {
    try {
        const res = await axios.post("http://localhost:3000/products",product) 
        return res.data
    } catch (error) {
        console.log(error);
        
    }
}