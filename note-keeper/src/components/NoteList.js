import React from 'react';

function NoteList({ notes, deleteNote, setEditingNote }) {
  const handleEditNote = (note) => {
    setEditingNote(note);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div className="note-list">
      {notes.map((note) => (
        <div className="note" key={note.id}>
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
              Edit
            </button>
            <button className="delete-button" onClick={() => deleteNote(note.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
