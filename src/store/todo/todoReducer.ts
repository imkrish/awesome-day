import { ITodoState } from '../interfaces/ITodoState'
import { lensProp, set } from 'ramda'
import { IAction } from '../interfaces/IAction'
import { ADD_TODO, REMOVE_TODO, TOGGLE_DISPLAY_ALL, TOGGLE_DONE_TODO } from './todoAction'
import { TodoUtil } from '../../utils/TodoUtil'

const initState: ITodoState = {
  todoList: [],
  displayAll: false
}

const todoListLens = lensProp('todoList')
const displayAllLens = lensProp('displayAll')

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

    case TOGGLE_DONE_TODO:
      return set(
        todoListLens,
        TodoUtil.getChangedTodoList(todoList, payload, !payload.done),
        state
      )

    case TOGGLE_DISPLAY_ALL:
      return set(
        displayAllLens,
        !state.displayAll,
        state
      )

    default:
      return state
  }
}