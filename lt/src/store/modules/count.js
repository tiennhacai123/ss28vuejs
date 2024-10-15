const count = {
    state:{
        count:0,
    },
    mutations:{
        increase:(state, payload)=>{
            console.log("gia tri payload", payload);
            
            state.count += payload.payload;
        }
    },
    actions:{

    },
}
export default count
