import {combineReducers} from 'redux';
import {Main} from './Main';
import {Profile} from './Profile';

const rootReducer = combineReducers({
  Main,
  Profile,
});

export default rootReducer;
