import express from "express";
import Flashcard from "../model/Flashcard.js";

const router = express.Router();

// GET all flashcards
router.get("/", async (req, res) => {
  try {
    const cards = await Flashcard.find().sort({ createdAt: -1 });
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: "Error fetching flashcards" });
  }
});

// CREATE flashcard
router.post("/", async (req, res) => {
  try {
    const { question, answer } = req.body;

    if (!question || !answer) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const newCard = new Flashcard({ question, answer });
    await newCard.save();

    res.status(201).json(newCard);
  } catch (err) {
    res.status(500).json({ message: "Error creating flashcard" });
  }
});

export default router;