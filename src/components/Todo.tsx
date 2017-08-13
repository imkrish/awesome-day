import * as React from 'react'
import { Paper, TextField, FloatingActionButton } from 'material-ui'
import { ITodo } from '../interfaces/ITodo'
import { List, ListItem } from 'material-ui/List'
import { v4 } from 'uuid'
import { ActionNoteAdd } from 'material-ui/svg-icons'
import { IAction } from '../store/interfaces/IAction'

interface ITodoProps {
  todoList: ITodo[]
  addTodo: (todo: ITodo) => IAction
  removeTodo: (todo: ITodo) => IAction
  doneTodo: (todo: ITodo) => IAction
  undoneTodo: (todo: ITodo) => IAction
}

export const Todo = (props: ITodoProps) => {
  let todoTF: TextField | null

  const { todoList, addTodo, doneTodo, undoneTodo } = props

  const renderTodoList = () => {
    return todoList.map(
      todo => (
        <ListItem
          key={todo.id}
          primaryText={todo.task}
          secondaryText={todo.done ? 'Done' : 'Todo'}
          onTouchTap={onSwitchDone.bind(undefined, todo)}
        />
      )
    )
  }

  const onSwitchDone = (todo: ITodo) => {
    if (todo.done) {
      undoneTodo(todo)
    } else {
      doneTodo(todo)
    }
  }

  const onAddTodo = () => {
    if (todoTF) {
      const task = todoTF.getValue()

      if (task.length === 0) {
        alert('Please input a task.')
        return
      }

      const todo: ITodo = {
        id: v4(),
        task,
        done: false
      }
      addTodo(todo)
      todoTF.getInputNode().value = ''
    }
  }

  const onEnterToAddTodo = (event: any) => {
    if (todoTF && event.charCode === 13) {
      onAddTodo()
    }
  }

  return (
    <Paper style={{ padding: 30, marginTop: 40 }}>
      <h2 style={{ fontSize: 20 }}>Todo List</h2>
      <div style={{ marginTop: 10, display: 'flex', alignItems: 'flex-end' }}>
        <TextField
          ref={elem => todoTF = elem}
          floatingLabelText="Add a new task"
          floatingLabelFixed={true}
          onKeyPress={onEnterToAddTodo}
        />
        <div style={{ marginLeft: 15 }}>
          <FloatingActionButton
            mini={true}
            onTouchTap={onAddTodo}
          >
            <ActionNoteAdd />
          </FloatingActionButton>
        </div>
        
      </div>
      {todoList.length > 0 && (
        <List style={{ marginTop: 10 }}>
          {renderTodoList()}
        </List>
      )}
    </Paper>
  )
}