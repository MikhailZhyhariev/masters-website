const initialState = {
  language: 'ru'
}

export default function language(state = initialState, action) {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };

    default:
      return state;
  }
}
