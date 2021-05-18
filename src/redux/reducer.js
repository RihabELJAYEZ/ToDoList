import React from 'react'
import {uuid} from 'uuidv4'
import {ADD_TODO,DELETE_TODO,EDIT_TODO,UPDATE_TODO} from './types'
const data={
    todoList:[
        {
            id:uuid(),
            title:"breakfast",
            discription:"breakfast with friends 10 AM",
            isEdited:false
        },
        {
            id:uuid(),
            title:"online meeting",
            discription:"online workshop GMC 11 AM",
            isEdited:false
        }
    ],
}

const todoreducer = (state=data, action) => {
    switch (action.type) {
        case ADD_TODO:
            
            return{...state,todoList:[...state.todoList,action.payload]};
        case DELETE_TODO:
            
            return{...state,todoList:state.todoList.filter(todo=>todo.id!==action.payload)};
        case EDIT_TODO:
            
            return{...state,todoList:state.todoList.map(todo=>todo.id===action.payload ? {...todo,isEdited:!todo.isEdited}:todo)};
        case UPDATE_TODO:
                return{...state,todoList:state.todoList.map(todo=>todo.id===action.payload.id?action.payload:todo)};
        default:
            return state;
    }
}

export default todoreducer
