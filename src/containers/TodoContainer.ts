import { connect } from 'react-redux'
import { Todo } from '../components/Todo'
import { addTodo, removeTodo, toggleDoneTodo, toggleDisplayAll } from '../store/todo/todoAction'
import { IRootState } from '../store/interfaces/IRootState'

export const TodoContainer = connect(
  (state: IRootState) => ({
    todoList: state.todo.todoList,
    displayAll: state.todo.displayAll
  }),
  { addTodo, removeTodo, toggleDoneTodo, toggleDisplayAll }
)(Todo)