const initialState = {
  active: 0
}

export default function menu(state = initialState, action) {
  switch (action.type) {
    case 'SET_SECTION':
      return { ...state, active: action.payload };

    default:
      return state;
  }
}
