import { useState } from "react";

const FlashcardForm = ({ onCreate, refreshCards }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!question || !answer) return;
  
    try {
      const res = await fetch("http://localhost:5001/api/flashcards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question, answer }),
      });
  
      if (!res.ok) {
        throw new Error("Request failed");
      }
  
      const data = await res.json();
      console.log("Saved:", data);
  
      // only update if valid
      if (data && data._id) {
        onCreate(data);
        if (refreshCards) refreshCards();
      } else {
        console.error("Invalid response:", data);
      }
  
      setQuestion("");
      setAnswer("");
    } catch (err) {
      console.error("POST ERROR:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">

      <input
        type="text"
        placeholder="Question"
        className="input input-bordered w-full"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <input
        type="text"
        placeholder="Answer"
        className="input input-bordered w-full"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button className="btn btn-primary w-full">
        Add Flashcard
      </button>

    </form>
  );
};

export default FlashcardForm;