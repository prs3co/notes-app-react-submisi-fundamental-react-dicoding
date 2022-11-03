import React from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { getActiveNotes, deleteNote, archiveNote } from "../utils/local-data";
import NoteList from './../components/NoteList';
import { PropTypes } from 'prop-types';

function HomePageWrapper() {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const keyword = searchParams.get('keyword')
  function changeSearchParams(keyword) {
    setSearchParams({keyword});
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || ''
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        notes: getActiveNotes(),
      }
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      }
    })
    this.props.keywordChange(keyword);
  }

  onArchiveHandler(id) {
    archiveNote(id);

    this.setState(() => {
      return {
        notes: getActiveNotes(),
      }
    });
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    })
    return (
      <section className="px-10">
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
        <h2 className="text-3xl font-bold drop-shadow-sm">Daftar Catatan</h2>
        <NoteList notes={notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
      </section>
    )
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired
}

export default HomePageWrapper;