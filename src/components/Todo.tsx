import * as React from 'react'
import { Paper, TextField, FloatingActionButton, Divider, Toggle } from 'material-ui'
import { ITodo } from '../interfaces/ITodo'
import { ListItem } from 'material-ui/List'
import { v4 } from 'uuid'
import { ActionNoteAdd } from 'material-ui/svg-icons'
import { IAction } from '../store/interfaces/IAction'
import { primaryColor } from '../index'

interface ITodoProps {
  todoList: ITodo[]
  displayAll: boolean
  addTodo: (todo: ITodo) => IAction
  removeTodo: (todo: ITodo) => IAction
  toggleDoneTodo: (todo: ITodo) => IAction
  toggleDisplayAll: () => IAction
}

export const Todo = (props: ITodoProps) => {
  let todoTF: TextField | null

  const { todoList, addTodo, toggleDoneTodo, toggleDisplayAll, displayAll } = props

  const renderTodoList = () => {
    return todoList
      .filter(todo => displayAll || !todo.done)
      .map(
        todo => (
          <div key={todo.id}>
            <ListItem
              primaryText={todo.task}
              secondaryText={todo.done ? 'Done' : 'Todo'}
              onTouchTap={onSwitchDone.bind(undefined, todo)}
            />
            <Divider />
          </div> 
        )
    )
  }

  const onSwitchDone = (todo: ITodo) => {
    toggleDoneTodo(todo)
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
      <div style={{ maxWidth: 150, marginTop: 20 }}>
        <Toggle
          label="Display All"
          labelStyle={{ color: primaryColor }}
          defaultToggled={false}
          onToggle={toggleDisplayAll}
        />
      </div>
      {todoList.length > 0 && (
        <Paper zDepth={1} style={{ marginTop: 20 }}>
          {renderTodoList()}
        </Paper>
      )}
    </Paper>
  )
}