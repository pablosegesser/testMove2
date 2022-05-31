//import { LoginProps, User } from "../../Interfaces/interfaces";
import {types} from "../types/types";
import Cookies from "js-cookie";

export const action_auth_startCheck = () => {
  return async (dispatch) => {
    dispatch(checkingStarted());

    const resp = {status: 200};
    const user = {
      user: {
        user_id: "1",
        username: "memo",
        first_name: "Ernesto",
        last_name: "Gutierrez",
        role: "consumer",
        avatar:
          "https://gravatar.com/avatar/8523c53115cc551a96cd0afdcd09e734?s=400&d=robohash&r=x",
        email: "memo@gmail.com",
      },
    };

    try {
      if (resp.status === 200) {
        dispatch(action_auth_completeCheck(user));
      }
    } catch (error) {
      console.log(error);
    }

    dispatch(checkingFinished());
  };
};

export const action_auth_login = () => {
  return async (dispatch) => {
    dispatch(checkingStarted());

    const resp = {status: 200};
    const jsonResp = {
      token: "sdfdfsdfsddhhrhfghfgjdjgjhg",
      user: {
        user_id: "1",
        username: "memo",
        first_name: "Ernesto",
        last_name: "Gutierrez",
        role: "consumer",
        avatar:
          "https://gravatar.com/avatar/8523c53115cc551a96cd0afdcd09e734?s=400&d=robohash&r=x",
        email: "memo@gmail.com",
      },
    };

    try {
      if (resp.status === 200) {
        const {user} = jsonResp;
        createCookie(jsonResp);
        dispatch(action_auth_completeCheck({user}));
      } else if (resp.status === 401) {
        console.log("not logged");
      }
    } catch (error) {
      console.log(error);
    }

    dispatch(checkingFinished());
  };
};

export const action_auth_completeGetUser = (user) => {
  return {
    type: types.authGetUser,
    payload: user,
  };
};

export const action_auth_completeCheck = (user) => {
  return {
    type: types.authLoggedIn,
    payload: user,
  };
};

export const action_auth_Logout = () => {
  Cookies.remove("suscription_key");

  return {
    type: types.authLoggedOut,
  };
};

export const checkingStarted = () => ({
  type: types.authCheckingStarted,
});

export const checkingFinished = () => ({
  type: types.authCheckingFinished,
});

const createCookie = (props) => {
  const {token} = props;

  const suscriptionKey = btoa(JSON.stringify({token}));
  Cookies.set("suscription_key", suscriptionKey, {expires: 1});
  console.log("Login successful!");
};
