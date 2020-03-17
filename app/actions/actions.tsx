const login = (username, loggedIn) => {
  return {
    type: "LOGIN",
    userInfo: {
      loggedIn,
      username
    }
  };
};

export default login;
