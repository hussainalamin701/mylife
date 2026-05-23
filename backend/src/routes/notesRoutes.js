import express from "express"
import { createNotes, deleteNotes, getAllNotes, updateNotes, getAllNotesById } from "../controllers/noteController.js"

const router = express.Router();

//REST API features implemented and MongoDB connected
router.get("/",getAllNotes);
router.get("/:id", getAllNotesById);
router.post("/", createNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);

export default router;