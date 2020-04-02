export const SetUserInfo = (email, password) => {
  return {
    type: "SET_USER",
    email,
    password
  };
};
