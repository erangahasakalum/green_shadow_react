import { Button } from "antd";
import TableComponents from "../components/table/TableComponent";
import { useState } from "react";
import FieldForm from "../components/forms/FieldForm";
import MainModal from "../components/modal/MainModal";

export function FieldPage() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  function openModal() {
    setTitle("Add New Field");
    setOpen(true);
  }
  return (
    <>
      <div>
        <h1>field</h1>
        <Button type="primary" onClick={openModal}>
          Add Field
        </Button>
        <MainModal open={open} setOpen={setOpen} title={title}>
          <FieldForm />
        </MainModal>
      </div>

      <div>
        <TableComponents />
      </div>
    </>
  );
}
