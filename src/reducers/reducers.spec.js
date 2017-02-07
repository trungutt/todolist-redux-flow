/* @flow */

import { describe, it } from 'mocha';
import { expect } from 'chai';

import todosReducer from './reducers';
import actionTypes from '../actions/actionTypes';

describe('reducer CRUD', () => {
	const initialTodos = [
		{ text: 'First thing', completed: true },
		{ text: 'Second thing', completed: false },
	];

	it('added', () => {
		const todos = todosReducer(undefined, { type: actionTypes.ADD_TODO, text: 'First thing' });
		expect(todos).to.deep.equal([{ text: 'First thing', completed: false }]);
	});

	it('deleted', () => {
		const todos = initialTodos;
		const updatedTodos = todosReducer(todos, { type: actionTypes.DELETE_TODO, index: 0 });
		expect(updatedTodos).to.deep.equal([
			{ text: 'Second thing', completed: false },
		]);
	});

	it('edited', () => {
		const todos = initialTodos;
		const editedTodos = todosReducer(todos, { type: actionTypes.EDIT_TODO, index: 0, text: 'First thing edited' });
		expect(editedTodos).to.deep.equal([
			{ text: 'First thing edited', completed: true },
			{ text: 'Second thing', completed: false },
		]);
	});

	it('toggle second thing completed', () => {
		const todos = initialTodos;
		const modifiedTodos = todosReducer(todos, { type: actionTypes.TOGGLE_TODO, index: 1 });
		expect(modifiedTodos).to.deep.equal([
			{ text: 'First thing', completed: true },
			{ text: 'Second thing', completed: true },
		]);
	});

	it('toggle first thing uncompleted', () => {
		const todos = initialTodos;
		const modifiedTodos = todosReducer(todos, { type: actionTypes.TOGGLE_TODO, index: 0 });
		expect(modifiedTodos).to.deep.equal([
			{ text: 'First thing', completed: false },
			{ text: 'Second thing', completed: false },
		]);
	});

	it('complete all', () => {
		const todos = initialTodos;
		const modifiedTodos = todosReducer(todos, { type: actionTypes.COMPLETE_ALL });
		expect(modifiedTodos).to.deep.equal([
			{ text: 'First thing', completed: true },
			{ text: 'Second thing', completed: true },
		]);
	});

	it('uncomplete all', () => {
		const todos = initialTodos;
		const modifiedTodos = todosReducer(todos, { type: actionTypes.CLEAR_COMPLETED });
		expect(modifiedTodos).to.deep.equal([
			{ text: 'Second thing', completed: false },
		]);
	});
});
