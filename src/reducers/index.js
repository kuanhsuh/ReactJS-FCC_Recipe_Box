import { combineReducers } from 'redux';
import recipes from './reducer_recipes';

const rootReducer = combineReducers({
  recipes
});

export default rootReducer;
