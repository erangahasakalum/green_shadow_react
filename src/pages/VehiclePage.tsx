import { Button } from "antd";
import { useState } from "react";
import MainModal from "../components/modal/MainModal";
import VehicleForm from "../components/forms/VehicleForm";
import TableComponents from "../components/table/TableComponent";

export function VehiclePage() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  function addVehicle() {
    setTitle("Add New Vehicle");
    setOpen(true);
  }
  return (
    <>
      <div>
        <h1>Vehicle</h1>
        <Button type="primary" onClick={() => addVehicle()}>
          Add Vehicle
        </Button>
        <MainModal open={open} setOpen={setOpen} title={title}>
          <VehicleForm />
        </MainModal>
      </div>
      <TableComponents />
    </>
  );
}
