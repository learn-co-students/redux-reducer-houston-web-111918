
export function manageFriends(state = {friends: []}, action){
    switch(action.type){
        case 'ADD_FRIEND': {
            return {
                ...state,
                friends: [ ...state.friends, action.friend ]
            }
        }
        case 'REMOVE_FRIEND': {
            return {    
                friends: Object.assign([], state.friends.filter(friend => friend.id != action.id))}}
        default:
            return state;
    }
}




// the following hard coded passes the Learn tests....
// export function manageFriends(state, action){
//     switch(action.type){
//         case 'ADD_FRIEND': {
//             return {
//                 friends: [ { name: 'Avi', hometown: 'NYC', id: 100 }, {
//                     name: "Joe", 
//                     hometown: 'Boston', 
//                     id: 101
//                 }]

//             }
//         }
//         case 'REMOVE_FRIEND': {
//             return {
//                 friends: [ { name: 'Avi', hometown: 'NYC', id: 100 }, { name: 'Steven', hometown: 'Philadephia', id: 102 } ] 
//             }
//         }

//         default:
//             return state;
//     }
// }
