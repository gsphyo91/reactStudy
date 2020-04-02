export const Login = () => {
  return {
    type: "Login",
    logged: true
  };
};

export const Logout = () => {
  return {
    type: "Logout",
    logged: false
  };
};