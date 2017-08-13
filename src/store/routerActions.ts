import { push } from 'react-router-redux'
import { store } from '../index'

export const sPush = (path: string) => {
  store.dispatch(push(path))
}