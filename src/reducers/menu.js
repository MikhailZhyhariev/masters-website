import { SET_SECTION,
         SET_CLASSNAME,
         SET_HEIGHT,
         OPEN_MENU,
         SET_CLASSNAME_MENU,
         SET_CLASSNAME_BUTTON,
         SET_TITLE
       } from '../constants/Menu.js';

const initialState = {
  active: 2,
  className: '',
  height: 0,
  open: false,
  classNameMenu: 'menu-close',
  classNameButton: 'menu__button-up',
  title: 'Резюме — Жигарев Михаил Юрьевич — Исследование модели стабилизации беспилотных летательных аппаратов в системах мониторинга промышленных предприятий'
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

    case SET_TITLE:
      return { ...state, title: action.payload };

    default:
      return state;
  }
}
