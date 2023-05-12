import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NoteForm({ addNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addNote(title, content);
      setTitle('');
      setContent('');
    } else if (!title && !content) {
      // Show a warning toast notification for both fields being blank
      toast.warn('Title and content are required.');
    } else if (!title) {
      // Show a warning toast notification for the title field being blank
      toast.warn('Title is required.');
    } else {
      // Show a warning toast notification for the content field being blank
      toast.warn('Content is required.');
    }
  };

  return (
    <div>
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
        <button type="submit" className="note-button-add">Add Note</button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}

export default NoteForm;
