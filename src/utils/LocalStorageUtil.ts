import * as R from 'ramda'
import { IRootState } from '../store/interfaces/IRootState'
export class LocalStorageUtil {

  static loadState = () => {
    try {
      const serializedState = localStorage.getItem('state')
      if (serializedState === null) {
        return undefined
      }
      return JSON.parse(serializedState)
    } catch (err) {
      return undefined
    }
  }

  static saveState = (state: IRootState) => {
    try {
      const serializedState = JSON.stringify(state)
      localStorage.setItem('state', serializedState)
    } catch (err) {
        // Ignore write errors.
    }
  }

  static removeState = () => {
    try {
      localStorage.removeItem('state')
    } catch (err) {
        // Ignore write errors.
    }
  }

  static getStateToSave = (state: IRootState) => {
    const persistedState: IRootState = R.clone(state)
    const saveState: any = {
      todo: persistedState.todo,
    }
    return saveState
  }
}
