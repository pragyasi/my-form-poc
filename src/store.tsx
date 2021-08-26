import {createStore} from 'redux'
import reducer from './reducers/reducerMain.js'

export const store = createStore(reducer);