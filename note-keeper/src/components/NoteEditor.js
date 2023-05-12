import React, { useState } from 'react';

function NoteEditor({ note, updateNote, cancelEdit }) {
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setEditedContent(e.target.value);
  };

  const saveNote = () => {
    updateNote(note.id, editedTitle, editedContent);
  };

  return (
    <div className="note-editor">
      <input
        type="text"
        value={editedTitle}
        onChange={handleTitleChange}
        className="note-input"
      />
      <textarea
        value={editedContent}
        onChange={handleContentChange}
        className="note-textarea"
      ></textarea>
      <div className="buttons">
        <button className="cancel-button" onClick={cancelEdit}>
          Cancel
        </button>
        <button className="save-button" onClick={saveNote}>
          Save
        </button>
      </div>
    </div>
  );
}

export default NoteEditor;
