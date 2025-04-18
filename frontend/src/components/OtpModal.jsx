// components/OtpModal.jsx
import { Form, Input, Modal, Button } from "antd";
import { useRef, useEffect,useState } from "react";

const OtpModal = ({ open, onCancel, onVerify }) => {
  const [form] = Form.useForm();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputsRef = useRef([]);

  useEffect(() => {
    if (!open) {
      form.resetFields(); // clear OTP input when closed
    }
  }, [open, form]);

  const handleSubmit = (values) => {
    const joinedOtp = otp.join('');
    if (joinedOtp.length === 6) {
      onVerify(joinedOtp); //  send this to backend
      setOtp(['', '', '', '', '', '']);
    } else {
      console.log("Incomplete OTP");
    }
 
  };
  const handleChange = (value, index) => {
    const newOtp = [...otp];       //copy array using spread operator
    newOtp[index] = value.slice(-1); // Take only last digit- Incase user enter more than one digit..
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  return (
    <Modal
      open={open}
      title={<div className="text-center text-xl font-semibold mb-6">Verify Your OTP</div>}
      onCancel={onCancel}
      footer={null}
    >
        <p className="text-center mb-5">Enter 6-digit code below that we just sent at your email</p>
      <Form
        
        onFinish={handleSubmit}
        form={form}
        layout="vertical"
      >
        <div className=" flex gap-5 justify-center mt-3 mb-6">
        {otp.map((digit, index) => (
            <Input
              key={index}
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              ref={(el) => (inputsRef.current[index] = el)}
              style={{ width: '40px', textAlign: 'center', fontSize: '18px' }}
            />
          ))}
        </div>
       
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Verify
          </Button>
        </Form.Item>
      
      </Form>
      <Button > Resend OTP</Button>
    </Modal>
  );
};

export default OtpModal;
