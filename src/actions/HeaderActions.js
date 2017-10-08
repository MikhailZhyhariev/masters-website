import { SET_LANGUAGE, CHECK_AVAILABLE_LANGUAGE } from '../constants/Language.js'

export function chooseLanguage(active) {
  return {
    type: SET_LANGUAGE,
    payload: active
  }
}

export function checkAvailableLanguage(available) {
  return {
    type: CHECK_AVAILABLE_LANGUAGE,
    payload: available
  }
}
