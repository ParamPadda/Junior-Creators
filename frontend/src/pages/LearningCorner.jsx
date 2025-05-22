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
  faStar
} from "@fortawesome/free-solid-svg-icons";

const topics = [
  {
    title: "Creative Writing",
    icon: faPenFancy,
    description:
      "Explore your imagination and create original stories, characters, and settings. Let your ideas flow!"
  },
  {
    title: "Story Building",
    icon: faLightbulb,
    description:
      "Learn how to build exciting plots, create suspense, and craft strong story endings."
  },
  {
    title: "Grammar Skills",
    icon: faSpellCheck,
    description:
      "Master basic grammar rules through fun exercises and examples."
  },
  {
    title: "Reading Corner",
    icon: faBookOpen,
    description:
      "Discover short stories, tales, and articles that improve your reading skills and boost comprehension."
  },
  {
    title: "Poetry Fun",
    icon: faFeatherAlt,
    description:
      "Dive into the rhythm of words! Learn to write poems using rhymes, metaphors, and emotions."
  },
  {
    title: "Vocabulary Vault",
    icon: faLanguage,
    description:
      "Unlock new words daily and learn how to use them effectively in sentences."
  },
  {
    title: "Picture Prompts",
    icon: faImage,
    description:
      "Write stories inspired by images. A fun way to trigger your imagination visually!"
  },
  {
    title: "Comics & Dialogue",
    icon: faComments,
    description:
      "Learn to write engaging dialogues and create your own comic strips with character conversations."
  },
  {
    title: "Book Reviews",
    icon: faStar,
    description:
      "Share your thoughts on books you read! Learn how to write honest and creative book reviews."
  }
];

const LearningCorner = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-pink-100 p-6">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
        🎓 Learning Corner
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic, index) => (
          <div
            key={index}
            onClick={() => setSelectedTopic(topic)}
            className="cursor-pointer bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 border-t-4 border-purple-300"
          >
            <FontAwesomeIcon icon={topic.icon} className="text-3xl text-purple-600 mb-4" />
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
  width={900} // Large width
  bodyStyle={{
    maxHeight: '70vh', // Keeps it readable
    overflowY: 'auto', // Scroll if content is long
    padding: '24px'
  }}
>
  <div className="text-gray-700 text-base space-y-4 leading-relaxed">
    <p>{selectedTopic?.description}</p>

    {/* Optional: Add more paragraphs */}
    <p>
      This section helps young learners go deeper into the topic with real-life
      examples, fun facts, and tips. You can add activities, vocabulary lists, or even short quizzes.
    </p>

    <ul className="list-disc list-inside">
      <li>Encourage creativity with open-ended prompts</li>
      <li>Use visual cues for better memory retention</li>
      <li>Include a Did You Know? section for fun facts</li>
    </ul>
  </div>
</Modal>

    </div>
  );
};

export default LearningCorner;
