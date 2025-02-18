import { Button, Modal, Row, Col, Form, Input, Select, Table } from "antd";
import { useState } from "react";

const { Option } = Select;

export function Equipmentpage() {
  // Modal state and handlers
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [title, setTitle] = useState("");

  // Modal Handlers
  const openAddModal = () => {
    setTitle("Add New Equipment");
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    // Simulate a request or some action here
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
        <h1>Equipment</h1>
        <Button type="primary" onClick={openAddModal}>
          Add Equipment
        </Button>
        <Modal
          title={title}
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <Form layout="vertical">
            <Row gutter={16}>
              {/* Equipment Name */}
              <Col span={12}>
                <Form.Item
                  label="Equipment Name"
                  name="equipmentName"
                  rules={[
                    {
                      required: true,
                      message: "Please input the equipment name!",
                    },
                  ]}
                >
                  <Input placeholder="Equipment Name" />
                </Form.Item>
              </Col>

              {/* Equipment Type */}
              <Col span={12}>
                <Form.Item
                  label="Type"
                  name="equipmentType"
                  rules={[
                    {
                      required: true,
                      message: "Please select the equipment type!",
                    },
                  ]}
                >
                  <Select placeholder="Select Equipment Type">
                    <Option value="TRACTOR">Tractor</Option>
                    <Option value="HARVESTER">Harvester</Option>
                    <Option value="PLANTER">Planter</Option>
                    {/* Add other equipment types here */}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              {/* Status */}
              <Col span={12}>
                <Form.Item
                  label="Status"
                  name="status"
                  rules={[
                    { required: true, message: "Please select the status!" },
                  ]}
                >
                  <Select placeholder="Select Status">
                    <Option value="ACTIVE">Active</Option>
                    <Option value="INACTIVE">Inactive</Option>
                  </Select>
                </Form.Item>
              </Col>

              {/* Available Count */}
              <Col span={12}>
                <Form.Item
                  label="Available Count"
                  name="availableCount"
                  rules={[
                    {
                      required: true,
                      message: "Please input the available count!",
                    },
                  ]}
                >
                  <Input placeholder="Available Count" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              {/* Staff */}
              <Col span={12}>
                <Form.Item label="Staff">
                  <Button type="primary" style={{ marginBottom: "10px" }}>
                    Add Staff
                  </Button>
                  <Select placeholder="Select Staff">
                    <Option value="staff1">Staff 1</Option>
                    <Option value="staff2">Staff 2</Option>
                  </Select>
                </Form.Item>
              </Col>

              {/* Field */}
              <Col span={12}>
                <Form.Item label="Field">
                  <Button type="primary" style={{ marginBottom: "10px" }}>
                    Add Field
                  </Button>
                  <Select placeholder="Select Field">
                    <Option value="field1">Field 1</Option>
                    <Option value="field2">Field 2</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save Equipment Details
              </Button>
              <Button style={{ marginLeft: "10px" }} onClick={handleCancel}>
                Close
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
      <div>
        <Table />
      </div>
    </>
  );
}
