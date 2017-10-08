import { SET_LANGUAGE, CHECK_AVAILABLE_LANGUAGE } from '../constants/Language.js'

const initialState = {
  active: 'ru',
  available: {
    ru: true,
    en: true,
    ua: true
  }
}

export default function language(state = initialState, action) {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, active: action.payload };

    case CHECK_AVAILABLE_LANGUAGE:
      return { ...state, available: action.payload };

    default:
      return state;
  }
}
