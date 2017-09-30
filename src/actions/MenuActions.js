import { SET_SECTION, SET_CLASSNAME, SET_HEIGHT } from '../constants/Menu.js';

export function chooseSection(active) {
  return {
    type: SET_SECTION,
    payload: active
  }
}

export function setClassName(className) {
  return {
    type: SET_CLASSNAME,
    payload: className
  }
}

export function setHeight(height) {
  return {
    type: SET_HEIGHT,
    payload: height
  }
}
