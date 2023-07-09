import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import contactsReducer from './reducer'


const rootReducer = combineReducers({
contacts: contactsReducer
})


const enhancer = devToolsEnhancer();
const store = createStore(rootReducer, enhancer);

export default store;
