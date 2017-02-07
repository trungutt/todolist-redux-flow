/* @flow */

import actionTypes from '../actions/actionTypes'

type TodoItem = {
	text: string,
	completed: boolean
};
type TodoItems = Array<TodoItem>;

type TodoAction = AddTodoAction | DeleteTodoAction | EditTodoAction |
	ToggleTodoAction | CompleteAllAction | ClearCompletedAction;

type AddTodoAction = {
	type: actionTypes.ADD_TODO,
	text: string
};
type DeleteTodoAction = {
	type: actionTypes.DELETE_TODO,
	index: number
};
type EditTodoAction = {
	type: actionTypes.EDIT_TODO,
	index: number,
	text: string
};
type ToggleTodoAction = {
	type: actionTypes.TOGGLE_TODO,
	index: number
};
type CompleteAllAction = {
	type: actionTypes.COMPLETE_ALL
};
type ClearCompletedAction = {
	type: actionTypes.CLEAR_COMPLETED
};

const todosReducer = (todos: TodoItems = [], action: TodoAction): TodoItems => {
	switch (action.type) {
		case actionTypes.ADD_TODO: {
			return [...todos, {
				text: action.text,
				completed: false
			}];
		}

		case actionTypes.DELETE_TODO: {
			return todos
				.splice(0, action.index)
				.concat(todos.slice(action.index + 1))
		}

		case actionTypes.EDIT_TODO: {
			return [
				...todos.slice(0, action.index),
				Object.assign({}, todos[action.index], { text: action.text }),
				...todos.slice(action.index + 1),
			]
		}

		case actionTypes.TOGGLE_TODO: {
			return [
				...todos.slice(0, action.index),
				Object.assign({}, todos[action.index], { completed: !todos[action.index].completed }),
				...todos.slice(action.index + 1),
			]
		}

		case actionTypes.COMPLETE_ALL: {
			return todos.map((todo) => ({ ...todo, completed: true }));
		}

		case actionTypes.CLEAR_COMPLETED: {
			return todos.filter((todo) => !todo.completed);
		}

		default: {
			return todos;
		}
	}
};

export default todosReducer;
