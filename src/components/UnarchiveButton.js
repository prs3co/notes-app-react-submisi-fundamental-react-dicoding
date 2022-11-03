import React from "react";
import { PropTypes } from 'prop-types';
import { VscDiscard } from "react-icons/vsc"

function UnarchiveButton({ id, onUnarchive }) {
  return <button
      className="note-item__archive w-6 h-1/2 shadow-md hover:bg-blue-600 p-2 rounded-b-xl bg-blue-500"
      onClick={()=> onUnarchive(id)}>
      <VscDiscard />
    </button>;
}

UnarchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onUnarchive: PropTypes.func.isRequired,
}

export default UnarchiveButton;