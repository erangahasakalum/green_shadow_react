import { Button } from "antd"
import { useState } from "react"
import MainModal from "../components/modal/MainModal";
import CropForm from "../components/forms/CropForm";
import TableComponents from "../components/table/TableComponent";
export function CropPage(){
    
    const [open,setOpen] = useState(false);
    const [title,setModalTitle] = useState("");

    function openAddModal(){
        setModalTitle("Add New Crop");
        setOpen(true);    
    }
    return(
        <>
        <div>
            <h1>Crops Details</h1>

        <Button type="primary" onClick={() => openAddModal()}>
          Add Crop
        </Button>
        <MainModal open={open} setOpen={setOpen} title={title}>
          {/* Pass StaffForm inside the modal */}
          <CropForm />
        </MainModal>
        </div>

        <div>
            <TableComponents/>
        </div>
        
        
        </>
    )
    
}