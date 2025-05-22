

/////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);


  const notifyNoSelection = () => toast.warn("Please select an option before proceeding.", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });



const fetchQuestions = async () => {
  try {
    const res = await axios.get('http://localhost:8080/api/quiz/all');
    if (res.data.success) {
      setQuestions(res.data.quizzes);
      resetQuiz(res.data.quizzes);
    }
  } catch (err) {
    console.error('Error fetching quizzes', err);
  }
};












  // // Simulated fetch from backend
  // const fetchQuestions = async () => {
  //   // Replace with actual API call
  //   const fetchedQuestions = [
  //     {
  //       question: 'What color is the sun?',
  //       options: ['Red', 'Yellow', 'Green', 'Blue'],
  //       correctAnswerIndex: 1,
  //     },
  //     {
  //       question: 'How many hours are there in a day?',
  //       options: ['12', '18', '24', '36'],
  //       correctAnswerIndex: 2,
  //     },
  //     {
  //       question: 'Which animal barks?',
  //       options: ['Cat', 'Dog', 'Bird', 'Cow'],
  //       correctAnswerIndex: 1,
  //     },
  //   ];
  //   setQuestions(fetchedQuestions);
  //   resetQuiz(fetchedQuestions);
  // };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const resetQuiz = (newQuestions = questions) => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setCorrectAnswer(null);
    setScore(0);
    setQuizFinished(false);
    setQuestions(newQuestions);
  };

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
    const current = questions[currentQuestionIndex];
    if (index === current.correctAnswerIndex) {
      setCorrectAnswer(current.options[index]);
      setScore(score + 1);
    } else {
      setCorrectAnswer(null);
    }
  };

  const handleNext = () => {
    // using react toastify 
    if (selectedAnswer === null) {
      notifyNoSelection(); 
      return;
    }


    setSelectedAnswer(null);
    setCorrectAnswer(null);
    if (currentQuestionIndex === questions.length - 1) {
      setQuizFinished(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  if (questions.length === 0) return <p>Loading...</p>;

  const current = questions[currentQuestionIndex];

  return (
    <div className="bg-yellow-50 p-8 rounded-lg shadow-md max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-purple-700">Quiz Zone</h2>
        <button
          onClick={() => fetchQuestions()}
          className=" h-[50px] w-[50px] hover:bg-amber-100 hover:rounded-full hover:cursor-pointer text-white px-4 py-1 rounded"
        >
          {/* Refresh */}
          <FontAwesomeIcon icon={faRedo} />
        </button>
      </div>

      {!quizFinished ? (
        <>
          <p className="text-gray-700 mb-2">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
          <p className="text-lg font-semibold text-blue-700 mb-4">{current.question}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {current.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswerSelect(idx)}
                disabled={correctAnswer !== null}
                className={`py-2 px-4 rounded border ${
                  selectedAnswer === idx
                    ? idx === current.correctAnswerIndex
                      ? 'bg-green-200 border-green-500 text-green-700'
                      : 'bg-red-200 border-red-500 text-red-700'
                    : 'bg-white border-gray-300 hover:bg-gray-100'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {correctAnswer && (
            <div className="text-green-700 bg-green-100 border border-green-400 px-4 py-2 rounded mb-3">
              Correct! The answer is: {correctAnswer}
            </div>
          )}

          {!correctAnswer && selectedAnswer !== null && selectedAnswer !== current.correctAnswerIndex && (
            <div className="text-red-700 bg-red-100 border border-red-400 px-4 py-2 rounded mb-3">
              Oops! That was incorrect.
            </div>
          )}

          <div className="text-right">
            <button
              onClick={handleNext}
              // disabled={selectedAnswer === null }
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer"
            >
              {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next Question'}
            </button>
          </div>
        </>
      ) : (
        <div className="text-center">
          <h3 className="text-2xl font-bold text-purple-700 mb-2">Quiz Completed! </h3>
          <p className="text-lg text-gray-700 mb-4">Your Score: {score} / {questions.length}</p>
          <button
            onClick={() => fetchQuestions()}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Play Again
          </button>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Quiz;
