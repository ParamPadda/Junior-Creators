// components/OtpModal.jsx
import { Form, Input, Modal, Button } from "antd";
import { useEffect } from "react";

const OtpModal = ({ open, onCancel, onVerify }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (!open) {
      form.resetFields(); // clear OTP input when closed
    }
  }, [open, form]);

  const handleSubmit = (values) => {
    onVerify(values.otp);
  };

  return (
    <Modal
      open={open}
      title="Verify OTP"
      onCancel={onCancel}
      footer={null}
    >
      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
      >
        <Form.Item
          label="OTP"
          name="otp"
          rules={[{ required: true, message: "Please enter the OTP!" }]}
        >
          <Input placeholder="Enter OTP" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Verify
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default OtpModal;
