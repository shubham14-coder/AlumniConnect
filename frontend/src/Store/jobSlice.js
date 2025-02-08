import {createSlice} from "@reduxjs/toolkit"
const jobSlice=createSlice({
    name:"jobs",
    initialState:
    {
        jobList: [
            { id: 1, title: "Frontend Developer", company: "Google", location: "California", alumniId: 1, Requirement: "Proficient in Python, JavaScript" },
            { id: 2, title: "Product Manager", company: "Facebook", location: "New York", alumniId: 2, Requirement: "SQL, Excel, Tableau" },
            { id: 3, title: "Marketing Manager", company: "Market Guru", location: "Delhi", alumniId: 3, Requirement: "Digital Marketing, SEO" },
            // Adding 3 more jobs with Indian cities
            { id: 4, title: "Backend Developer", company: "Amazon", location: "Bangalore", alumniId: 4, Requirement: "Node.js, Express, MongoDB" },
            { id: 5, title: "UI/UX Designer", company: "Adobe", location: "Mumbai", alumniId: 5, Requirement: "Figma, Sketch, Adobe XD" },
            { id: 6, title: "Data Scientist", company: "TCS", location: "Hyderabad", alumniId: 6, Requirement: "Python, Machine Learning, R" }
          ],
    },
    reducers:{
        addJobs:(state,action)=>
        {
            state.jobList.push(action.payload);
        }
    }
})
export const {addJob}=jobSlice.actions;
export default jobSlice.reducer;