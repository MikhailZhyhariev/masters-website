import { SET_SECTION,
         SET_CLASSNAME,
         SET_HEIGHT,
         OPEN_MENU,
         SET_CLASSNAME_MENU,
         SET_CLASSNAME_BUTTON,
         SET_TITLE
       } from '../constants/Menu.js';

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

export function openMenu(open) {
  return {
    type: OPEN_MENU,
    payload: open
  }
}

export function setClassNameMenu(classNameMenu) {
  return {
    type: SET_CLASSNAME_MENU,
    payload: classNameMenu
  }
}

export function setClassNameButton(classNameButton) {
  return {
    type: SET_CLASSNAME_BUTTON,
    payload: classNameButton
  }
}

export function setTitle(title) {
  return {
    type: SET_TITLE,
    payload: title
  }
}
