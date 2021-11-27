const initialState = {
  reports: [],
};

const reportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_REPORTS":
      return {
        ...state,
        reports: action.payload,
      };
    default:
      return state;
  }
};

export default reportsReducer;
