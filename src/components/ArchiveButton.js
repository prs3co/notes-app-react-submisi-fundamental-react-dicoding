import React from "react";
import { PropTypes } from 'prop-types';
import { VscArchive } from "react-icons/vsc"

function ArchiveButton({ id, onArchive }) {
  return <button
      className="note-item__archive h-1/2 shadow-md hover:bg-yellow-500 p-2 rounded-b-xl bg-yellow-400"
      onClick={()=> onArchive(id)}>
      <VscArchive />
    </button>;
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
}

export default ArchiveButton;