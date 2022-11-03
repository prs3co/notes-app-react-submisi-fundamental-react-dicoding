import React from "react";
import { PropTypes } from 'prop-types';
import { VscTrash } from 'react-icons/vsc'

function DeleteButton({ id, onDelete }) {
  return <button 
    className="note-item__delete w-6 h-1/2 shadow-md hover:bg-red-600 p-2 rounded-t-xl bg-red-500"

    onClick={() => onDelete(id)}>
      <VscTrash />
  </button>
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default DeleteButton;