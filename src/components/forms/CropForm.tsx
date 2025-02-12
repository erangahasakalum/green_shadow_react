import React from "react";
import { Form, Input, Select, Button, Row, Col, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const CropForm: React.FC = () => {
    return (
        <Form
            layout="vertical"

        >
            {/* Crop Name & Scientific Name */}
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        label="Crop Name"
                        name="cropName"
                        rules={[{ required: true, message: "Please enter the crop name!" }]}
                    >
                        <Input placeholder="Enter crop name" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Scientific Name"
                        name="scientificName"
                        rules={[{ required: true, message: "Please enter the scientific name!" }]}
                    >
                        <Input placeholder="Enter scientific name" />
                    </Form.Item>
                </Col>
            </Row>

            {/* Category & Season */}
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        label="Category"
                        name="category"
                        rules={[{ required: true, message: "Please enter the crop category!" }]}
                    >
                        <Input placeholder="Enter crop category" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Season"
                        name="season"
                        rules={[{ required: true, message: "Please enter the growing season!" }]}
                    >
                        <Input placeholder="Enter growing season" />
                    </Form.Item>
                </Col>
            </Row>

            {/* Crops & Image Upload */}
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item label="Crops">
                        <Button type="primary" style={{ marginBottom: '10px' }}>
                            Add Fields
                        </Button>
                        <Select placeholder="Select Field">
                            <Option value="field1">Field 1</Option>
                            <Option value="field2">Field 2</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Crop Image (URL or File)">
                        <Upload name="file" listType="picture" maxCount={1}>
                            <Button icon={<UploadOutlined />}>Upload (File)</Button>
                        </Upload>
                    </Form.Item>
                </Col>
            </Row>

            {/* Submit Button */}
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit Crop Details
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CropForm;
