import { Button, Modal, Row, Col, Form, Input, Select, Table } from "antd";
import { useState } from "react";


const { Option } = Select;

export function VehiclePage() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [title, setTitle] = useState("");


  const[licensePlateNumber,setLicencePlateNumber] = useState("");
  const[vehicleName,setVehicleName] = useState("");
  const[category,setCategory] = useState("");
  const[fuelType,setFualType] = useState("");
  const[status,setStates] = useState("");
  const[staffId,setStaffId] = useState("");

  // Modal Handlers
  const openAddModal = () => {
    setTitle("Add New Vehicle");
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 1000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <h1>Vehicle</h1>
        <Button type="primary" onClick={openAddModal}>
          Add Vehicle
        </Button>

        <Modal
          title={title}
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <Form layout="vertical" requiredMark={false}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="License Plate Number"
                  name="licensePlateNumber"
                  rules={[{ required: true, message: "Please input the license plate number!" }]}
                >
                  <Input placeholder="License Plate Number" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Vehicle Name"
                  name="vehicleName"
                  rules={[{ required: true, message: "Please input the vehicle name!" }]}
                >
                  <Input placeholder="Vehicle Name" />
                </Form.Item>
              </Col>
            </Row>

            {/* Category and Fuel Type */}
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Category"
                  name="category"
                  rules={[{ required: true, message: "Please input the vehicle category!" }]}
                >
                  <Input placeholder="Category" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Fuel Type"
                  name="fuelType"
                  rules={[{ required: true, message: "Please input the fuel type!" }]}
                >
                  <Input placeholder="Fuel Type" />
                </Form.Item>
              </Col>
            </Row>

            {/* Status and Staff Member */}
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Status"
                  name="status"
                  rules={[{ required: true, message: "Please input the vehicle status!" }]}
                >
                  <Input placeholder="Status" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Staff Member"
                  name="staff"
                  rules={[{ required: true, message: "Please select the staff member!" }]}
                >
                  <Select placeholder="Select Staff Member">
                    <Option value="manager">Manager</Option>
                    <Option value="driver">Driver</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            {/* Remark */}
            <Form.Item
              label="Remark"
              name="remark"
              rules={[{ required: true, message: "Please input the remark!" }]}
            >
              <Input placeholder="Remark" />
            </Form.Item>
          </Form>
        </Modal>
      </div>
      
      <div>
        <Table/>
      </div>
    </>
  );
}
