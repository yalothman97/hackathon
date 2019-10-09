import { combineReducers } from "redux";

import bankReducer from "./bank";
import passportReducer from "./passport";

const rootReducer = combineReducers({
  rootBank: bankReducer,
  rootPassport: passportReducer
});

export default rootReducer;
