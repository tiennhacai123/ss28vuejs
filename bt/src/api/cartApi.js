import axios from 'axios';
export const getDataCart = async ()=>{
    const res =  await axios.get("http://localhost:3000/carts");
    return res.data;
}