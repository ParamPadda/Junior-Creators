import React from "react";
import { Modal, Form, Input, Button } from "antd";

const ForgetPassword = ({ open, onCancel, onForget, switchToLogin  }) => {
  return (
    <Modal
      open={open}
      title={<div className="text-center text-xl font-semibold">Forget Password</div>}
      onCancel={onCancel}
      footer={null}
    >
      <Form layout="vertical" onFinish={onForget} className="space-y-4">
       

        <Form.Item label="Email" name="email" rules={[{ required: true, type: "email" }]}>
          <Input />
        </Form.Item>

        

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Send Otp
          </Button>
        </Form.Item>

        <div className="text-center text-sm">Go Back to {" "}
          <span
            onClick={switchToLogin}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Log In
          </span></div>
      </Form>
    </Modal>
  );
};

export default ForgetPassword;
