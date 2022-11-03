import React from "react";
import DeleteButton from "./DeleteButton";
import NoteItemContent from './NoteItemContent';
import { PropTypes } from 'prop-types';
import ArchiveButton from './ArchiveButton';
import UnarchiveButton from "./UnarchiveButton";
import showFormattedDate from './../utils/index';

function NoteItem({ id, title, body, createdAt, onDelete, onArchive, onUnarchive }) {
  return (
    <div className="note-item w-full rounded-xl h-64 text-align flex justify-center p-6 shadow-lg">
      <NoteItemContent id={id} title={title} body={body} createdAt={showFormattedDate(createdAt)} />
      <div className="flex-col text-center text-3xl w-12 ml-6">
        <DeleteButton id={id} onDelete={onDelete} />
        {
          onArchive
          ? <ArchiveButton id={id} onArchive={onArchive} />
          : <UnarchiveButton id={id} onUnarchive={onUnarchive} />
        }
      </div>
    </div>
  )
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  onArchive: PropTypes.func,
  onUnarchive: PropTypes.func
}

export default NoteItem;