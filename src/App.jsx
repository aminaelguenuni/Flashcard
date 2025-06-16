import React, { useState } from 'react';
import './App.css'; 

const flashcards = [
  { question: 'What is the capital of France?', answer: 'Paris' },
  { question: 'Which country is known as the Land of the Rising Sun?', answer: 'Japan' },
  { question: 'What is the largest country in the world by area?', answer: 'Russia' },
  { question: 'What is the capital of Canada?', answer: 'Ottawa' },
  { question: 'What is the capital of Morocco?', answer: 'Rabat' },
  { question: 'What is the smallest country in the world?', answer: 'Vatican City' },
  { question: 'Which ocean is the deepest?', answer: 'Pacific Ocean' },
  { question: 'What continent is Egypt in?', answer: 'Africa' },
  { question: 'What is the official language of Brazil?', answer: 'Portuguese' },
  { question: 'What is the national animal of China?', answer: 'Giant Panda' }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = flashcards[currentIndex];

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentIndex(randomIndex);
    setIsFlipped(false);
  };

  return (
    <div className="app-container">
      <h1>🌍 Geography Flashcards</h1>
      <p>Test your knowledge of world facts. Click the card to flip!</p>
      <div
        className="flashcard"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {isFlipped ? currentCard.answer : currentCard.question}
      </div>
      <button onClick={handleNext} className="next-button">
        Next Card
      </button>
      <p>Total Cards: {flashcards.length}</p>
    </div>
  );
}

export default App;
