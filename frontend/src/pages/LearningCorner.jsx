import React, { useState } from "react";
import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenFancy,
  faBookOpen,
  faSpellCheck,
  faFeatherAlt,
  faLightbulb,
  faLanguage,
  faImage,
  faComments,
  faStar,faBrain,
  faPuzzlePiece,
  faSmile
} from "@fortawesome/free-solid-svg-icons";

const topics = [
  {
    title: "Creative Writing",
    icon: faPenFancy,
    image: "https://images.pexels.com/photos/7283632/pexels-photo-7283632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "bg-blue-100",
    description:
      "Explore your imagination and create original stories, characters, and settings. Let your ideas flow! Creative writing enhances expression and problem-solving through narrative structure."
  },
  {
    title: "Story Building",
    icon: faLightbulb,
    image: "https://images.pexels.com/photos/8535599/pexels-photo-8535599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "bg-green-100",
    description:
      "Learn how to build exciting plots, create suspense, and craft strong story endings. Gain skills in sequencing, climax formation, and character motivation."
  },
  {
    title: "Grammar Skills",
    icon: faSpellCheck,
    image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "bg-yellow-100",
    description:
      "Master basic grammar rules through fun exercises and examples. Understand sentence structure, parts of speech, and punctuation for better writing."
  },
  {
    title: "Reading Corner",
    icon: faBookOpen,
    image: "https://images.pexels.com/photos/32218635/pexels-photo-32218635/free-photo-of-young-boy-reading-in-a-classroom-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "bg-pink-100",
    description:
      "Discover short stories, tales, and articles that improve your reading skills and boost comprehension. Strengthen vocabulary and inferencing abilities."
  },
  {
    title: "Poetry Fun",
    icon: faFeatherAlt,
    image: "https://images.pexels.com/photos/1846422/pexels-photo-1846422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "bg-purple-100",
    description:
      "Dive into the rhythm of words! Learn to write poems using rhymes, metaphors, and emotions. Explore various poetic forms like haiku, acrostic, and free verse."
  },
  {
    title: "Vocabulary Vault",
    icon: faLanguage,
    image: "https://images.pexels.com/photos/8762817/pexels-photo-8762817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "bg-indigo-100",
    description:
      "Unlock new words daily and learn how to use them effectively in sentences. Improve language fluency and communication confidence."
  },
  {
    title: "Picture Prompts",
    icon: faImage,
    image: "https://images.pexels.com/photos/32221079/pexels-photo-32221079/free-photo-of-map-of-usa-highlighting-west-coast-train-routes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "bg-red-100",
    description:
      "Write stories inspired by images. A fun way to trigger your imagination visually! Develop descriptive writing and observational skills."
  },
  {
    title: "Comics & Dialogue",
    icon: faComments,
    image: "https://images.pexels.com/photos/7809123/pexels-photo-7809123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "bg-orange-100",
    description:
      "Learn to write engaging dialogues and create your own comic strips with character conversations. Understand speech patterns, tone, and storytelling through visuals."
  },
  {
    title: "Book Reviews",
    icon: faStar,
    image: "https://images.pexels.com/photos/5407054/pexels-photo-5407054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "bg-teal-100",
    description:
      "Share your thoughts on books you read! Learn how to write honest and creative book reviews. Practice critical thinking, summarization, and opinion writing."
  }
];

const LearningCorner = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div className="min-h-screen bg-[#fdfdfb] p-6">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
        Learning Corner
      </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
        Welcome to the Learning Corner! Here you'll find a variety of fun and educational topics to boost your creativity and language skills. Click on each card to explore more. We've also included helpful Google links so you can dig deeper into every topic.
      </p>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic, index) => (
          <div
            key={index}
            onClick={() => setSelectedTopic(topic)}
            className={`cursor-pointer ${topic.color} shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 border-t-4 border-purple-300`}
          >
            <img
              src={topic.image}
              alt={topic.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <FontAwesomeIcon icon={topic.icon} className="text-3xl text-purple-600 mb-2" />
            <h2 className="text-xl font-semibold text-gray-800">{topic.title}</h2>
          </div>
        ))}
      </div>

      <Modal
        title={selectedTopic?.title}
        open={!!selectedTopic}
        onCancel={() => setSelectedTopic(null)}
        footer={null}
        centered
        width={900}
        bodyStyle={{
          maxHeight: '70vh',
          overflowY: 'auto',
          padding: '24px'
        }}
      >
        <div className="text-gray-700 text-base space-y-4 leading-relaxed">
          {selectedTopic?.image && (
            <img
              src={selectedTopic.image}
              alt={selectedTopic.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          )}

          <p>{selectedTopic?.description}</p>

          <div className="flex items-center gap-2 text-purple-700">
            <FontAwesomeIcon icon={faBrain} className="text-lg" />
            <span>Enhance thinking with real-life examples and creative challenges.</span>
          </div>
          <div className="flex items-center gap-2 text-pink-600">
            <FontAwesomeIcon icon={faPuzzlePiece} className="text-lg" />
            <span>Engage with mini-quizzes, vocabulary boosts, and writing prompts.</span>
          </div>
          <div className="flex items-center gap-2 text-yellow-600">
            <FontAwesomeIcon icon={faSmile} className="text-lg" />
            <span>Fun facts and visual learning for joyful discovery!</span>
          </div>

          

          {selectedTopic?.title && (
            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(selectedTopic.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              Explore more about {selectedTopic.title} on Google
            </a>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default LearningCorner;
