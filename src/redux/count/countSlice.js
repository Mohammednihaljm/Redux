import {createSlice} from "@reduxjs/toolkit"


export const countSlice=createSlice({
    name:"count",
    initialState:{
        value:55
    },
    reducers:{
        increase_count:(state)=>{
            state.value +=1
        },
        dicrese_count:(state)=>{
            state.value -=1
        }
    }
})

export const{increase_count,dicrese_count}=countSlice.actions
export default countSlice.reducer