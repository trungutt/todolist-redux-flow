import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import actionTypes from '../actions/actionTypes';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => (
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

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
	}).isRequired).isRequired,
	onTodoClick: PropTypes.func.isRequired,
};

export default connect(mapStateToProp, mapDispatchToProp)(TodoList);
