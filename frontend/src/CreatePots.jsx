import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from './Store/postSlice';


const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(title, content, /* userId */)); // Add userId as needed
    setTitle('');
    setContent('');
  };
 

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Post Content"
        required
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
