// notificationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notifications",
  initialState: {
    notifications: [
      { id: 1, message: "New job posted by Alice Johnson", type: "job", timestamp: "2024-10-10", read: false },
      { id: 2, message: "Event: Alumni Meetup", type: "event", timestamp: "2024-10-12", read: false },
      { id: 3, message: "You received a comment on your post", type: "comment", timestamp: "2024-10-11", read: false },
      { id: 4, message: "Your purchase has been confirmed", type: "purchase", timestamp: "2024-10-13", read: false },
      { id: 5, message: "Your review was liked by Bob Smith", type: "like", timestamp: "2024-10-12", read: false },
      { id: 6, message: "Job application status updated", type: "job", timestamp: "2024-10-09", read: true },
      // Add more notifications as needed
    ],
  },
  reducers: {
    addNotification: (state, action) => {
      state.notifications.unshift(action.payload); // Add new notifications to the top
    },
    markAsRead: (state, action) => {
      const notification = state.notifications.find((notif) => notif.id === action.payload);
      if (notification) {
        notification.read = true;
      }
    },
    markAllAsRead: (state) => {
      state.notifications.forEach((notif) => {
        notif.read = true;
      });
    },
  },
});

export const { addNotification, markAsRead, markAllAsRead } = notificationSlice.actions;
export default notificationSlice.reducer;
