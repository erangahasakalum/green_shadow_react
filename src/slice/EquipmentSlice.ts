import { createSlice } from "@reduxjs/toolkit";
import EquipmentModel from "../model/EquipmentModel";

const initialEquipments:EquipmentModel[]=[]

const EquipmentSlice = createSlice({
    name:"equipment",
    initialState :initialEquipments,
    reducers:{
        addEquipment :(state,action)=>{
            state.push(action.payload)
            console.log(action.payload);
            
        },  

    }
})
export const {addEquipment} = EquipmentSlice.actions
export default EquipmentSlice.reducer;