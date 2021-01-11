import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import residenceReducer from './residenceReducer';

export default combineReducers({
	form: formReducer,
	residences: residenceReducer,
});
