import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUndo, faCreditCard, faLock, faTimes } from '@fortawesome/free-solid-svg-icons';

const dummyTasks = [
  {
    id: 1,
    title: "Read a Story",
    description: "Read your favorite story for 10 minutes.",
    image: "https://images.pexels.com/photos/1031588/pexels-photo-1031588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "Write a Poem",
    description: "A poem can be any rhythmical and often rhyming composition that expresses emotions, ideas, or experiences in a concentrated and imaginative way, often using figurative language. It's a literary form that goes beyond ordinary speech, aiming to evoke an emotional response in the reader. ",
    image: "https://images.pexels.com/photos/7080671/pexels-photo-7080671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "Learn a New Word",
    description: "Pick a new word and use it in 3 sentences.",
    image: "https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    title: "Share Experience",
    description: "Pick a new word and use it in 3 sentences.",
    image: "https://images.pexels.com/photos/2672979/pexels-photo-2672979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    title: "Write Your Hobbies",
    description: "Pick a new word and use it in 3 sentences.",
    image: "https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const DailyTask = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const isSubscribed = localStorage.getItem("dailyTaskSubscribed") === "true";
    if (!isSubscribed) {
      setShowSubscriptionModal(true);
    } else {
      setSubscribed(true);
    }
  }, []);

  const handleSubscribeClick = () => {
    setShowSubscriptionModal(false);
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = () => {
    setSubscribed(true);
    localStorage.setItem("dailyTaskSubscribed", "true");
    setShowPaymentModal(false);
    toast.success("Subscription successful! ");
  };

  const handleModalClose = () => {
    setShowSubscriptionModal(false); // will open again next visit unless subscribed
  };

  const toggleComplete = (id) => {
    setCompletedTasks((prev) =>
      prev.includes(id) ? prev.filter((taskId) => taskId !== id) : [...prev, id]
    );
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
          <Button key="pay" type="primary" onClick={handlePaymentSuccess} className="w-full">
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

      {/* Daily Tasks Section */}
      {subscribed && (
        <div className="overflow-x-auto mt-6 pb-4">
          <div className="flex space-x-6 px-6 py-4">
            {dummyTasks.map((task) => (
              <div
                key={task.id}
                className={` cursor-pointer min-w-[320px] max-w-[320px] h-[420px] rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 relative ${
                  completedTasks.includes(task.id) ? "bg-green-200" : "bg-white"
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
                    {completedTasks.includes(task.id) ? (
                      <button
                        className="bg-yellow-500 text-white w-full py-2 rounded-lg flex items-center justify-center gap-2"
                        onClick={() => toggleComplete(task.id)}
                      >
                        <FontAwesomeIcon icon={faUndo} /> Undo Completed
                      </button>
                    ) : (
                      <button
                        className="bg-blue-400 text-white w-full py-2 rounded-lg flex items-center justify-center gap-2"
                        onClick={() => toggleComplete(task.id)}
                      >
                        <FontAwesomeIcon icon={faCheckCircle} /> Mark as Completed
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DailyTask;
