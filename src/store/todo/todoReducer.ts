import { ITodoState } from '../interfaces/ITodoState'
import { lensProp, set } from 'ramda'
import { IAction } from '../interfaces/IAction'
import { ADD_TODO, DONE_TODO, REMOVE_TODO, UNDONE_TODO } from './todoAction'
import { TodoUtil } from '../../utils/TodoUtil'

const initState: ITodoState = {
  todoList: []
}

export const todoListLens = lensProp('todoList')

export const todoReducer = (state = initState, action: IAction) => {
  const { type, payload } = action
  const { todoList } = state
  switch (type) {
    case ADD_TODO:
      return set(
        todoListLens,
        todoList.concat(payload),
        state
      )

    case REMOVE_TODO:
      return set(
        todoListLens,
        todoList.filter(todo => todo.id !== payload.id)
      )

    case DONE_TODO:
      return set(
        todoListLens,
        TodoUtil.getChangedTodoList(todoList, payload, true),
        state
      )

    case UNDONE_TODO:
      return set(
        todoListLens,
        TodoUtil.getChangedTodoList(todoList, payload, false),
        state
      )

    default:
      return state
  }
}