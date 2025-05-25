import React, { useEffect, useState } from "react";
import { Modal, Button, Spin } from "antd";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {
  faCheckCircle,
  faUndo,
  faCreditCard,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const DailyTask = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [dailyTasks, setDailyTasks] = useState([]);
  const [loadingTasks, setLoadingTasks] = useState(false); // Loading for fetching tasks
  const [loadingToggle, setLoadingToggle] = useState(null); // Loading for toggling one task (stores task id)

  useEffect(() => {
    const isSubscribed = localStorage.getItem("dailyTaskSubscribed") === "true";
    if (!isSubscribed) {
      setShowSubscriptionModal(true);
    } else {
      setSubscribed(true);
    }

    // Load completedTasks from localStorage first to keep UI consistent immediately
    const storedCompletedTasks = localStorage.getItem("completedTasks");
    if (storedCompletedTasks) {
      setCompletedTasks(JSON.parse(storedCompletedTasks));
    }

    // Then fetch fresh data from backend (optional)
    fetchDailyTasks();
  }, []);

  // Fetch tasks & completed tasks for the logged-in user
  const fetchDailyTasks = async () => {
    setLoadingTasks(true);
    try {
      const res = await axios.get("http://localhost:8080/api/tasks/all");
      if (res.data.success) {
        setDailyTasks(res.data.tasks);
      }

      // Fetch completed tasks for this user by email
      const userEmail = localStorage.getItem("userEmail");
      if (userEmail) {
        const compRes = await axios.get(
          `http://localhost:8080/api/tasks/completed/${userEmail}`
        );
        if (compRes.data.success) {
          setCompletedTasks(compRes.data.completedTasks);
          // Also sync with localStorage again after backend fetch
          localStorage.setItem(
            "completedTasks",
            JSON.stringify(compRes.data.completedTasks)
          );
        }
      }
    } catch (err) {
      console.error("Error fetching tasks", err);
      toast.error("Failed to load tasks");
    } finally {
      setLoadingTasks(false);
    }
  };

  const handleSubscribeClick = () => {
    setShowSubscriptionModal(false);
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = () => {
    setSubscribed(true);
    localStorage.setItem("dailyTaskSubscribed", "true");
    setShowPaymentModal(false);
    toast.success("Subscription successful!");
  };

  const handleModalClose = () => {
    setShowSubscriptionModal(false);
  };

  const toggleComplete = async (id) => {
    const isCompleted = completedTasks.includes(id);
    const email = localStorage.getItem("email");
    if (!email) {
      toast.error("User not logged in");
      return;
    }

    const task = dailyTasks.find((task) => task._id === id);

    setLoadingToggle(id); // Start loading for this task

    try {
      await axios.post(`http://localhost:8080/api/tasks/mark-read/${id}`, {
        email: email,
        status: isCompleted ? "undo" : "complete",
        task: isCompleted
          ? null
          : {
              id: task._id,
              title: task.title,
              description: task.description,
            },
      });

      // Update completed tasks locally
      setCompletedTasks((prev) => {
        const updated = isCompleted
          ? prev.filter((taskId) => taskId !== id)
          : [...prev, id];
        // Sync with localStorage
        localStorage.setItem("completedTasks", JSON.stringify(updated));
        return updated;
      });

      toast.success(isCompleted ? "Marked as incomplete" : "Marked as completed");
    } catch (error) {
      console.error("Error updating task status", error);
      toast.error("Failed to update task status");
    } finally {
      setLoadingToggle(null); // Stop loading
    }
  };

  return (
    <div className="relative">
      {/* Subscription Modal */}
      <Modal
        open={showSubscriptionModal && !subscribed}
        closable
        footer={null}
        centered
        maskClosable={false}
        onCancel={handleModalClose}
        className="z-50"
      >
        <div className="text-center relative">
          <FontAwesomeIcon icon={faLock} className="text-3xl text-blue-500 mb-3" />
          <h2 className="text-xl font-bold">Subscribe to Access Daily Tasks</h2>
          <p className="text-gray-600 mt-1 mb-4">
            Get creative challenges and activities every day!
          </p>
          <Button type="primary" onClick={handleSubscribeClick} className="w-full">
            <FontAwesomeIcon icon={faCreditCard} className="mr-2" /> Subscribe Now
          </Button>
        </div>
      </Modal>

      {/* Payment Modal */}
      <Modal
        open={showPaymentModal}
        onCancel={() => setShowPaymentModal(false)}
        footer={[
          <Button
            key="pay"
            type="primary"
            onClick={handlePaymentSuccess}
            className="w-full"
          >
            <FontAwesomeIcon icon={faCreditCard} className="mr-2" /> Pay ₹99
          </Button>,
        ]}
        centered
      >
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Complete Payment</h2>
          <p>Secure your access to daily tasks by paying a small fee.</p>
        </div>
      </Modal>

      {/* Loading spinner while fetching tasks */}
      {loadingTasks ? (
        <div className="flex justify-center items-center mt-20">
          <Spin size="large" />
        </div>
      ) : (
        <>
          {/* Daily Tasks Section */}
          {subscribed && (
            <div className="overflow-x-auto mt-6 pb-4">
              <div className="flex space-x-6 px-6 py-4">
                {dailyTasks.map((task) => (
                  <div
                    key={task._id}
                    className={`cursor-pointer min-w-[320px] max-w-[320px] h-[420px] rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 relative ${
                      completedTasks.includes(task._id)
                        ? "bg-green-200"
                        : "bg-white"
                    }`}
                  >
                    <img
                      src={task.image}
                      alt={task.title}
                      className="w-full h-40 object-cover rounded-t-2xl"
                    />
                    <div className="p-4 flex flex-col justify-between h-[calc(100%-10rem)]">
                      <div>
                        <h3 className="text-lg font-bold">{task.title}</h3>
                        <p className="text-sm text-gray-700 mt-1">{task.description}</p>
                      </div>
                      <div className="mt-4">
                        {completedTasks.includes(task._id) ? (
                          <Button
                            type="warning"
                            className="w-full flex items-center justify-center gap-2 "
                            onClick={() => toggleComplete(task._id)}
                            disabled={loadingToggle === task._id}
                          >
                            {loadingToggle === task._id ? (
                              <Spin size="small" />
                            ) : (
                              <>
                                <FontAwesomeIcon icon={faUndo} /> Undo Completed
                              </>
                            )}
                          </Button>
                        ) : (
                          <Button
                            type="primary"
                            className="w-full flex items-center justify-center gap-2"
                            onClick={() => toggleComplete(task._id)}
                            disabled={loadingToggle === task._id}
                          >
                            {loadingToggle === task._id ? (
                              <Spin size="small" />
                            ) : (
                              <>
                                <FontAwesomeIcon icon={faCheckCircle} /> Mark as
                                Completed
                              </>
                            )}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DailyTask;
