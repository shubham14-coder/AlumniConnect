import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from './postsSlice'; // Import your action to add a post

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch action to add post
    dispatch(addPost({ title, content }));
    // Clear the form fields
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2 className="text-lg font-bold">Create a New Post</h2>
      <div className="mb-2">
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="border p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit Post
      </button>
    </form>
  );
};

export default PostForm;
