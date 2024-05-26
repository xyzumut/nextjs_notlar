import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import counterSlice from "./slices/counterSlice";
export const store = configureStore({
    reducer:{
        user  : userSlice,
        sayac : counterSlice
    },
});