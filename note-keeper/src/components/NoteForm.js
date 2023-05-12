import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addNote(title, content);
      setTitle('');
      setContent('');
    }
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        className="note-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        className="note-textarea"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className="note-button">Add Note</button>
    </form>
  );
}

export default NoteForm;
