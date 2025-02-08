// postSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [
    {
      id: Date.now() + 1, // Dummy ID for the first post
      title: 'First Post',
      content: 'This is the first dummy post!',
      images: ['/path-to-image1.jpg'], // Path to your images
      userId: 'user123',
      createdAt: new Date().toISOString(),
    },
    {
      id: Date.now() + 2, // Dummy ID for the second post
      title: 'Second Post',
      content: 'Here comes another post with some images.',
      images: ['/path-to-image2.jpg', '/path-to-image3.jpg'],
      userId: 'user456',
      createdAt: new Date().toISOString(),
    },
  ],
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      const { title, content, images, userId } = action.payload;
      const newPost = {
        id: Date.now(), // Unique ID for the post
        title,
        content,
        images,
        userId,
        createdAt: new Date().toISOString(),
      };
      state.posts.push(newPost);
      localStorage.setItem('posts', JSON.stringify(state.posts)); // Save to local storage
    },
    // You can add more reducers if needed.
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
