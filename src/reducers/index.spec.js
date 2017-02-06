import { todosReducer } from './index';
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('reducer CRUD', () => {
	const initialTodos = [
		{ text: 'First thing', completed: true },
		{ text: 'Second thing', completed: false }
	];

	it('added', () => {
		const todos = todosReducer(undefined, { type: 'ADD_TODO', text: 'First thing' });
		expect(todos).to.deep.equal([{ text: 'First thing', completed: false }]);
	});

	it('removed', () => {
		const todos = initialTodos;
		const updatedTodos = todosReducer(todos, { type: 'DELETE_TODO', index: 0 });
		expect(updatedTodos).to.deep.equal([
			{ text: 'Second thing', completed: false }
		]);
	});

	it('edited', () => {
		const todos = initialTodos;
		const editedTodos = todosReducer(todos, { type: 'EDIT_TODO', index: 0, text: 'First thing edited' });
		expect(editedTodos).to.deep.equal([
			{ text: 'First thing edited', completed: true },
			{ text: 'Second thing', completed: false }
		]);
	});

	it('toggle second thing completed', () => {
		const todos = initialTodos;
		const modifiedTodos = todosReducer(todos, { type: 'TOGGLE_TODO', index: 1 });
		expect(modifiedTodos).to.deep.equal([
			{ text: 'First thing', completed: true },
			{ text: 'Second thing', completed: true }
		]);
	});

	it('toggle first thing uncompleted', () => {
		const todos = initialTodos;
		const modifiedTodos = todosReducer(todos, { type: 'TOGGLE_TODO', index: 0 });
		expect(modifiedTodos).to.deep.equal([
			{ text: 'First thing', completed: false },
			{ text: 'Second thing', completed: false }
		]);
	});

	it('complete all', () => {
		const todos = initialTodos;
		const modifiedTodos = todosReducer(todos, { type: 'COMPLETE_ALL' });
		expect(modifiedTodos).to.deep.equal([
			{ text: 'First thing', completed: true },
			{ text: 'Second thing', completed: true }
		]);
	});

	it('uncomplete all', () => {
		const todos = initialTodos;
		const modifiedTodos = todosReducer(todos, { type: 'CLEAR_COMPLETED' });
		expect(modifiedTodos).to.deep.equal([
			{ text: 'Second thing', completed: false }
		]);
	});
});
