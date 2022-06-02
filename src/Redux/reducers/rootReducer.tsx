import {combineReducers} from "redux";
import {authReducer} from "./authReducer";
import usersSlice from "./usersReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  users: usersSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
