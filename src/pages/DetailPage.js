import React from "react";
import { useParams } from "react-router-dom";
import EditNoteInput from "../components/EditNoteInput";
import { editNote, getNotes } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import NotFoundPage from './NotFoundPage';
import { PropTypes } from 'prop-types';

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  function onEditNoteHandler(note) {
    editNote(note);
    navigate('/')
  }

  return ( 
    <DetailPage id={id} editNote={onEditNoteHandler} />
  )

}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
    }
  }

  render () {
    return (
      <section>
        {
          getNotes(this.state.id) 
            ? <EditNoteInput id={this.state.id} editNote={this.props.editNote} />
            : <NotFoundPage />
        }
      </section>
    )

  }

}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  editNote: PropTypes.func.isRequired
}

export default DetailPageWrapper;