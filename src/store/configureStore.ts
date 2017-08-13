import { createStore, applyMiddleware, Store } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'react-router-redux'
import { IRootState } from './interfaces/IRootState'
import { History } from 'history'
import { rootEpic } from './rootEpic'
import { rootReducer } from './rootReducer'
import { v4 } from 'uuid'

export const configureStore = (history: History) => {

  // Config router middleware
  const routerMiddleWare = routerMiddleware(history)
  
  // Config epic middleware
  const epicMiddleWare = createEpicMiddleware(rootEpic)
  
  const store = createStore(
    rootReducer,
    {
      todo: {
        todoList: [
          {
            id: v4(),
            task: 'Hello world',
            done: true
          }
        ]
      }
    },
    composeWithDevTools(
      applyMiddleware(
        routerMiddleWare,
        epicMiddleWare
      )
    )
  )

  return <Store<IRootState>> store
}