const reducer = (state, action) => {
  if (action.type === "SET_TODO") {
    return { ...state, todos: action.payload };
  }

  if (action.type === "SET_INPUT_TEXT") {
    return { ...state, inputText: action.payload };
  }

  if (action.type === "SELECT") {
    return { ...state, status: action.payload };
  }

  return state;
};

export default reducer;
