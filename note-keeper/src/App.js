import React, { useState, useEffect } from 'react';
import {FaRegStickyNote} from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';

import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';

function App(){
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingNote, setEditingNote] = useState(null);

  const addNote = (title, content) => {
    const newNote = {
      id: uuidv4(), // Generate a unique ID for the note
      title,
      content,
      createdAt: new Date().toISOString(),
      updatedAt: null,
    };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };
  

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };
  
  const updateNote = (id, title, content) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          title,
          content,
          updatedAt: new Date().toISOString(),
        };
      }
      return note;
    });
    setNotes(updatedNotes);
    setEditingNote(null);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const cancelEdit = () => {
    setEditingNote(null);
  };

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Notes Keeping App <FaRegStickyNote className='icon'/></h1>
      {editingNote ? (
        <NoteEditor
          note={editingNote}
          updateNote={updateNote}
          cancelEdit={cancelEdit}
        />
      ) : (
        <NoteForm addNote={addNote} />
      )}
      <div className='search-input-container'><input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      </div>
      <NoteList notes={filteredNotes} deleteNote={deleteNote} setEditingNote={setEditingNote} />
    </div>
  );
};

export default App;
