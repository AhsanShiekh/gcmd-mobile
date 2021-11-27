import { combineReducers, createStore } from "redux";
import reportsReducer from "./reducers/reports.reducer";
import userReducer from "./reducers/user.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  reports: reportsReducer,
});

const store = createStore(rootReducer);

export default store;
