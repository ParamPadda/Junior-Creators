import React,{ useEffect } from "react";
import { Modal, Form, Input, Button } from "antd";

const NewPassword = ({ open, onCancel, onUpdate }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (!open) {
      form.resetFields(); // clear email  input when closed
    }
  }, [open, form]);

  return (
    <Modal
      open={open}
      title={
        <div className="text-center text-xl font-semibold mb-6">
          Generate Your New Password Here
        </div>
      }
      onCancel={onCancel}
      footer={null}
    >
      <Form
        layout="vertical"
        onFinish={onUpdate}
        form={form}
        className="space-y-4"
      >
        <Form.Item label=" New Password" name="newPassword" rules={[{ required: true }]}>
                 <Input.Password />
               </Form.Item>
         <Form.Item label=" Confirm Password" name="confirmPassword" rules={[{ required: true }]}>
                  <Input.Password />
                </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Change Password
          </Button>
        </Form.Item>

        
      </Form>
    </Modal>
  );
};

export default NewPassword;
