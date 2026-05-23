import { useState } from "react";

const FlashcardViewer = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (!cards || cards.length === 0) {
    return <p className="text-base-content/70">No flashcards yet.</p>;
  }

  const currentCard = cards[currentIndex];

  const nextCard = () => {
    setFlipped(false);
    setCurrentIndex((prev) =>
      prev === cards.length - 1 ? 0 : prev + 1
    );
  };

  const prevCard = () => {
    setFlipped(false);
    setCurrentIndex((prev) =>
      prev === 0 ? cards.length - 1 : prev - 1
    );
  };

  return (
    <div className="flex flex-col items-center gap-6">

      {/* Flashcard */}
      <div
        onClick={() => setFlipped(!flipped)}
        className="w-full max-w-md h-60 cursor-pointer rounded-2xl shadow-2xl flex flex-col justify-between text-center p-6 
        bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 
        border border-white/40 backdrop-blur-sm
        transition-all duration-200 hover:scale-105 hover:shadow-xl"
      >
        {/* Label */}
        <span className="text-xs uppercase tracking-wide text-gray-500">
          {flipped ? "Answer" : "Question"}
        </span>

        {/* Content */}
        <p className="text-lg font-semibold text-gray-800 leading-relaxed">
          {flipped ? currentCard.answer : currentCard.question}
        </p>

        {/* Hint */}
        <span className="text-xs text-gray-400">
          Click to flip
        </span>
      </div>

      {/* Card position */}
      <p className="text-sm text-base-content/60">
        Card {currentIndex + 1} of {cards.length}
      </p>

      {/* Controls */}
      <div className="flex gap-4">
        <button onClick={prevCard} className="btn btn-outline btn-sm">
          ← Prev
        </button>
        <button onClick={nextCard} className="btn btn-outline btn-sm">
          Next →
        </button>
      </div>

    </div>
  );
};

export default FlashcardViewer;