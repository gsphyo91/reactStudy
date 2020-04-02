export default function(state = null, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        email: action.email,
        password: action.password
      };
    default:
      return state;
  }
}
