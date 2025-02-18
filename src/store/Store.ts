import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        crops:CropSlice
    }
})

export type AppDispatch = typeof store.dispatch;