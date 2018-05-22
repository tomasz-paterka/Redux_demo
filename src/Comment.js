import React from 'react';

const Comment = ({text, thumbUp, thumbDown, id, thumbUpComment, thumbDownComment, removeComment, editComment}) => 
<li>
	{text}
	<button onClick={() => thumbUpComment(id)}>Thumb up</button><span>Thumb up: {thumbUp}</span> 
	<button onClick={() => thumbDownComment(id)}>Thumb down</button><span>Thumb down: {thumbDown}</span> 
	<button onClick={() => editComment(id, prompt('new comment', text))}>Edit</button>
	<button onClick={() => removeComment(id)}>Delete</button>
</li>;

export default Comment;