import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import api from "../lib/axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

      <Navbar />

      {isRateLimited && <RateLimitedUI />}

      <div className="max-w-6xl mx-auto px-4 pt-24 pb-10">

        
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search notes..."
            className="input input-bordered w-full max-w-sm text-center shadow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            Your Notes
          </h2>
          <span className="text-sm text-base-content/60">
            {filteredNotes.length} notes
          </span>
        </div>

        
        <div className="bg-base-100 rounded-2xl p-6 shadow">

          {loading && (
            <div className="text-center py-10 text-primary">
              Loading...
            </div>
          )}

          {!loading && filteredNotes.length === 0 && (
            <div className="text-center py-16">
              <p className="text-base-content/70">
                No notes found
              </p>
            </div>
          )}

          {filteredNotes.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredNotes.map((note) => (
                <NoteCard
                  key={note._id}
                  note={note}
                  setNotes={setNotes}
                />
              ))}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default HomePage;