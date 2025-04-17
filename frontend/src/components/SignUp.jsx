import React from "react";
import { Modal, Form, Input, Button } from "antd";

const SignUp = ({ open, onCancel, onRegister, switchToLogin  }) => {
  return (
    <Modal
      open={open}
      title={<div className="text-center text-xl font-semibold">Registration Form</div>}
      onCancel={onCancel}
      footer={null}
    >
      <Form layout="vertical" onFinish={onRegister} className="space-y-4">
        <Form.Item label="Username" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email" rules={[{ required: true, type: "email" }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Sign Up
          </Button>
        </Form.Item>

        <div className="text-center text-sm">  Already have an account?{" "}
          <span
            onClick={switchToLogin}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Log in
          </span></div>
      </Form>
    </Modal>
  );
};

export default SignUp;
