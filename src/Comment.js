import React from 'react';

const Comment = ({text, thumbUp, thumbDown, id, thumbUpComment, thumbDownComment, removeComment, editComment}) => 
<div>
	{text}
	<li className="list-item">
		<button className="icon-btn" onClick={() => thumbUpComment(id)}><i className="fas fa-thumbs-up"></i></button><span>{thumbUp}</span> 
		<button className="icon-btn" onClick={() => thumbDownComment(id)}><i className="fas fa-thumbs-down"></i></button><span>{thumbDown}</span> 
		<button onClick={() => editComment(id, prompt('new comment', text))}>Edit</button>
		<button onClick={() => removeComment(id)}>Delete</button>
	</li>
</div>

export default Comment;