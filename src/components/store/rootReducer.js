import { combineReducers } from "redux";
import AuthReducer from "../reducers";
import DashboardReducer from "../reducers/dashboardReducer";

//One root reducer for the whole app. This is done so that the app will have one single reducer to manage lots of other resources.
// And also communication between the reducers will be easier to maintain.

const rootReducer = combineReducers({
  auth: AuthReducer,
  dashboard: DashboardReducer,
});

export default rootReducer;
