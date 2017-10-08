import { BUTTON_CLICK, CLASSNAME_CHANGE } from '../constants/Button.js';

const initialState = {
  coord: 0,
  className: 'button-up'
}

export default function button(state = initialState, action) {
  switch (action.type) {
    case BUTTON_CLICK:
      return { ...state, coord: action.payload };

    case CLASSNAME_CHANGE:
      return { ...state, className: action.payload };

    default:
      return state;
  }
}
