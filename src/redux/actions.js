import React from 'react'
import {ADD_TODO,DELETE_TODO, EDIT_TODO,UPDATE_TODO} from './types'

export const addtodo=(newtodo)=>{
    return (
    {
        type: ADD_TODO,
        payload: newtodo
    }
    )
}


export const deletetodo=(id)=>{
    return (
    {
        type: DELETE_TODO,
        payload: id
    }
    )
}

export const editetodo=(id)=>{
    return (
    {
        type: EDIT_TODO,
        payload: id
    }
    )
}

export const updatetodo=(newtodo)=>{
    return (
    {
        type: UPDATE_TODO,
        payload: newtodo
    }
    )
}