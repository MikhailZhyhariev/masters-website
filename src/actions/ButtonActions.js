import { BUTTON_CLICK, CLASSNAME_CHANGE } from '../constants/Button.js';

export function buttonClick(coord) {
  return {
    type: BUTTON_CLICK,
    payload: coord
  }
}

export function classnameChange(className) {
  return {
    type: CLASSNAME_CHANGE,
    payload: className
  }
}
