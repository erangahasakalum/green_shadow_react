import React from "react";
import { Form, Input, Select, Button, Row, Col } from "antd";

const { Option } = Select;

const VehicleForm: React.FC = () => {
    return (
        <Form layout="vertical"> {/* Added layout property for better styling */}
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        label="License Plate Number"
                        name="licensePlateNumber"
                        rules={[{  message: "Please input the license plate number!" }]}
                    >
                        <Input placeholder="License Plate Number" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Vehicle Name"
                        name="vehicleName"
                        rules={[{  message: "Please input the vehicle name!" }]}
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
                        rules={[{  message: "Please input the vehicle category!" }]}
                    >
                        <Input placeholder="Category" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Fuel Type"
                        name="fuelType"
                        rules={[{ message: "Please input the fuel type!" }]}
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
                        rules={[{ message: "Please input the vehicle status!" }]}
                    >
                        <Input placeholder="Status" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Staff Member"
                        name="staff"
                        rules={[{ message: "Please select the staff member!" }]}
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
                rules={[{ message: "Please input the remark!" }]}
            >
                <Input placeholder="Remark" />
            </Form.Item>
        </Form>
    );
};

export default VehicleForm;
