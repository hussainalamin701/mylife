import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault();

    if (!window.confirm("Delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((n) => n._id !== id));
      toast.success("Note deleted");
    } catch (error) {
      console.log("Delete error", error);
      toast.error("Failed to delete note");
    }
  };

  return (
    <Link
      to={`/note/${note._id}`}
      className="bg-base-100 rounded-2xl p-5 shadow-sm hover:shadow-xl 
      transition-all duration-200 flex flex-col justify-between h-48 border border-base-300"
    >
      {/* Top section */}
      <div>
        <h3 className="font-semibold text-base-content truncate">
          {note.title}
        </h3>

        <p className="text-sm text-base-content/70 mt-2 line-clamp-3">
          {note.content}
        </p>
      </div>

      {/* Bottom section */}
      <div className="flex justify-between items-center mt-4">

        <span className="text-xs text-base-content/50">
          {formatDate(new Date(note.createdAt))}
        </span>

        <div className="flex items-center gap-2">
          <PenSquareIcon className="size-4 text-base-content/60" />

          <button
            className="text-error hover:text-red-600"
            onClick={(e) => handleDelete(e, note._id)}
          >
            <Trash2Icon className="size-4" />
          </button>
        </div>

      </div>
    </Link>
  );
};

export default NoteCard;