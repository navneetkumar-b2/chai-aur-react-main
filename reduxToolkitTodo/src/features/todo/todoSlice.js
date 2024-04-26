import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "hello world"}]  //agar hum local storage ke sath isko bnaye to use effect kr k phle text lena but it is not a jsx we cant use that 
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState, //initial variables
    reducers: {  //reducers are key functions
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer