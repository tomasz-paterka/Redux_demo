import React from 'react';


class AddComment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}
	
	handleSubmit = () => {
		this.props.addComment(this.state.value);
		this.setState({
			value: ""
		});

	}
	
	onChange = e => {
		this.setState({
			value: e.target.value
		});
	}

	
	render() {
		return (
			<div className="comment">
				<textarea
					type = "text"
					placeholder = "new comment"
					value = {this.state.value}
					onChange = {this.onChange}
					rows="3"
					cols="50"
					/>
				<button className = "btn-add" type = "submit" onClick = {this.handleSubmit}>
					Add Comment
				</button>
			</div>
		);
		
	}
}


export default AddComment;


