import { combineReducers } from 'redux';
import language from './language.js';
import menu from './menu.js';

export default combineReducers({
  language,
  menu
})
