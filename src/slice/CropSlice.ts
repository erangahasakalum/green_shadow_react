import { createSlice } from "@reduxjs/toolkit";

const initialCrops :CropModel= []
const CropSlice = createSlice({
    name:'crop',
    initialState:initialCrops,
    reducers:{

    }
})

export default CropSlice.reducer;