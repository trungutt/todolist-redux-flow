import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import todosReducer from './reducers/reducers';
import TodoList from './components/TodoList';
import actionTypes from './actions/actionTypes';


const store = createStore(todosReducer);

store.dispatch({ type: actionTypes.ADD_TODO, text: 'First thing' });
store.dispatch({ type: actionTypes.ADD_TODO, text: 'Second thing' });
store.dispatch({ type: actionTypes.TOGGLE_TODO, index: 0 });

const appElem = document.createElement('div');
appElem.id = 'app';

document.body.appendChild(appElem);

render(
	<Provider store={store}>
		<TodoList />
	</Provider>,
	appElem,
);
