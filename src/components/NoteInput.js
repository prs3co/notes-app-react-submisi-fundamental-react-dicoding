import React from "react";
import { PropTypes } from 'prop-types';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value
      }
    })
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value
      }
    })
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="px-10 py-6 flex flex-col justify-center items-center">
        <div className="bg-green-600 h-3 w-[36rem] rounded-t-xl">
          <svg className="rounded-t-xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#16a34a" fillOpacity="1" d="M0,320L120,288C240,256,480,192,720,192C960,192,1200,256,1320,288L1440,320L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
        </div>
        <form className="note-input flex flex-col justify-start items-center p-6 rounded-b-xl w-[36rem] min-h-[28rem] max-h-fit shadow-lg" onSubmit={this.onSubmitEventHandler}>
          <h2 className="font-bold text-3xl mb-14">Tambah Catatan</h2>
          <input type="text" className="block my-3 h-8 w-[32rem] px-5 py-5 rounded-xl shadow-sm focus-visible:shadow-inner" placeholder="Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
          <textarea type="text" className="resize-none block my-3 h-fit w-[32rem] px-5 py-5 rounded-xl shadow-sm focus-visible:shadow-inner" placeholder="Isi" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
          <button className=" bg-green-600 rounded-xl p-2 w-[32rem]  hover:bg-green-700 font-semibold my-6" type="submit">Tambah</button>
        </form>
      </div>
    )
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired
}

export default NoteInput;