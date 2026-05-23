import { useEffect, useState } from "react";
import FlashcardForm from "../components/flashcards/FlashcardForm";
import FlashcardViewer from "../components/flashcards/FlashcardViewer";
import Sidebar from "../components/Sidebar";

const FlashcardsPage = () => {
  const [cards, setCards] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchCards = async () => {
    try {
      const res = await fetch("http://localhost:5001/api/flashcards");
      const data = await res.json();
      setCards(data);
    } catch (err) {
      console.error("Failed to load flashcards", err);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="min-h-screen bg-base-200">
      
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-6 left-6 z-30 btn btn-primary"
        >
          ☰
        </button>
      )}

      <div className="max-w-4xl mx-auto p-6 pt-20 space-y-8">

        
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title">Create Flashcard</h2>

            <FlashcardForm
              onCreate={(newCard) => {
                setCards((prev) => [newCard, ...prev]);
              }}
              refreshCards={fetchCards}
            />
          </div>
        </div>

        
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title">Review Flashcards</h2>

            <FlashcardViewer cards={cards} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default FlashcardsPage;