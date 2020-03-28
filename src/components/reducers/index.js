import types from "../actions";

const initialState = {
  isAuthenticated: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_LOGIN: {
      return {
        ...state,
        isAuthenticated: action.data
      };
    }
  }
  return state;
};
