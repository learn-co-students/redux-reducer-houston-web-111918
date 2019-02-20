export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
    console.log(action)
      return {friends: [...state.friends, {name: action.friend.name, hometown: action.friend.hometown, id: action.friend.id}]};
    break;
    case 'REMOVE_FRIEND':
      return {friends: state.friends.filter(friend => action.id !== friend.id)}
    break;
    default:
      return state;
  }
}
