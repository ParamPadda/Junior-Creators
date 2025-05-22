import React, { useState } from 'react';
import { Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPuzzlePiece,
  faBookOpen,
  faPaintBrush,
  faQuestionCircle,
  faPenFancy,
  faUserAstronaut,
  faSmile,
  faCameraRetro,
  faQuestion,
  faFeatherAlt,
} from '@fortawesome/free-solid-svg-icons';

const activities = [
  {
    title: " Word Puzzle Challenge",
    icon: faPuzzlePiece,
    description: "Test your brain with exciting word puzzles and games!",
    image: "https://cdn.pixabay.com/photo/2016/03/27/22/16/word-1284665_1280.jpg",
    fullDescription: `Boost your vocabulary and spelling skills with fun and tricky word puzzles!
  Unscramble jumbled letters, complete crossword-style grids, and spot the hidden words in a sea of letters.
  Whether you're a word wizard or just starting out, this activity is perfect for learning while having fun!
  Ready to challenge your brain? Let's begin the puzzle journey!`
  }
  ,
  {
    title: 'Story Builder Game',
    icon: faBookOpen,
    image: 'https://images.unsplash.com/photo-1584697964154-6edc4d0fcf78',
    description: 'Get random characters, settings, and plot twists—then build a mini story from them!',
    details: 'The game gives you random prompts—like a pirate in space who finds a magic spoon. Use these to create a creative short story. It builds narrative structure and boosts storytelling skills.',
    bg: 'bg-blue-100',
  },
  {
    title: 'Art with Words',
    icon: faPaintBrush,
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
    description: 'Combine drawing prompts with writing—draw what you write or write about your drawing!',
    details: 'You’re given an abstract drawing or image, and your challenge is to write a story, poem, or short paragraph about it. Or, sketch your version of a story. Great for creative expression!',
    bg: 'bg-pink-100',
  },
  {
    title: 'Riddle Me This',
    icon: faQuestionCircle,
    image: 'https://images.unsplash.com/photo-1609870054279-b45fc1c2b034',
    description: 'Test your brain with fun riddles and brain teasers. Can you solve them all?',
    details: 'Solve riddles that involve logic, wordplay, and critical thinking. They’re categorized by difficulty and theme, making it exciting and educational.',
    bg: 'bg-yellow-100',
  },
  {
    title: 'Poetry Pop',
    icon: faPenFancy,
    image: 'https://images.unsplash.com/photo-1499084732479-de2c02d45fc4',
    description: 'Create short poems with a twist—use rhyming dice or emotion cards to guide your verses.',
    details: 'Get random themes, emotions, or words and write poems using them. This helps you understand rhythm, structure, and creative flow in poetry writing.',
    bg: 'bg-purple-100',
  },
  {
    title: 'Character Creator',
    icon: faUserAstronaut,
    image: 'https://images.unsplash.com/photo-1607083201647-942efb7f332e',
    description: 'Design a unique character using prompts—name, powers, backstory, and more.',
    details: 'Fill in a profile with fun details like what your character eats, fears, and dreams. It enhances imagination and narrative thinking.',
    bg: 'bg-indigo-100',
  },
  {
    title: 'Emoji Story Game',
    icon: faSmile,
    image: 'https://images.unsplash.com/photo-1603912947698-cbb57830d5f8',
    description: 'Use a set of emojis to create a fun and silly story. Max 100 words!',
    details: 'Get a row of emojis—🦄🍕🚀🎩—and write a short story connecting them. A brilliant exercise in concise storytelling!',
    bg: 'bg-green-100',
  },
  {
    title: 'Caption This!',
    icon: faCameraRetro,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    description: 'See a funny image and come up with the most creative caption you can think of!',
    details: 'You’ll get a quirky photo and must write a clever or hilarious caption. It sharpens your wit and imagination.',
    bg: 'bg-red-100',
  },
  {
    title: 'Mini Quiz Mania',
    icon: faQuestion,
    image: 'https://images.unsplash.com/photo-1603145733141-78edb8dc72e0',
    description: 'Take short quizzes on fun topics like superheroes, animals, and more!',
    details: 'Engaging quizzes help you learn facts while having fun. Instant feedback makes it even more exciting.',
    bg: 'bg-teal-100',
  },
  {
    title: 'Once Upon a Time',
    icon: faFeatherAlt,
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136',
    description: 'Begin a story and let others continue it. A fun way to collaborate!',
    details: 'Start with a single sentence or paragraph and allow others to add to the story. Great for collaboration and unexpected twists!',
    bg: 'bg-cyan-100',
  },
];

const FunActivities = () => {
  const [open, setOpen] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(null);

  const showModal = (activity) => {
    setCurrentActivity(activity);
    setOpen(true);
  };

  return (
    <div className="p-6 bg-[#FFFDF9] min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8"> Fun Activities Corner</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <div
            key={index}
            className={`cursor-pointer p-6 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 ${activity.bg}`}
            onClick={() => showModal(activity)}
          >
            <img src={activity.image} alt={activity.title} className="h-40 w-full object-cover rounded-md mb-4" />
            <FontAwesomeIcon icon={activity.icon} className="text-3xl mb-4 text-gray-700" />
            <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
            <p className="text-sm text-gray-700">{activity.description}</p>
          </div>
        ))}
      </div>

      <Modal
        title={currentActivity?.title}
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width={800}
      >
        <img src={currentActivity?.image} alt={currentActivity?.title} className="w-full rounded-md mb-4" />
        <p className="text-gray-700 text-base leading-relaxed">
          {currentActivity?.details}
        </p>
      </Modal>
    </div>
  );
};

export default FunActivities;
