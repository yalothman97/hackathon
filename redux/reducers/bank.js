const initialState = {
  cards: [{ name: "Yousef", number: "1234567890987", expiration: "1234" }]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CARD":
      return {
        ...state,
        cards: state.cards.concat(action.payload)
      };

    default:
      return state;
  }
};

export default reducer;
