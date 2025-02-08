import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [], // Array to hold all signed-in users
  currentUser: null, // To store the currently authenticated user
  authError: null, // To store any authentication errors
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addNewUser: (state, action) => {
      state.users.push(action.payload);
      console.log('Users array:', JSON.parse(JSON.stringify(state.users))); // Logs users array
    },
    removeUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      const { id, newDetails } = action.payload;
      const userIndex = state.users.findIndex(user => user.id === id);
      if (userIndex !== -1) {
        state.users[userIndex] = { ...state.users[userIndex], ...newDetails };
      }
    },
    authenticateUser: (state, action) => {
      const { email, password } = action.payload;

      // Find the user in the array
      const user = state.users.find(user => user.email === email && user.password === password);

      if (user) {
        state.currentUser = user; // Set the current authenticated user
        state.authError = null; // Clear any previous error
        console.log('Authenticated user:', JSON.stringify(user));
        // Logs authenticated user
      } else {
        state.currentUser = null; // Clear current user
        state.authError = 'Invalid email or password'; // Set error message
      }
    },
  },
});

// Export the actions
export const { addNewUser, removeUser, updateUser, authenticateUser } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
