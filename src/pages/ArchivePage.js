import React from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes, deleteNote, unarchiveNote } from "../utils/local-data";
import ArchivedNoteList from './../components/ArchivedNoteList';
import { PropTypes } from 'prop-types'

function ArchivePageWrapper() {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const keyword = searchParams.get('keyword')
  function changeSearchParams(keyword) {
    setSearchParams({keyword});
  }

  return <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class ArchivePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || ''
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        notes: getArchivedNotes(),
      }
    });
  }

  onUnarchiveHandler(id) {
    unarchiveNote(id);

    this.setState(() => {
      return {
        notes: getArchivedNotes(),
      }
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      }
    })
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.keyword.toLowerCase()
      )
    })
    return (
      <section className="px-10">
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
        <h2 className="text-3xl font-bold drop-shadow-sm">Daftar Arsip</h2>
        <ArchivedNoteList notes={notes} onDelete={this.onDeleteHandler} onUnarchive={this.onUnarchiveHandler} />
      </section>
    )
  }
}

ArchivePage.propTypes = {
  defaultKeyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired
}

export default ArchivePageWrapper;