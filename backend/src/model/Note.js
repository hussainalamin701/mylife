import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    title : {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    folder: { type: mongoose.Schema.Types.ObjectId, ref: "Folder" },
    },
    {timestamps: true}
);

const Note = mongoose.model("note",noteSchema);

export default Note;