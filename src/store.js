import todoreducer from './redux/reducer'
import {combineReducers,createStore} from 'redux'

const store=createStore(combineReducers({todoreducer}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store