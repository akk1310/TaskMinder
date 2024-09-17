import { createSlice ,nanoid } from "@reduxjs/toolkit";

const initialState = {
    // todos:[{id:1,text:"Todo Message..",completed:false}]
    todos:JSON.parse(localStorage.getItem('todos')) || [{ id: 1, text: "todo Msg",completed:false,date:'date' }]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const d = new Date();
            const day = d.getDate(); // Gets the day of the month (1-31)
            const month = d.getMonth() + 1; // Gets the month (0-11), so add 1 to get (1-12)
            const year = d.getFullYear(); // Gets the four-digit year
            const formattedDate = `${day}/${month}/${year}`;
            const todo={
                id:nanoid(),
                text:action.payload,
                completed:false,
                date:formattedDate
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        editTodo:(state,action)=>{
            // editId=action.payload.id
            const {id,text}= action.payload
            const existingTodo=state.todos.find((todo)=>todo.id===id)
            if(existingTodo){
                existingTodo.text=text
            }
            // state.todos = state.todos.map((todo)=>todo.id === editId ? editText : text )
        },
        toggleComplete:(state,action)=>{
            const id = action.payload
            const existingTodo=state.todos.find((todo)=>todo.id===id)
            if(existingTodo){
                existingTodo.completed = !existingTodo.completed
            }
            // state.todos = state.todos.map((todo)=>todo.id === action.payload ?{ ...todo,completed:!todo.completed }:todo )
            
        },

    }

})

export const {addTodo,removeTodo,editTodo,toggleComplete} = todoSlice.actions

export default todoSlice.reducer
