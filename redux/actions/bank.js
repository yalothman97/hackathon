import { ADD_CARD } from "./actionTypes";

export const addCard = (newCard, navigation) => {
  return dispatch => {
    dispatch({
      type: ADD_CARD,
      payload: newCard
    });
    navigation.goBack();
  };
};
