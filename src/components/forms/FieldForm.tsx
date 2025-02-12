import { Form, Input, Select, Upload, Button, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

export default function FieldForm() {
  return (
    <>
      <Form layout="vertical" requiredMark={false}>
        <Row gutter={16}>
          {/* Field Name */}
          <Col span={12}>
            <Form.Item
              label="Field Name"
              name="fieldName"
              rules={[{ required: true, message: "Please enter field name" }]}
            >
              <Input placeholder="Enter field name" />
            </Form.Item>
          </Col>

          {/* Field Location */}
          <Col span={12}>
            <Form.Item
              label="Field Location"
              name="fieldLocation"
              rules={[{ required: true, message: "Please enter field location" }]}
            >
              <Input placeholder="Enter field location" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          {/* Extend Size */}
          <Col span={12}>
            <Form.Item
              label="Extend Size"
              name="extentSize"
              rules={[{ required: true, message: "Please enter extend size" }]}
            >
              <Input placeholder="Enter extend size" />
            </Form.Item>
          </Col>

          {/* Crop Image 1 */}
          <Col span={12}>
            <Form.Item label="Crop Image 1 (URL or File)" name="fieldImage1">
              <Upload listType="picture" beforeUpload={() => false}>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          {/* Crop Image 2 */}
          <Col span={12}>
            <Form.Item label="Crop Image 2 (URL or File)" name="fieldImage2">
              <Upload listType="picture" beforeUpload={() => false}>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Form.Item>
          </Col>

          {/* Staff List Dropdown */}
          <Col span={12}>
            <Form.Item label="Select Staff" name="staffList">
              <Select placeholder="Select staff">
                <Option value="staff1">Staff 1</Option>
                <Option value="staff2">Staff 2</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          {/* Crop List Dropdown */}
          <Col span={12}>
            <Form.Item label="Select Crop" name="cropList">
              <Select placeholder="Select crop">
                <Option value="crop1">Crop 1</Option>
                <Option value="crop2">Crop 2</Option>
              </Select>
            </Form.Item>
          </Col>

          {/* Equipment List Dropdown */}
          <Col span={12}>
            <Form.Item label="Select Equipment" name="equipmentList">
              <Select placeholder="Select equipment">
                <Option value="equipment1">Equipment 1</Option>
                <Option value="equipment2">Equipment 2</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}
