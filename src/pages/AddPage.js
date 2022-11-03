import React from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";
import NoteInput from './../components/NoteInput';

function AddPage() {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNote(note);
    navigate('/')
  }

  return (
    <section>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  )
}

export default AddPage;