import {ADD_COMMENT} from './actions.js';
import {REMOVE_COMMENT} from './actions.js';
import {EDIT_COMMENT} from './actions.js';
import {THUMB_UP_COMMENT} from './actions.js';
import {THUMB_DOWN_COMMENT} from './actions.js';



function comments(state = [], action) {
	switch(action.type) {
		case ADD_COMMENT:
			return [{
				id: action.id,
				text: action.text,
				thumbUp: 0,
				thumbDown: 0
			}, ...state];
		case REMOVE_COMMENT:
			return state.filter(comment => comment.id !== action.id);
		case EDIT_COMMENT:
			return state.map(comment => {
				if (comment.id === action.id) {
					return {...comment, text: action.text};
				} 
				return comment;	
			});
		case THUMB_UP_COMMENT:
			return state.map(comment => {
				if (comment.id === action.id) {
					return {...comment, thumbUp: comment.thumbUp +1};
				}
				return comment;
			});
		case THUMB_DOWN_COMMENT:
			return state.map(comment => {
				if (comment.id === action.id) {
					return {...comment, thumbDown: comment.thumbDown +1};
				}
				return comment;	
			});	
		default:
			return state;
	}
}

export default comments;