import { SET_SECTION, SET_CLASSNAME, SET_HEIGHT, OPEN_MENU, SET_CLASSNAME_MENU, SET_CLASSNAME_BUTTON } from '../constants/Menu.js';

const initialState = {
  active: 0,
  className: '',
  height: 0,
  open: false,
  classNameMenu: 'menu-close',
  classNameButton: 'menu__button-up'
}

export default function menu(state = initialState, action) {
  switch (action.type) {
    case SET_SECTION:
      return { ...state, active: action.payload };

    case SET_CLASSNAME:
      return { ...state, className: action.payload };

    case SET_HEIGHT:
      return { ...state, height: action.payload };

    case OPEN_MENU:
      return { ...state, open: action.payload };

    case SET_CLASSNAME_MENU:
      return { ...state, classNameMenu: action.payload };

    case SET_CLASSNAME_BUTTON:
      return { ...state, classNameButton: action.payload };

    default:
      return state;
  }
}
