import {createSlice,nanoid} from '@reduxjs/toolkit'
import { act } from 'react'

const initialState = {
    todos : []
}

export const TodoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo : (state, actions) => {
            
            const todo = {
                
                id : nanoid(),
                todo : actions.payload,
                completed : false
            }
            
            state.todos.push(todo)
        },

        removeTodo : (state,actions) => {
           
            state.todos = state.todos.filter((item) => item.id !== actions.payload)
        },

        updateTodo : (state,actions) => {
            state.todos = state.todos.filter((item) => (item.id === actions.payload.id ? actions.payload  : item))
        },

        completedTodo : (state,actions) => {
         
            
            state.todos = state.todos.map((item) => (item.id === actions.payload ? {...item,completed : !item.completed} : item))
        }
    }
})

export const {addTodo,removeTodo,updateTodo,completedTodo} = TodoSlice.actions

export default TodoSlice.reducer