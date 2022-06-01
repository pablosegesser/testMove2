import {types} from "../types/types";

const initialState = {
  checking: true,
  user: null,
  permission: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLoggedIn:
      return {
        ...state,
        ...action.payload,
      };
    case types.authLoggedOut:
      return {
        ...initialState,
        checking: false,
      };
    case types.authCheckingStarted:
      return {
        ...state,
        checking: true,
      };
    case types.authCheckingFinished:
      return {
        ...state,
        checking: false,
      };
    case types.authGetUser:
      return {
        ...state,
        ...action.payload,
      };
    case types.authSignMessage:
      return {
        ...state,
        signMessage: action.payload,
      };
    default:
      return state;
  }
};
