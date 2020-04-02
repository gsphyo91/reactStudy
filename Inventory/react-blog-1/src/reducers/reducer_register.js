export default function (state = false, action){
  switch(action.type){
    case 'Toggle':
      return action.isRegister
    default:
      return state
  }
}