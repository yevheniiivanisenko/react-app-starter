import {combineReducers} from 'redux';
import loading, {STATE_KEY as LOADING_STATE_KEY} from './loading';

export default combineReducers({
  [LOADING_STATE_KEY]: loading,
});
