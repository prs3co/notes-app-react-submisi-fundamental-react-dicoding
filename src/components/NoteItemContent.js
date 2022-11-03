import React from "react";
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';

function NoteItemContent({id, title, body, createdAt}) {
  return (
    <div className="w-full h-full relative">
      <h3 className="note-item__title text-2xl font-semibold"><Link className="link-detail" to={`/notes/${id}`} >{title}</Link></h3>
      <div className="note-item__body h-36 w-full mt-2 text-ellipsis overflow-hidden">{parser(body)}</div>
      <div className="h-max absolute bottom-0 left-0">
        <p className="note-item__date font-normal text-sm">{createdAt}</p>
      </div>
    </div>
  )
}

NoteItemContent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
}

export default NoteItemContent;