import {
  Button,
  Modal,
  Row,
  Col,
  Form,
  Input,
  Select,
  Upload,
  Table,
} from "antd";
import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";

export function CropPage() {
  const { Option } = Select;

  // Modal state and handlers
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [title, setTitle] = useState("Add Crop");

  // Form fields state
  const [cropName, setCropName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [cropCategory, setCropCategory] = useState("");
  const [cropSeason, setCropSeason] = useState("");
  const [fieldList, setFieldList] = useState([]);
  const [fileList, setFileList] = useState([]);

  // Modal Handlers
  const openAddModal = () => {
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
        <h1>Crops Details</h1>

        <Button type="primary" onClick={openAddModal}>
          Add Crop
        </Button>

        <Modal
          title={title}
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <Form layout="vertical" requiredMark={false}>
            {/* Crop Name & Scientific Name */}
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Crop Name"
                  name="cropName"
                  rules={[
                    { required: true, message: "Please enter the crop name!" },
                  ]}
                >
                  <Input
                    placeholder="Enter crop name"
                    value={cropName}
                    onChange={(e) => setCropName(e.target.value)}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Scientific Name"
                  name="scientificName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the scientific name!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter scientific name"
                    value={scientificName}
                    onChange={(e) => setScientificName(e.target.value)}
                  />
                </Form.Item>
              </Col>
            </Row>

            {/* Category & Season */}
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Category"
                  name="category"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the crop category!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter crop category"
                    value={cropCategory}
                    onChange={(e) => setCropCategory(e.target.value)}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Season"
                  name="season"
                  rules={[
                    { required: true, message: "Please enter the season!" },
                  ]}
                >
                  <Input
                    placeholder="Enter growing season"
                    value={cropSeason}
                    onChange={(e) => setCropSeason(e.target.value)}
                  />
                </Form.Item>
              </Col>
            </Row>

            {/* field value */}
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Crops">
                  <Button type="primary" style={{ marginBottom: "10px" }}>
                    Add Fields
                  </Button>
                  <Select placeholder="Select Field">
                    <Option value="field1">Field 1</Option>
                    <Option value="field2">Field 2</Option>
                  </Select>
                </Form.Item>
              </Col>

              {/* Crops & Image Upload */}
              <Col span={12}>
                <Form.Item label="Crop Image (URL or File)">
                  <Upload name="file" listType="picture" maxCount={1}>
                    <Button icon={<UploadOutlined />}>Upload (File)</Button>
                  </Upload>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
      </div>

      <div>
        <Table />
      </div>
    </>
  );
}
