import { combineReducers } from 'redux';
import language from './language.js';
import menu from './menu.js';
import button from './button.js';

export default combineReducers({
  language,
  menu,
  button
})
