import React from "react";
import { PropTypes } from "prop-types";
import { VscSearch } from 'react-icons/vsc'

function SearchBar({ keyword, keywordChange }) {
  return (<div className="py-6 mx-auto w-full text-center">
    <VscSearch className="absolute inline-block mt-3 ml-3" />
    <input type="text" className="w-80 h-8 px-10 py-5 rounded-xl shadow-sm focus-visible:shadow-inner" placeholder="Cari judul" value={keyword} onChange={(event) => {
      keywordChange(event.target.value);
    }} />
  </div>
  )
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired
}

export default SearchBar;