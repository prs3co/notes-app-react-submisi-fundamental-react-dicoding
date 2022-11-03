import React from "react";
import { PropTypes } from 'prop-types';
import NoteItem from './NoteItem'

function ArchivedNoteList({ notes, onDelete, onUnarchive }) {
  return (
    <div className="note-list py-6 grid grid-cols-2 gap-8 place-items-center ">
      {
        notes.length !== 0 ? (
          notes.map((note) => {
            if (note.archived) {
              return (
                <NoteItem
                key={note.id}
                id={note.id}
                onDelete={onDelete}
                onUnarchive={onUnarchive}
                {...note} />
              );
            }
            return null;
          })
        ) : (
          <div className="empty-note-placeholder flex justify-center bg-gray-400 shadow-md rounded-xl w-full p-4 col-span-3">
            <p className="font-semibold text-center text-xl">Daftar Catatan Kosong</p>
          </div>
        )
      }
    </div>
  )
}

ArchivedNoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func
}

export default ArchivedNoteList;