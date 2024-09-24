import { createSlice } from "@reduxjs/toolkit";


const oddSlice=createSlice({
  name:"odd",
  initialState:{
    value:1,
  },
  reducers:{
    incrementOdd:(state)=>{
      state.value+=2;
    }
    ,
    decrementOdd:(state)=>{
state.value-=2;
    }
  }
});

export const {incrementOdd,decrementOdd}=oddSlice.actions;

export default oddSlice.reducer;