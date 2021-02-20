import {combineReducers} from 'redux'
import todoReducer from './Todos';

const rootReducer=combineReducers({
    todos:todoReducer,
})

export default rootReducer