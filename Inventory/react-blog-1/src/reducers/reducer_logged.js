export default function(state = false, action){
  switch(action.type){
    case 'Login':
      return action.logged
      
    case 'Logout':
      return action.logged
      
    default:
      return state;
  }
}