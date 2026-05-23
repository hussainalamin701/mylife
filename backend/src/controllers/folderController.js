import Folder from "../models/Folder.js";

export const createFolder = async (req, res) => {
  const { name, color } = req.body;

  const folder = await Folder.create({
    user: req.user._id,
    name,
    color,
  });

  res.status(201).json(folder);
};

export const getFolders = async (req, res) => {
  const folders = await Folder.find({ user: req.user._id });
  res.json(folders);
};

export const deleteFolder = async (req, res) => {
  await Folder.findByIdAndDelete(req.params.id);
  res.json({ message: "Folder deleted" });
};