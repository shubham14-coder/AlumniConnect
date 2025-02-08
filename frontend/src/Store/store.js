import {configureStore} from "@reduxjs/toolkit";
import alumniReducer from "./alumniSlice";
import jobReducer from "./jobSlice";
import notificationReducer from  "./notifications";
import messageReducer from  "./messageSlice";
import userReducer from "./userSlice"
import recentChatsReducer from "./recentChatSlice"; 
import postReducer from "./postSlice";

export const store= configureStore({
reducer:{
    alumni:alumniReducer,
    jobs:jobReducer,
    notifications:notificationReducer,
    message:messageReducer,
    user: userReducer,
    recentChats: recentChatsReducer,
    posts: postReducer,

 
}
})