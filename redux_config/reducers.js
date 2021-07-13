const initialState = { backgroundColor: 'red' };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'changeBackground':
      return { ...state, backgroundColor: action.payload };
    default:
      return state;
  }
};
