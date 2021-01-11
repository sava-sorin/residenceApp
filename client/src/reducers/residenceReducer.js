import _ from 'lodash';
import {
	CREATE_RESIDENCE,
	DELETE_RESIDENCE,
	EDIT_RESIDENCE,
	FETCH_RESIDENCES,
	FETCH_RESIDENCE,
} from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_RESIDENCES:
			return { ...state, ..._.mapKeys(action.payload, 'id') };

		case FETCH_RESIDENCE:
			return { ...state, [action.payload.id]: action.payload };

		case CREATE_RESIDENCE:
			return { ...state, [action.payload.id]: action.payload };

		case EDIT_RESIDENCE:
			return { ...state, [action.payload.id]: action.payload };

		case DELETE_RESIDENCE:
			return _.omit(state, action.payload);

		default:
			return state;
	}
};
