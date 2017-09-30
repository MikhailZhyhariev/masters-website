import { SET_SECTION, SET_CLASSNAME, SET_HEIGHT } from '../constants/Menu.js';

const initialState = {
  active: 0,
  className: '',
  height: 0
}

export default function menu(state = initialState, action) {
  switch (action.type) {
    case SET_SECTION:
      return { ...state, active: action.payload };

    case SET_CLASSNAME:
      return { ...state, className: action.payload };

    case SET_HEIGHT:
      return { ...state, height: action.payload };

    default:
      return state;
  }
}
