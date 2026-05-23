import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import FlashcardsPage from "./pages/FlashcardsPage";

const App = () => {
  return (
    <div data-theme="forest">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/note/:id" element={<NoteDetailPage />} />
          <Route path="/flashcards" element={<FlashcardsPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
