import { configureStore } from "@reduxjs/toolkit";
import CropSlice from "../slice/CropSlice";

export const store = configureStore({
    reducer:{
        crops:CropSlice
    }
})

export type AppDispatch = typeof store.dispatch;