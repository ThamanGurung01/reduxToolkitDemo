import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice"
import oddReducer from "./features/oddSlice"
import evenReducer from "./features/evenSlice"
export const store=configureStore({
reducer:{
counter:counterReducer,
odd:oddReducer,
even:evenReducer,
},
});
export default store;