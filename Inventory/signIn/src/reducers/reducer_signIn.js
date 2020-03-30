export default function(state, action){
  switch(action.type){
    case 'SIGNIN':
      return {
        isSignIn: true,
        token: action.token
      }
    case 'SIGNOUT':
      return {
        isSignIn: false,
        token: ""
      }
    default:
      return {
        isSignIn: false,
        token: ""
      }
  }
}