import types from "../actions";

const initialState = {
  tweets: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DASHBOARD_TWEETS: {
      return {
        ...state,
        tweets: action.data,
      };
    }
  }
  return state;
};
