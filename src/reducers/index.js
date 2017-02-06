import { compose as lens, lensIndex as i, lensProp as p, remove, set } from 'ramda';

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const EDIT_TODO = 'EDIT_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const COMPLETE_ALL = 'COMPLETE_ALL';
const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const todosReducer = (todos = [], action) => {
	switch (action.type) {
		case ADD_TODO: {
			const newTodo = { text: action.text, completed: false };
			return [...todos, newTodo];
		}

		case DELETE_TODO: {
			return remove(action.index, 1, todos);
		}

		case EDIT_TODO: {
			return set(lens(i(action.index), p('text')), action.text, todos);
		}

		case TOGGLE_TODO: {
			const completed = todos[action.index].completed;
			return set(lens(i(action.index), p('completed')), !completed, todos);
		}

		case COMPLETE_ALL: {
			return todos.map((todo) => ({ ...todo, completed: true }));
		}

		case CLEAR_COMPLETED: {
			return todos.filter((todo) => !todo.completed);
		}

		default: {
			return todos;
		}
	}
};
