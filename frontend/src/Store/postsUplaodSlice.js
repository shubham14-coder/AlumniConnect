import { createSlice, nanoid } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [], // Array to hold all posts
  },
  reducers: {
    addPost: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(), // Generates a unique ID
            title,
            content,
            createdAt: new Date().toISOString(), // Add a timestamp
          },
        };
      },
    },
  },
});

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
