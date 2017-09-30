import { SET_LANGUAGE } from '../constants/Language.js'

export function chooseLanguage(active) {
  return {
    type: SET_LANGUAGE,
    payload: active
  }
}
