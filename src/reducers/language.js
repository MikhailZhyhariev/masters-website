import { SET_LANGUAGE } from '../constants/Language.js'

const initialState = {
  active: 'ru'
}

export default function language(state = initialState, action) {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, active: action.payload };

    default:
      return state;
  }
}
