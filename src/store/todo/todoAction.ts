import { ITodo } from '../../interfaces/ITodo'
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const DONE_TODO = 'DONE_TODO'
export const UNDONE_TODO = 'UNDONE_TODO'

export const addTodo = (todo: ITodo) => ({
  type: ADD_TODO,
  payload: todo
})

export const removeTodo = (todo: ITodo) => ({
  type: REMOVE_TODO,
  payload: todo
})

export const doneTodo = (todo: ITodo) => ({
  type: DONE_TODO,
  payload: todo
})

export const undoneTodo = (todo: ITodo) => ({
  type: UNDONE_TODO,
  payload: todo
})