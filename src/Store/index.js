import {createStore, applyMiddleware} from 'redux';
import reducer from './Reducers/reducer';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

export default createStore(reducer, middleware);