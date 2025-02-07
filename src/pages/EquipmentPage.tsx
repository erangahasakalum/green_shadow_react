import { Button } from "antd";
import { useState } from "react";
import MainModal from "../components/modal/MainModal";
import EquipmentForm from "../components/forms/EquipmentForm";
import TableComponents from "../components/table/TableComponent";

export function Equipmentpage(){
    const [open,setOpen] =useState(false);

    function openModal(){
        setOpen(true)
    }
    return(
        <>
        <div>
        <h1>Equipment</h1>
        <Button type="primary" onClick={()=> openModal()}>Add Equipment</Button>
        <MainModal open={open} setOpen={setOpen}>
            <EquipmentForm/>
        </MainModal>
        </div>
        <div>
            <TableComponents/>
        </div>
        
        </>
    )
}