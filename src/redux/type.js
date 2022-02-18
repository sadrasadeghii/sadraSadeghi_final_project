import { LOGIN_SUCCESS, USER_DATA } from "./actions";

export const setUserDataWhenLogin = (userData) => {
    return {
      type: LOGIN_SUCCESS,
      payload: userData
    };
};

export const getUserDataWhenLogin = () => {
    return {
      type: USER_DATA,
    };
};