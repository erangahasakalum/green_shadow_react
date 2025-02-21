import { createSlice } from "@reduxjs/toolkit";
import CropModel from "../model/CropModel";

const initialCrops:CropModel[]= []

const CropSlice = createSlice({
    name:'crop',
    initialState:initialCrops,
    reducers:{
        addCrop :(state,action)=>{
            state.push(action.payload)
            console.log(action.payload);
            
        },  
        deleteCrop :(state,action)=>{
            return state.filter(crop=>crop.cropId! == action.payload.cropId)
        },
        updateCrop : (state, action) =>{
            const index = state.findIndex(crop => crop.cropId === action.payload.equipment_id);
            if (index !== -1) {
                state[index] = { ...state[index], ...action.payload };
            }
        },
    }
})

export const {addCrop,deleteCrop} = CropSlice.actions
export default CropSlice.reducer;