import Flashcard from "../models/Flashcard.js";

export const createFlashcard = async (req, res) => {
  try {
    const { front, back } = req.body;

    const flashcard = await Flashcard.create({
      user: req.user._id,
      front,
      back,
    });

    res.status(201).json(flashcard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFlashcards = async (req, res) => {
  const cards = await Flashcard.find({ user: req.user._id });
  res.json(cards);
};

export const deleteFlashcard = async (req, res) => {
  await Flashcard.findByIdAndDelete(req.params.id);
  res.json({ message: "Flashcard deleted" });
};
