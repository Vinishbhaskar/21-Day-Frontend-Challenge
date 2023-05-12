import React from 'react';
import {FaEdit, FaTrashAlt} from "react-icons/fa";


function NoteList({ notes, deleteNote, setEditingNote }) {
  const handleEditNote = (note) => {
    setEditingNote(note);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const getRandomColor = () => {
    const colors = ['#8db5e1', '#ffb6c1', '#f2e593', '#b7e2b2'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div className="note-list">
      {notes.map((note) => (
        <div className="note" key={note.id} style={{ backgroundColor: getRandomColor() }}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <p className="note-date">
            {note.updatedAt ? (
              `Last Updated: ${formatDate(note.updatedAt)}`
            ) : (
              `Created At: ${formatDate(note.createdAt)}`
            )}
          </p>
          <div className="note-buttons">
            <button className="edit-button" onClick={() => handleEditNote(note)}>
              Edit <FaEdit className='icon'/>
            </button>
            <button className="delete-button" onClick={() => deleteNote(note.id)}>
              Delete <FaTrashAlt className='icon'/>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
