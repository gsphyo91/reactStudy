export default function(state = null, action) {
  switch (action.type) {
    case "LIST":
      return action.status;
    case "DETAIL":
      return action.status;
    case "WRITE":
      return action.status;
    case "UPDATE":
      return action.status;
    default:
      return state;
  }
}
