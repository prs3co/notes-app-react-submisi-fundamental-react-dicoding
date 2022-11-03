import React from "react";
import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import Navigation from "./components/Navigation";
import ArchivePage from "./pages/ArchivePage";
import DetailPage from './pages/DetailPage';
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="note-app">
      <header className="note-app__header">
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/new" element={<AddPage />}/>
          <Route path="/notes/archive" element={<ArchivePage />}/>
          <Route path="/notes/:id" element={<DetailPage />}/>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;