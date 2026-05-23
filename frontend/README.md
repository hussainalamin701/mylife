# MERN Study System

## Overview
This project is a full-stack web application designed to support effective studying through integrated note-taking and flashcard-based revision.

The system combines traditional note management with active recall techniques, allowing users to create notes and generate flashcards within a single workflow.

---

## Features

- Create, edit, and delete notes
- Store notes using MongoDB
- Generate and review flashcards
- Flip flashcards (question ↔ answer)
- Navigate through flashcards
- Responsive user interface
- REST API integration between frontend and backend

---

## Tech Stack

**Frontend:**
- React (Vite)
- Tailwind CSS / DaisyUI

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB (Atlas)

---

## Project Structure

## How to Run the Project

### 1. Clone the repository
git clone <your-repo-url>
cd MERN-PROJECT

### 2. Setup Backend
cd backend
npm install
npm run dev

### 3. Setup Frontend

cd frontend
npm install
npm run dev

Frontend runs on: http://localhost:5173
Backend runs on: http://localhost:5001

## API Endpoints

### Notes
- `GET /api/notes` – Retrieve all notes
- `POST /api/notes` – Create a note
- `DELETE /api/notes/:id` – Delete a note

### Flashcards
- `GET /api/flashcards` – Retrieve flashcards
- `POST /api/flashcards` – Create a flashcard

---

## Testing

The system was tested using:
- Postman (API testing)
- MongoDB Atlas (data validation)
- Manual UI testing

Testing includes:
- CRUD operations for notes
- Flashcard creation and retrieval
- API validation and error handling

---

## Limitations

- No user authentication
- No spaced repetition algorithm implemented
- Limited scalability testing

---

## Future Improvements

- Add user authentication
- Implement spaced repetition algorithm
- Add performance tracking and analytics
- Improve UI customisation

## Environment Variables

Create a `.env` file in the `/backend` directory with the following:

MONGO_URI=your_mongodb_connection_string
PORT=5001