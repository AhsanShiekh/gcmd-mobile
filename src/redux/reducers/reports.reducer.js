const initialState = {
  reports: [],
  tests: [],
};

const reportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_REPORTS":
      return {
        ...state,
        reports: action.payload,
      };
    case "SET_TESTS":
      return {
        ...state,
        tests: action.payload,
      };
    default:
      return state;
  }
};

export default reportsReducer;
