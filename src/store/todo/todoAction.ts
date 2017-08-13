import { ITodo } from '../../interfaces/ITodo'
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_DONE_TODO = 'TOGGLE_DONE_TODO'
export const TOGGLE_DISPLAY_ALL = 'TOGGLE_DISPLAY_ALL'

export const addTodo = (todo: ITodo) => ({
  type: ADD_TODO,
  payload: todo
})

export const removeTodo = (todo: ITodo) => ({
  type: REMOVE_TODO,
  payload: todo
})

export const toggleDoneTodo = (todo: ITodo) => ({
  type: TOGGLE_DONE_TODO,
  payload: todo
})

export const toggleDisplayAll = () => ({
  type: TOGGLE_DISPLAY_ALL
})