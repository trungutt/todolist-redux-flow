/* @flow */

import React from 'react';


type TodoArgs = {text: string, completed: boolean, onClick: Function};
const Todo = ({ text, completed, onClick }: TodoArgs): Object => (
	<li
		onClick={onClick}
		style={{
			textDecoration: completed ? 'line-through' : 'none',
		}}
	>
		{text}
	</li>
);

export default Todo;
