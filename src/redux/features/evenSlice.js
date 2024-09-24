import {createSlice} from "@reduxjs/toolkit"

const evenSlice = createSlice({
  name:"Even",
  initialState:{
    value:0,
  }
  ,
  reducers:{
    incrementEven:(state)=>{
      state.value+=2;
    },
    decrementEven:(state)=>{
      state.value-=2;
    }
  }
})

export const {incrementEven,decrementEven}=evenSlice.actions;

export default evenSlice.reducer;