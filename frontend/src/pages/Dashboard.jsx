import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPen,
  faTrash,
  faEdit,
  faHeart,
  faComment,
  faChartLine,
  faBell,
  faUserEdit,
  faStar,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [avatarModalVisible, setAvatarModalVisible] = useState(false);
  const [editProfileVisible, setEditProfileVisible] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  console.log(blogs);

  const user = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    avatar:
      "https://images.pexels.com/photos/14073969/pexels-photo-14073969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    badge: "Pro Blogger",
    streak: 3,
    wordCount: 15230,
  };

  const notifications = [
    { id: 1, user: "Alice", action: "liked", blog: "My First Blog" },
    { id: 2, user: "Bob", action: "commented on", blog: "Learning React" },
  ];

  const avatars = [
    "https://images.pexels.com/photos/14073969/pexels-photo-14073969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "/avatar2.png",
    "/avatar3.png",
  ];

  const handleAvatarSelect = (avatar) => {
    toast.success("Avatar updated!");
    setAvatarModalVisible(false);
  };

  const fetchBlogs = async () => {
    const email = localStorage.getItem("email");
    console.log(email);
    try {
      const response = await axios.get(
        `http://localhost:8080/api/blogs/getUserBlogs/${email}`
      );
      console.log(response?.data, "response");
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
      toast.error("Failed to load blogs.");
    }
  };

  const fetchCompletedTasks = async () => {
    const email = localStorage.getItem("email");
    if (!email) return;

    try {
      const response = await axios.get(
        `http://localhost:8080/api/tasks/getCompletedTasks/${email}`
      );
      if (response.data.success) {
        setCompletedTasks(response.data.completedTasks);
      } else {
        toast.error("Failed to load completed tasks");
      }
    } catch (error) {
      console.error("Failed to fetch completed tasks", error);
      toast.error("Failed to load completed tasks");
    }
  };

  useEffect(() => {
    fetchBlogs();
    fetchCompletedTasks();
  }, []);

const handleDeleteBlog = async (blogId) => {
  const email = localStorage.getItem("email");
  console.log("Deleting blog with ID:", blogId);
  if (!blogId) {
    console.error("No blog ID provided.");
    return;
  }

  if (!window.confirm("Are you sure you want to delete this blog?")) return;

  try {
    const encodedEmail = encodeURIComponent(email);
const response = await axios.delete(
  `http://localhost:8080/api/blogs/deleteBlog/${blogId}/${encodedEmail}`
);

    // const response = await axios.delete(
    //   `http://localhost:8080/api/blogs/deleteBlog/${blogId}/${email}`
    // );

    if (response.data.success) {
      toast.success("Blog deleted successfully");
      fetchBlogs();
    } else {
      toast.error(response.data.message || "Failed to delete blog");
    }
  } catch (error) {
    console.error("Error deleting blog:", error);
    toast.error("Server error: Failed to delete blog");
  }
};


  return (
    <div className="min-h-screen bg-gray-100 p-6 overflow-x-hidden">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Profile Dashboard
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Profile Card */}
          <div className="bg-white p-4 rounded-2xl shadow-md flex gap-4 items-center">
            <img
              src={user.avatar}
              alt="avatar"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <FontAwesomeIcon icon={faEnvelope} /> {user.email}
              </p>
              <p className="text-sm text-yellow-500 flex items-center gap-1">
                <FontAwesomeIcon icon={faStar} /> {user.badge}
              </p>
            </div>
            <Button
              className="ml-auto"
              onClick={() => setEditProfileVisible(true)}
            >
              <FontAwesomeIcon icon={faUserEdit} /> Edit Profile
            </Button>
          </div>

          {/* Stats */}
          <div className="bg-white p-4 rounded-2xl shadow-md grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-600">Word Count</p>
              <p className="text-xl font-semibold">{user.wordCount}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Writing Streak</p>
              <p className="text-xl font-semibold">{user.streak} days</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Blogs</p>
              <p className="text-xl font-semibold">{blogs.length}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Achievements</p>
              <p className="text-xl font-semibold">4</p>
            </div>
          </div>

          {/* Blog List */}
          <div className="bg-white p-4 rounded-2xl shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Your Blogs</h3>
              <Button type="primary">
                <FontAwesomeIcon icon={faPen} /> New Blog
              </Button>
            </div>
            <ul className="space-y-3">
              {blogs.map((blog) => (
                <li
                  key={blog.id}
                  className="flex items-center justify-between p-3 border rounded-xl"
                >
                  <div>
                    <p className="font-medium">{blog.title}</p>
                    <p className="font-medium">{blog.about}</p>
                    {/* Uncomment if needed:
                    <p className="text-sm text-gray-500">
                      {blog.status} | <FontAwesomeIcon icon={faHeart} /> {blog.likes} | <FontAwesomeIcon icon={faComment} /> {blog.comments} | Views: {blog.views}
                    </p> */}
                  </div>
                  <div className="flex gap-2">
                    <Button icon={<FontAwesomeIcon icon={faEdit} />} />
                    <Button
  danger
  icon={<FontAwesomeIcon icon={faTrash} />}
  onClick={() => handleDeleteBlog(blog.id)}
/>

                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Avatar Selection */}
          <div className="bg-white p-4 rounded-2xl shadow-md">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold">Your Avatar</h3>
              <Button onClick={() => setAvatarModalVisible(true)}>
                Change Avatar
              </Button>
            </div>
            <img
              src={user.avatar}
              alt="Avatar"
              className="w-16 h-16 rounded-full"
            />
          </div>
        </div>

        {/* Right Section - Notifications and Daily Task */}
        <div className="flex flex-col gap-6">
          <div className="bg-white p-4 rounded-2xl shadow-md h-full">
            <h3 className="text-lg font-semibold mb-3">
              <FontAwesomeIcon icon={faBell} className="mr-2" />
              Notifications
            </h3>
            <ul className="space-y-3">
              {notifications.map((n) => (
                <li key={n.id} className="text-sm">
                  <span className="font-semibold">{n.user}</span> {n.action}{" "}
                  your blog <em>{n.blog}</em>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FontAwesomeIcon icon={faLightbulb} /> Daily Task
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              List of Daily Tasks completed by you, for those who are having
              subscription.
            </p>
           {completedTasks.length === 0 ? (
  <p className="text-gray-500 text-sm">No completed tasks yet.</p>
) : (
  <ul className="list-disc list-inside space-y-1">
    {completedTasks.map((task) => (
      <li key={task._id} className="text-gray-700">
         <span className="font-semibold">{task.title}</span>
        {task.blogTitle && (
          <>
            {" "}– Blog: <span className="text-blue-600 italic">{task.blogTitle}</span>
          </>
        )}
      </li>
    ))}
  </ul>
)}

          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal
        open={avatarModalVisible}
        onCancel={() => setAvatarModalVisible(false)}
        footer={null}
        title="Choose Your Avatar"
      >
        <div className="flex gap-4 flex-wrap justify-center">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`avatar-${i}`}
              className="w-20 h-20 rounded-full cursor-pointer border-2 border-transparent hover:border-blue-500"
              onClick={() => handleAvatarSelect(src)}
            />
          ))}
        </div>
      </Modal>

      <Modal
        open={editProfileVisible}
        onCancel={() => setEditProfileVisible(false)}
        footer={null}
        title="Edit Profile"
      >
        <form>
          {/* Your edit profile form fields here */}
          <Button type="primary" htmlType="submit">
            Save Changes
          </Button>
        </form>
      </Modal>

      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Dashboard;
