import { connect } from 'react-redux'
import { Todo } from '../components/Todo'
import { addTodo, removeTodo, doneTodo, undoneTodo } from '../store/todo/todoAction'
import { IRootState } from '../store/interfaces/IRootState'

export const TodoContainer = connect(
  (state: IRootState) => ({
    todoList: state.todo.todoList
  }),
  { addTodo, removeTodo, doneTodo, undoneTodo }
)(Todo)