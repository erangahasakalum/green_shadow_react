import React, { useState } from "react";
import { Form, Input, Select, Button, Row, Col, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const CropForm: React.FC = () => {

    const [cropName ,setCropName] = useState("");
    const [scientificName ,setScientificName] = useState("");
    const [cropCategory ,setCropCategory] = useState("");
    const [cropSeason ,setCropSeason] = useState("");
    const [cropFields ,setCropFields] = useState("");
    const [cropImage ,setCropImage] = useState("");

    console.log(cropName,scientificName,cropCategory,cropSeason)
    console.log(setCropName,setScientificName,setCropCategory,setCropSeason)
    return (
        <Form
            layout="vertical"
            requiredMark= {false}

        >
            {/* Crop Name & Scientific Name */}
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        label="Crop Name"
                        name="cropName"
                        rules={[{ required: true, message: "Please enter the crop name!" }]}
                    >
                        <Input placeholder="Enter crop name"  value={cropName} onChange={(e)=>setCropName(e.target.value)}/>
                        
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Scientific Name"
                        name="scientificName"
                        rules={[{ required: true, message: "Please enter the scientific name!" }]}
                    >
                        <Input placeholder="Enter scientific name" value={scientificName} onChange={(e)=>setScientificName(e.target.value)} />
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
                        <Input placeholder="Enter crop category"  value={cropCategory} onChange={(e)=>setCropCategory(e.target.value)}/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Season"
                        name="season"
                        rules={[{ required: true, message: "Please enter the growing season!" }]}
                    >
                        <Input placeholder="Enter growing season" value={cropSeason} onChange={(e)=>setCropSeason(e.target.value)}/>
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
        </Form>
    );
};

export default CropForm;
