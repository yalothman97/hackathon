const initialState = {
  passports: [{ name: "Yousef", number: "P012423", expiration: "12/22" }]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PASSPORT":
      return {
        ...state,
        passports: state.passports.concat(action.payload)
      };

    default:
      return state;
  }
};

export default reducer;
