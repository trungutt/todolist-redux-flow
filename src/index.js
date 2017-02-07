import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import todosReducer from './reducers/reducers';
import TodoList from './components/TodoList';
import actionTypes from './actions/actionTypes';


const store = createStore(todosReducer, applyMiddleware(createLogger({ collapsed: true })));

store.dispatch({ type: actionTypes.ADD_TODO, text: 'First thing' });
store.dispatch({ type: actionTypes.ADD_TODO, text: 'Second thing' });
store.dispatch({ type: actionTypes.TOGGLE_TODO, index: 0 });

render(
	<Provider store={store}>
		<TodoList />
	</Provider>,
	document.getElementById('app'),
);
