const loggedReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.userInfo;
    case "LOGOUT":
      return false;
    default:
      return state;
  }
};

export default loggedReducer;
