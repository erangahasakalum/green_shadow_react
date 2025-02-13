import { Button } from "antd";
import { useState } from "react";
import MainModal from "../components/modal/MainModal";
import EquipmentForm from "../components/forms/EquipmentForm";
import TableComponents from "../components/table/TableComponent";

export function Equipmentpage(){
    const [open,setOpen] =useState(false);
    const [title,setTitle] = useState("");

    function openModal(){
        setTitle("Add new Equipment")
        setOpen(true)
    }
    return(
        <>
        <div>
        <h1>Equipment</h1>
        <Button type="primary" onClick={()=> openModal()}>Add Equipment</Button>
        <MainModal open={open} setOpen={setOpen} title={title}>
            <EquipmentForm/>
        </MainModal>
        </div>
        <div>
            <TableComponents/>
        </div>
        
        </>
    )
}