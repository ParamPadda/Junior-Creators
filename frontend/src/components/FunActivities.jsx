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
  faUserSecret, faMoon
} from '@fortawesome/free-solid-svg-icons';

const activities = [
  {
    title: " Word Puzzle Challenge",
    icon: faPuzzlePiece,
    description: "Test your brain with exciting word puzzles and games!",
    image: "https://i.ytimg.com/vi/QwCM3zzjBQ0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCMpZzczMsiGJMY9aP_xyJ7B1zhGw",
    details: "Boost your vocabulary and spelling skills with fun and tricky word puzzles! Unscramble jumbled letters, complete crossword-style grids, and spot the hidden words in a sea of letters. Whether you're a word wizard or just starting out, this activity is perfect for learning while having fun! Ready to challenge your brain? Let's begin the puzzle journey!"
  }
  ,
  {
    title: 'Story Builder Game',
    icon: faBookOpen,
    image: 'https://images.pexels.com/photos/7606033/pexels-photo-7606033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Get random characters, settings, and plot twists—then build a mini story from them!',
    details: 'The game gives you random prompts—like a pirate in space who finds a magic spoon. Use these to create a creative short story. It builds narrative structure and boosts storytelling skills.',
    bg: 'bg-blue-100',
  },
  {
    title: 'Art with Words',
    icon: faPaintBrush,
    image: 'https://images.pexels.com/photos/12960389/pexels-photo-12960389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Combine drawing prompts with writing—draw what you write or write about your drawing!',
    details: 'You are given an abstract drawing or image, and your challenge is to write a story, poem, or short paragraph about it. Or, sketch your version of a story. Great for creative expression!',
    bg: 'bg-pink-100',
  },
  {
    title: 'Riddle Me This',
    icon: faQuestionCircle,
    image: 'https://images.pexels.com/photos/8535173/pexels-photo-8535173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Test your brain with fun riddles and brain teasers. Can you solve them all?',
    details: 'Solve riddles that involve logic, wordplay, and critical thinking. They’re categorized by difficulty and theme, making it exciting and educational.',
    bg: 'bg-yellow-100',
  },
  {
    title: 'Poetry Pop',
    icon: faPenFancy,
    image: 'https://images.pexels.com/photos/3928938/pexels-photo-3928938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Create short poems with a twist—use rhyming dice or emotion cards to guide your verses.',
    details: 'Get random themes, emotions, or words and write poems using them. This helps you understand rhythm, structure, and creative flow in poetry writing.',
    bg: 'bg-purple-100',
  },
  {
    title: 'Character Creator',
    icon: faUserAstronaut,
    image: 'https://images.pexels.com/photos/17801529/pexels-photo-17801529/free-photo-of-close-up-of-a-super-mario-toy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Design a unique character using prompts—name, powers, backstory, and more.',
    details: 'Fill in a profile with fun details like what your character eats, fears, and dreams. It enhances imagination and narrative thinking.',
    bg: 'bg-indigo-100',
  },
  {
    title: 'Emoji Story Game',
    icon: faSmile,
    image: 'https://images.pexels.com/photos/6898861/pexels-photo-6898861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Use a set of emojis to create a fun and silly story. Max 100 words!',
    details: 'Get a row of emojis and write a short story connecting them. A brilliant exercise in concise storytelling!',
    bg: 'bg-green-100',
  },
  {
    title: 'Caption This!',
    icon: faCameraRetro,
    image: 'https://images.pexels.com/photos/10417969/pexels-photo-10417969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'See a funny image and come up with the most creative caption you can think of!',
    details: 'You’ll get a quirky photo and must write a clever or hilarious caption. It sharpens your wit and imagination.',
    bg: 'bg-red-100',
  },
  {
    title: 'Mini Quiz Mania',
    icon: faQuestion,
    image: 'https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Take short quizzes on fun topics like superheroes, animals, and more!',
    details: 'Engaging quizzes help you learn facts while having fun. Instant feedback makes it even more exciting.',
    bg: 'bg-teal-100',
  },
  {
    title: 'Once Upon a Time',
    icon: faFeatherAlt,
    image: 'https://images.pexels.com/photos/1095601/pexels-photo-1095601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Begin a story and let others continue it. A fun way to collaborate!',
    details: 'Start with a single sentence or paragraph and allow others to add to the story. Great for collaboration and unexpected twists!',
    bg: 'bg-cyan-100',
  },{
  title: 'Mystery Adventure',
  icon: faUserSecret,
  image: 'https://images.pexels.com/photos/17623775/pexels-photo-17623775/free-photo-of-symmetrical-view-of-a-dark-tunnel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  description: 'Create an intriguing mystery for others to solve.',
  details: 'Write clues and plot twists that challenge readers to unravel the mystery step-by-step.',
  bg: 'bg-purple-100',
},
{
  title: 'Dream Diary',
  icon: faMoon,
  image: 'https://images.pexels.com/photos/636237/pexels-photo-636237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  description: 'Record your dreams and share the surreal experiences.',
  details: 'Capture your nightly adventures and invite others to interpret or expand upon them.',
  bg: 'bg-indigo-100',
}

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
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-transparent bg-clip-text animate-fade-in">
      Fun Activities Corner
 
</h2>

      <p className="max-w-3xl mx-auto text-center text-gray-600 text-base mb-10 px-4">
    Welcome to the <strong>Fun Activities Corner</strong> - your go-to space for learning through play! Dive into a world of creativity,
    exploration, and joy with exciting tasks designed to spark imagination and sharpen your skills. Whether it's puzzles,
    storytelling, crafting, or quirky challenges, there's something here for everyone. Let's make learning an adventure!
  </p>
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
