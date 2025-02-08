import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "messages",
  initialState: {
    conversations: {
      1: [ 
        { from: "student", message: "Hi Alice, can you help me with my career?" },
        { from: "Alice", message: "Sure, feel free to ask!" },
      ],
      2: [ 
        { from: "student", message: "Hi Bob, I need advice for product management." },
        { from: "Bob", message: "I'd be happy to assist!" },
      ],
    },
  },
  reducers: {
    sendMessage: (state, action) => {
      const { alumniId, message } = action.payload;
      state.conversations[alumniId] = [...(state.conversations[alumniId] || []), message];
    },
  },
});

export const { sendMessage } = messageSlice.actions;
export default messageSlice.reducer;
