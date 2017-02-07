/* @flow */

import React from 'react';
import { connect } from 'react-redux';

import actionTypes from '../actions/actionTypes';
import Todo from './Todo';
import type { TodoItems } from '../reducers/reducers';

type TodoListArgs = { todos: TodoItems, onTodoClick: Function };

const TodoList = ({ todos, onTodoClick }: TodoListArgs): Object => (
	<ul>
		{todos.map((todo, index) =>
			<Todo
				key={index}
				{...todo}
				onClick={() => onTodoClick(index)}
			/>,
		)}
	</ul>
);

const mapStateToProp = state => ({
	todos: state,
});

const mapDispatchToProp = dispatch => ({
	onTodoClick: (index) => {
		dispatch({ type: actionTypes.TOGGLE_TODO, index });
	},
});

export default connect(mapStateToProp, mapDispatchToProp)(TodoList);
