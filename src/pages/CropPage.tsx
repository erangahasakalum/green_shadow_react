import {
  Button,
  Modal,
  Row,
  Col,
  Form,
  Input,
  Select,
  Upload,
  Card,
  Tag,
} from "antd";
import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addCrop } from "../slice/CropSlice";
import CropModel from "../model/CropModel";

export function CropPage() {
  const { Option } = Select;

  // Modal state and handlers
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [title] = useState("Add Crop");

  // Form fields state
  const [cropName, setCropName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [cropCategory, setCropCategory] = useState("");
  const [cropSeason, setCropSeason] = useState("");
  const [fieldList, setFieldList] = useState([]);
  const [cropImage, setCropImage] = useState<File | null>(null);

  const newCrop: CropModel = {
    cropId: "C1",
    cropName,
    scientificName,
    cropCategory,
    cropSeason,
    fieldList,
    cropImage: cropImage ? URL.createObjectURL(cropImage) : "",
  };

  const dispatch = useDispatch();
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
    dispatch(addCrop(newCrop));
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <h1>Crops Details</h1>
        <Button
          type="primary"
          onClick={openAddModal}
          className="position: relative left-1.5"
        >
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
                  <Select
                    placeholder="Select Field"
                    value={fieldList}
                    mode="multiple"
                    onChange={(value) => setFieldList(value)}
                  >
                    <Option value="field1">Field 1</Option>
                    <Option value="field2">Field 2</Option>
                  </Select>
                </Form.Item>
              </Col>

              {/* Crops & Image Upload */}
              <Col span={12}>
                <Form.Item label="Crop Image (URL or File)">
                  <Upload
                    name="file"
                    listType="picture"
                    maxCount={1}
                    beforeUpload={(file) => {
                      setCropImage(file); // Update cropImage state
                      return false; // Prevent automatic upload
                    }}
                  >
                    <Button icon={<UploadOutlined />}>Upload (File)</Button>
                  </Upload>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
      </div>

      <div>
        <Card
          title=""
          bordered={true}
          cover={<img style={{ height: 200, objectFit: "cover" }} />}
          style={{ margin: "20px", width: 300 }}
        >
          <p>
            <strong>ID:</strong> {}
          </p>
          <p>
            <strong>Scientific Name:</strong> {scientificName}
          </p>
          <p>
            <strong>Category:</strong> {cropCategory}
          </p>
          <p>
            <strong>Season:</strong> {cropSeason}
          </p>

          <p>
            <strong>Fields:</strong>
          </p>
          <Row gutter={[8, 8]}>
            {fieldList.map((field, index) => (
              <Col key={index}>
                <Tag>{field}</Tag>
              </Col>
            ))}
          </Row>
        </Card>
      </div>
    </>
  );
}
