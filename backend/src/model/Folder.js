import mongoose from "mongoose";

const folderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#3B82F6",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Folder", folderSchema);