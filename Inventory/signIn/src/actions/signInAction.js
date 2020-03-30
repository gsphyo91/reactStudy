export function onSignIn(token) {
  return {
    type: "SIGNIN",
    isSignIn: true,
    token
  };
}

export function onSignOut() {
  return { type: "SIGNOUT" };
}
