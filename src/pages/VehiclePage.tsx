import { Button } from "antd"
import { useState } from "react"
import MainModal from "../components/modal/MainModal";
import VehicleForm from "../components/forms/VehicleForm";

export function VehiclePage(){
    
    const [open,setOpen] = useState(false);
    function addVehicle(){
            setOpen(true);
    }
    return(
        <>
        <div>
        <h1>Vehicle</h1>
        <Button type="primary"onClick={()=>addVehicle()}>Add Vehicle</Button>
        <MainModal open={open} setOpen={setOpen}>
         <VehicleForm/>
        </MainModal>
        </div>
        <div>
           
        </div>
        </>
    )
}