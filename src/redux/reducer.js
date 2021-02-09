const initialState = {
  blog: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST":
      return { ...state, blog: action.value };
    default:
      return state;
  }
};

export default reducer;
