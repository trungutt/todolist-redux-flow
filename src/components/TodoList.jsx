import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';
import actionTypes from '../actions/actionTypes';


export const TodoList = ({todos, onTodoClick}) => (
	<ul>
		{todos.map((todo, index) =>
			<Todo
				key={index}
				{...todo}
				onClick={() => onTodoClick(index)}
			/>
		)}
	</ul>
);

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	}).isRequired).isRequired,
	onTodoClick: PropTypes.func.isRequired
};

export default connect(
	(state) => ({
		todos: state
	}),
	(dispatch) => ({
		onTodoClick: (index) => {
			dispatch({ type: actionTypes.TOGGLE_TODO, index });
		}
	})
)(TodoList);
