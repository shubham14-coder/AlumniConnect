import {createSlice} from "@reduxjs/toolkit"
const alumniSlice=createSlice({
    name:"alumni",
    initialState:{
        alumniList:[
            
                { id: 1, name: "Alice Johnson", college: "Harvard", position: "Software Engineer", company: "Google", location: "California", branch: "Computer Science", graduationYear: 2020 },
                { id: 2, name: "Bob Smith", college: "MIT", position: "Product Manager", company: "Facebook", location: "New York", branch: "Business", graduationYear: 2021 },
                { id: 3, name: "Charlie Brown", college: "Stanford", position: "Data Scientist", company: "Netflix", location: "California", branch: "Statistics", graduationYear: 2022 },
                // Add more alumni as needed
              
              
        ]
    },
    reducers:{
        addAlumnus:(state,action)=>
        {
            state.alumniList.push(action.payload)
        }
    }
});
export const {addAlumnus}= alumniSlice.actions;
export default alumniSlice.reducer;