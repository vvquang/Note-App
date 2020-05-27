import { combineReducers } from 'redux';
import profile from './Profile/profile.reducer';

const appReducer = combineReducers({
  profile,
});

export default appReducer;
