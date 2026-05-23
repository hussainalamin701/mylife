const Flashcard = ({ card, showAnswer }) => {
    return (
      <div className="text-center space-y-4">
        <div className="text-xl font-medium">
          {card.front}
        </div>
  
        {showAnswer && (
          <div className="text-green-600 font-semibold">
            {card.back}
          </div>
        )}
      </div>
    );
  };
  
  export default Flashcard;