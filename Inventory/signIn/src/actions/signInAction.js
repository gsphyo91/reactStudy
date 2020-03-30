export function onSignIn(email, password) {
  return {
    type: "SIGNIN",
    isSignIn: true,
    email,
    password
  };
}

export function onSignOut() {
  return { type: "SIGNOUT" };
}
