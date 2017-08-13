import { ITodo } from '../interfaces/ITodo'
import { clone } from 'ramda'

export class TodoUtil {
  static getChangedTodoList = (todoList: ITodo[], changedTodo: ITodo, done: boolean) => {
    const newTodoList = clone(todoList)
    const doneTodo = newTodoList.find(todo => todo.id === changedTodo.id)
    if (doneTodo) {
      doneTodo.done = done
    }
    return newTodoList
  }
}