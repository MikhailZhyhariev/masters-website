import { SET_LANGUAGE, CHECK_AVAILABLE_LANGUAGE, ADAPTIVE_LANGUAGE } from '../constants/Language.js'

const initialState = {
  active: 'ru',
  available: {
    ru: true,
    en: true,
    ua: true
  },
  visible: false,
}

export default function language(state = initialState, action) {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, active: action.payload };

    case CHECK_AVAILABLE_LANGUAGE:
      return { ...state, available: action.payload };

    case ADAPTIVE_LANGUAGE:
      return { ...state, visible: action.payload };

    default:
      return state;
  }
}
