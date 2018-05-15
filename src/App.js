import React from 'react';
import './App.css';
import CommentsList from './CommentsListContainer.js';
import AddComment from './AddCommentsContainer.js';

const App = () => {
	return (
		<div className='App'>
			<h1>CommentApp</h1>
			<CommentsList />
			<AddComment />
		</div>
	);
};

export default App;
