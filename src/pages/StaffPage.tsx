import { useState } from "react";
import TableComponents from "../components/table/TableComponent";
import { Button } from "antd";
import MainModal from "../components/modal/MainModal";
import StaffForm from "../components/forms/StaffForm";

export function StaffPage() {
  const [open, setOpen] = useState(false);
  const [title,setTitle] = useState("");

  function openAddModal() {
    setTitle("Add new Staff")
    setOpen(true);
  }

  return (
    <>
      <div>
        <h1>Staff</h1>
        <Button type="primary" onClick={() => openAddModal()}>
          Add Staff
        </Button>
        <MainModal open={open} setOpen={setOpen} title={title}>
          {/* Pass StaffForm inside the modal */}
          <StaffForm />
        </MainModal>
      </div>
      <div>
        <TableComponents />
      </div>
    </>
  );
}
