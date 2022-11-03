import React from "react";
import { Link } from "react-router-dom";
import { VscAdd, VscHome, VscArchive } from 'react-icons/vsc';
function Navigation() {
  return (
    <nav className="navigation relative px-10 py-4 flex justify-between shadow">
      <h1 className="navbar-text text-4xl font-extrabold drop-shadow"><span className="green-text">Green</span>ote</h1>
      <ul className="flex items-center text-3xl center text-center">
        <li className="ml-8 h-12 w-12 shadow-md rounded-xl hover:shadow-inner"><Link className="w-full h-full flex items-center justify-center  " to={'/'}><VscHome /></Link></li>
        <li className="ml-8 h-12 w-12 shadow-md rounded-xl hover:shadow-inner"><Link className="w-full h-full flex items-center justify-center  " to={'/notes/new'}><VscAdd /></Link></li>
        <li className="ml-8 h-12 w-12 shadow-md rounded-xl hover:shadow-inner"><Link className="w-full h-full flex items-center justify-center  " to={'/notes/archive'}><VscArchive /></Link></li>
      </ul>
    </nav>
  )
}

export default Navigation;