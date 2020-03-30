export default function(state, action){
  switch(action.type){
    case 'SIGNIN':
      return {
        isSignIn: true,
        email: action.email,
        password: action.password
      }
    case 'SIGNOUT':
      return {
        isSignIn: false,
        email: "",
        password: ""
      }
    default:
      return {
        isSignIn: false,
        email: "",
        password: ""
      }
  }
}