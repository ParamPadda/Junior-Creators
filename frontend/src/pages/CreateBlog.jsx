
import React, { useState } from 'react';
import { Form, Input,  Upload,Button as AntButton, Button } from 'antd';
import createBg from "../assets/one.jpeg";
import { UploadOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUpload, faMicrophone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faBold, faItalic, faUnderline, faPalette, faImage, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import 'antd/dist/reset.css'; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';


const { TextArea } = Input;

const CreateBlog = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [body, setBody] = useState('');
  const [color, setColor] = useState('#1E2A38');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const handleTextChange = (e) => {
    setBody(e.target.value);
  };

  const textStyle = {
    color,
    fontWeight: isBold ? 'bold' : 'normal',
    fontStyle: isItalic ? 'italic' : 'normal',
    textDecoration: isUnderline ? 'underline' : 'none',
  };
  const [imageFile, setImageFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const userEmail = localStorage.getItem('email'); // ⬅️ get email from localStorage

const onFinish = async (values) => {
    const formData = new FormData();
    console.log(formData)
    formData.append('title', values.title);
    formData.append('about', values.about);
    formData.append('image', imageFile);
    formData.append('audio', audioFile);
formData.append('email', userEmail); 
    try {
      const response = await axios.post('http://localhost:8080/api/blogs/addBlogs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // message.success('Blog uploaded successfully!');
      toast.success("Blog uploaded successfully!");
      form.resetFields();
      setImageFile(null);
      setAudioFile(null);
      navigate("/home/exploreBlogs")
    } catch (error) {
      console.error(error);
      message.error('Upload failed!');
    }
  };

  return (
    <div className="min-h-screen  p-6 bg-no-repeat bg-cover" style={{
        backgroundImage: `url(${createBg})`, 
        
      }}>
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="mine flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-[#1E2A38]">
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2 text-[#920f41]" />
            Create Blog
          </h1>
          <button
            className=" transition"
            onClick={() => navigate('/home')}
          >
            <FontAwesomeIcon icon={faHome} className="text-2xl text-[#b06c0c] cursor-pointer hover:text-[#6d423e]" />
          </button>
          </div>
        
     <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item name="title" label="Blog Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="about" label="Description" rules={[{ required: true }]}>
        <Input.TextArea rows={4} onChange={(e)=>setBody(e.target.value)} />
      </Form.Item>
      <div className="mt-6 mb-6 p-4 rounded-xl border border-orange-300 bg-[#fff9f0] shadow-inner">
  <h2 className="text-lg font-bold text-orange-600 mb-2">Live Preview</h2>
  <div
    className="text-base whitespace-pre-wrap"
    style={{
      color,
      fontWeight: isBold ? 'bold' : 'normal',
      fontStyle: isItalic ? 'italic' : 'normal',
      textDecoration: isUnderline ? 'underline' : 'none',
    }}
  >
    {body || 'Start typing above to preview your blog...'}
  </div>
</div>

      <Form.Item label="Upload Image">
        <Upload
          beforeUpload={(file) => {
            setImageFile(file);
            return false; // prevent automatic upload
          }}
          accept="image/*"
          showUploadList={{ showRemoveIcon: true }}
          onRemove={() => setImageFile(null)}
        >
          <Button icon={<UploadOutlined />}>Select Image</Button>
        </Upload>
      </Form.Item>

      <Form.Item label="Upload Audio">
        <Upload
          beforeUpload={(file) => {
            setAudioFile(file);
            return false;
          }}
          accept="audio/*"
          showUploadList={{ showRemoveIcon: true }}
          onRemove={() => setAudioFile(null)}
        >
          <Button icon={<UploadOutlined />}>Select Audio</Button>
        </Upload>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">PublishQuiz Zone

 Blog</Button>
      </Form.Item>
    </Form>
      </div>
    </div>
  );
};

export default CreateBlog;
