import React from "react";
import { Form, Input, Select, DatePicker, Row, Col } from "antd";
import moment from "moment";

const StaffForm: React.FC = () => (
    <Form layout="vertical"> {/* Updated layout */}
        <Row gutter={16}>
            <Col span={12}>
                <Form.Item
                    label="First Name"
                    name="firstName"
                    required={false}
                    rules={[{ message: "Please input your first name!" }]}
                >
                    <Input placeholder="First Name" />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[{ message: "Please input your last name!" }]}
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
                    rules={[{ message: "Please select your designation!" }]}
                >
                    <Select placeholder="Select Designation">
                        <Select.Option value="MANAGER">MANAGER</Select.Option>
                        <Select.Option value="SENIOR_ASSISTANT_MANAGER">SENIOR ASSISTANT MANAGER</Select.Option>
                        <Select.Option value="ASSISTANT_MANAGER">ASSISTANT MANAGER</Select.Option>
                        <Select.Option value="ADMIN_HR_STAFF">ADMIN HR STAFF</Select.Option>
                        <Select.Option value="OFFICE_ASSISTANT">OFFICE ASSISTANT</Select.Option>
                        <Select.Option value="SENIOR_AGRONOMIST">SENIOR AGRONOMIST</Select.Option>
                        <Select.Option value="AGRONOMIST">AGRONOMIST</Select.Option>
                        <Select.Option value="SOIL_SCIENTIST">SOIL SCIENTIST</Select.Option>
                        <Select.Option value="SENIOR_TECHNICIAN">SENIOR TECHNICIAN</Select.Option>
                        <Select.Option value="SUPERVISOR">SUPERVISOR</Select.Option>
                        <Select.Option value="LABOR">LABOR</Select.Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    label="Gender"
                    name="gender"
                    rules={[{ message: "Please select your gender!" }]}
                >
                    <Select placeholder="Select Gender">
                        <Select.Option value="MALE">Male</Select.Option>
                        <Select.Option value="FEMALE">Female</Select.Option>
                    </Select>
                </Form.Item>
            </Col>
        </Row>

        <Row gutter={16}>
            <Col span={12}>
                <Form.Item
                    label="Joined Date"
                    name="joinedDate"
                    rules={[{ message: "Please select your joined date!" }]}
                >
                    <DatePicker
                        style={{ width: "100%" }}
                        placeholder="Select Joined Date"
                        format="YYYY-MM-DD"
                    />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    label="Date of Birth"
                    name="dob"
                    rules={[{ message: "Please select your date of birth!" }]}
                >
                    <DatePicker
                        style={{ width: "100%" }}
                        placeholder="Select Date of Birth"
                        format="YYYY-MM-DD"
                    />
                </Form.Item>
            </Col>
        </Row>

        <Row gutter={16}>
            <Col span={12}>
                <Form.Item
                    label="Address Line 1"
                    name="addressLine01"
                    rules={[{ message: "Please input address line 1!" }]}
                >
                    <Input placeholder="Building No." />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    label="Address Line 2"
                    name="addressLine02"
                    rules={[{ message: "Please input address line 2!" }]}
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
                    rules={[{ message: "Please input address line 3!" }]}
                >
                    <Input placeholder="Main City" />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    label="Address Line 4"
                    name="addressLine04"
                    rules={[{ message: "Please input address line 4!" }]}
                >
                    <Input placeholder="Main State" />
                </Form.Item>
            </Col>
        </Row>

        <Row gutter={16}>
            <Col span={12}>
                <Form.Item
                    label="Postal Code"
                    name="addressLine05"
                    rules={[{ message: "Please input postal code!" }]}
                >
                    <Input placeholder="Postal Code" />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    label="Contact No"
                    name="contactNo"
                    rules={[{ message: "Please input contact number!" }]}
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
                    rules={[{ type: "email", message: "Please input a valid email!" }]}
                >
                    <Input placeholder="Email address" />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    label="Role"
                    name="roleStaff"
                    rules={[{ message: "Please select your role!" }]}
                >
                    <Select placeholder="Select Role">
                        <Select.Option value="MANAGER">Manager</Select.Option>
                        <Select.Option value="ADMINISTRATIVE">Administrative</Select.Option>
                        <Select.Option value="OTHER">Other</Select.Option>
                        <Select.Option value="SCIENTIST">Scientist</Select.Option>
                    </Select>
                </Form.Item>
            </Col>
        </Row>
    </Form>
);

export default StaffForm;

