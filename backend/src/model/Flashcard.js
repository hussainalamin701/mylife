import mongoose from "mongoose";

const flashcardSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Flashcard = mongoose.model("Flashcard", flashcardSchema);

export default Flashcard;


