import { ADD_PASSPORT } from "./actionTypes";

export const addPassport = (newPassport, navigation) => {
  return dispatch => {
    dispatch({
      type: ADD_PASSPORT,
      payload: newPassport
    });
    navigation.goBack();
  };
};
