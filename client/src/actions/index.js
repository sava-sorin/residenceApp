import residences from '../apis/residences';
import history from '../history';
import {
	CREATE_RESIDENCE,
	DELETE_RESIDENCE,
	EDIT_RESIDENCE,
	FETCH_RESIDENCES,
	FETCH_RESIDENCE,
} from '../actions/types';

export const createResidence = (formValues) => async (dispatch) => {
	const response = await residences.post('/residences', formValues);

	dispatch({ type: CREATE_RESIDENCE, payload: response.data });
	history.push('/');
};

export const fetchResidences = () => async (dispatch) => {
	const response = await residences.get('/residences');

	dispatch({ type: FETCH_RESIDENCES, payload: response.data });
};

export const fetchResidence = (id) => async (dispatch) => {
	const response = await residences.get(`/residences/${id}`);

	dispatch({ type: FETCH_RESIDENCE, payload: response.data });
};

export const editResidence = (id, formValues) => async (dispatch) => {
	const response = await residences.put(`/residences/${id}`, formValues);

	dispatch({ type: EDIT_RESIDENCE, payload: response.data });
	history.push('/');
};

export const deleteResidence = (id) => async (dispatch) => {
	await residences.delete(`/residences/${id}`);

	dispatch({ type: DELETE_RESIDENCE, payload: id });
	history.push('/');
};
