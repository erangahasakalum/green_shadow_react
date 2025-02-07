import React from "react";
import { Form, Input, Select, Button, Row, Col } from "antd";

const { Option } = Select;

const EquipmentForm: React.FC = () => {
    return (
        <Form layout="vertical">
            <Row gutter={16}>
                {/* Equipment Name */}
                <Col span={12}>
                    <Form.Item
                        label="Equipment Name"
                        name="equipmentName"
                        rules={[{ message: "Please input the equipment name!" }]}
                    >
                        <Input placeholder="Equipment Name" />
                    </Form.Item>
                </Col>

                {/* Equipment Type */}
                <Col span={12}>
                    <Form.Item
                        label="Type"
                        name="equipmentType"
                        rules={[{  message: "Please select the equipment type!" }]}
                    >
                        <Select placeholder="Select Equipment Type">
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
            </Row>

            <Row gutter={16}>
                {/* Status */}
                <Col span={12}>
                    <Form.Item
                        label="Status"
                        name="status"
                        rules={[{ message: "Please select the status!" }]}
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
                        rules={[{ message: "Please input the available count!" }]}
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
                <Button  style={{ marginLeft: "10px" }}>
                    Close
                </Button>
            </Form.Item>
        </Form>

    );
};

export default EquipmentForm;
