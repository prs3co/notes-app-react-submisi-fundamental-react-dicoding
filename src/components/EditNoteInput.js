import React from "react";
import { PropTypes } from 'prop-types';
import { getNotes } from "../utils/local-data";
import parser from 'html-react-parser';
import showFormattedDate from './../utils/index';

class EditNoteInput extends React.Component {
  constructor(props) {
    super(props);
    const thisNote = getNotes(props.id);

    this.state = {
      id: props.id,
      title: thisNote.title,
      titleActual: thisNote.title,
      createdAt: thisNote.createdAt,
      body: thisNote.body,
      bodyActual: thisNote.body
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.innerHTML ? parser(event.target.innerHTML) : this.state.titleActual
      }
    })
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML ? parser(event.target.innerHTML) : this.state.bodyActual
      }
    })
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.editNote(this.state)
  }

  render() {
    return (
      <div className="note-detail px-10 py-6 flex flex-col justify-center items-center">
        <div className="bg-green-600 h-3 w-[36rem] rounded-t-xl">
          <svg className="rounded-t-xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#16a34a" fillOpacity="1" d="M0,320L120,288C240,256,480,192,720,192C960,192,1200,256,1320,288L1440,320L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
        </div>
        <div className="note-input flex flex-col justify-start items-center p-6 rounded-b-xl w-[36rem] min-h-[28rem] max-h-fit shadow-lg">
          <h2 className="font-bold text-3xl mb-8">Ubah Catatan</h2>
          <div className="note-detail__date" >{showFormattedDate(this.state.createdAt)}</div>
          <div className="note-detail__input-title my-3 h-fit w-[32rem] px-5 py-5 rounded-xl bg-white shadow-md focus-visible:shadow-inner" placeholder={`(judul) ${this.state.title}`} onInput={this.onTitleChangeEventHandler} contentEditable ></div>
          <div className="note-detail__input-body h-fit my-3 w-[32rem] px-5 py-5 rounded-xl bg-white shadow-md focus-visible:shadow-inner" placeholder={`(isi) ${this.state.body}`} onInput={this.onBodyChangeEventHandler} contentEditable ></div>
          <button className="bg-green-600 rounded-xl p-2 w-[32rem]  hover:bg-green-700 font-semibold my-6" onClick={this.onSubmitEventHandler}>Save</button>
        </div>
      </div>
    )
  }
}

EditNoteInput.propTypes = {
  id: PropTypes.string.isRequired,
  editNote: PropTypes.func.isRequired
}

export default EditNoteInput;
