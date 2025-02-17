import { useState } from "react";
import { Button, Modal, Form, Input, Select, DatePicker, Row, Col } from "antd";


const { Option } = Select;

export function StaffPage() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [title, setTitle] = useState("");

  // Modal Handlers
  const openAddModal = () => {
    setTitle("Add New Staff");
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
        <h1>Staff</h1>
        <Button type="primary" onClick={openAddModal}>
          Add New Staff
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
              <Col span={12}>
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[{ required: true, message: "Please input your first name!" }]}
                >
                  <Input placeholder="First Name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[{ required: true, message: "Please input your last name!" }]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Designation"
                  name="designation"
                  rules={[{ required: true, message: "Please select your designation!" }]}
                >
                  <Select placeholder="Select Designation">
                    <Option value="MANAGER">Manager</Option>
                    <Option value="SENIOR_ASSISTANT_MANAGER">Senior Assistant Manager</Option>
                    <Option value="ASSISTANT_MANAGER">Assistant Manager</Option>
                    <Option value="ADMIN_HR_STAFF">Admin HR Staff</Option>
                    <Option value="OFFICE_ASSISTANT">Office Assistant</Option>
                    <Option value="SENIOR_AGRONOMIST">Senior Agronomist</Option>
                    <Option value="AGRONOMIST">Agronomist</Option>
                    <Option value="SOIL_SCIENTIST">Soil Scientist</Option>
                    <Option value="SENIOR_TECHNICIAN">Senior Technician</Option>
                    <Option value="SUPERVISOR">Supervisor</Option>
                    <Option value="LABOR">Labor</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Gender"
                  name="gender"
                  rules={[{ required: true, message: "Please select your gender!" }]}
                >
                  <Select placeholder="Select Gender">
                    <Option value="MALE">Male</Option>
                    <Option value="FEMALE">Female</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Joined Date"
                  name="joinedDate"
                  rules={[{ required: true, message: "Please select your joined date!" }]}
                >
                  <DatePicker style={{ width: "100%" }} placeholder="Select Joined Date" format="YYYY-MM-DD" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Date of Birth"
                  name="dob"
                  rules={[{ required: true, message: "Please select your date of birth!" }]}
                >
                  <DatePicker style={{ width: "100%" }} placeholder="Select Date of Birth" format="YYYY-MM-DD" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Address Line 1"
                  name="addressLine01"
                  rules={[{ required: true, message: "Please input address line 1!" }]}
                >
                  <Input placeholder="Building No." />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Address Line 2"
                  name="addressLine02"
                  rules={[{ required: true, message: "Please input address line 2!" }]}
                >
                  <Input placeholder="Lane" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Address Line 3"
                  name="addressLine03"
                  rules={[{ required: true, message: "Please input address line 3!" }]}
                >
                  <Input placeholder="Main City" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Address Line 4"
                  name="addressLine04"
                  rules={[{ required: true, message: "Please input address line 4!" }]}
                >
                  <Input placeholder="Main State" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Postal Code"
                  name="postalCode"
                  rules={[{ required: true, message: "Please input postal code!" }]}
                >
                  <Input placeholder="Postal Code" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Contact No"
                  name="contactNo"
                  rules={[{ required: true, message: "Please input contact number!" }]}
                >
                  <Input placeholder="Mobile number" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Email"
                  name="emailStaff"
                  rules={[{ required: true, type: "email", message: "Please input a valid email!" }]}
                >
                  <Input placeholder="Email address" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Role"
                  name="roleStaff"
                  rules={[{ required: true, message: "Please select your role!" }]}
                >
                  <Select placeholder="Select Role">
                    <Option value="MANAGER">Manager</Option>
                    <Option value="ADMINISTRATIVE">Administrative</Option>
                    <Option value="OTHER">Other</Option>
                    <Option value="SCIENTIST">Scientist</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
      </div>
      <div>
        
      </div>
    </>
  );
}
