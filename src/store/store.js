// import  createStore  from 'redux';

// const initalState = {
//     students: [],
// }

// const reducer = (state = initalState, action) => {
//     switch (action.type) {
//         case "ADD_STUDENT":
//             return {...state, students: [...state.students, action.payload]}

//             case "UPDATE_STUDENT":
//             return {...state, students: state.students.map((student, index) => 
//              index === action.payload.index ? action.payload.student : student )}
//                 default:
//                     return state;
//             }
// };

// const store = createStore(reducer)
// export default store;

import { configureStore, createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
    name: 'students',
    initialState: [],
    reducers: {
        addStudent: (state, action) => {
            state.push(action.payload)
        },
        updateStudent: (state, action) => {
            const {index, student} = action.payload;
            state[index] = student;
        }
    }
})

export const {addStudent, updateStudent} = studentSlice.actions;

const store = configureStore({
    reducer: {
        students: studentSlice.reducer
    }
})

export default store;