import Note from "../model/Note.js"

export async function getAllNotes (_, res) {
    try{
        const notes = await Note.find().sort( { createAt: -1 } );
        res.status(200).json(notes);        
    } catch (error){
        console.error("", error);
        res.status(500).json({ message: "Internal Server error"});
    }
};

export async function getAllNotesById(req, res) {
    try {
        const note = await Note.findById(req.params.id)
        if (!note) return res.status(404).json({ message: "note not found" });
        res.json(note);
    } catch(error) {
        res.status(500).json({ message: "Internal Server error"});
    }
}

export async function createNotes(req, res) {
    try{
        const {title, content} = req.body;
        const newNote = new Note({title, content});

        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error in createNote", error);
        res.status(500).json( { message: "Internal server error" } );
    }
}

export async function updateNotes(req, res) {
    try{
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            { title, content},
            {
                new: true,
            }
        );

        if (!updateNotes) return res.status(404).json({ message: "Not found" });

        res.status(200).json({ message: "Note updated" });
    } catch (error) {
        console.error("Error in updateNotes", error);
        res.status(500).json( { message: "Internal server error" } );
    }
}

export async function deleteNotes(req, res) {
    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if(!deletedNote) return res.status(404).json({ message: "Note not found" });
        res.json({ message: "Note deleted successfully!"})
    } catch (error) {
        res.status(500).json( { message: "Internal server error" } );
    }
}