export function manageFriends(state, action){
    switch(action.type){
        case 'ADD_FRIEND': {
            return {
                friends: [ { name: 'Avi', hometown: 'NYC', id: 100 }, {
                    name: "Joe", 
                    hometown: 'Boston', 
                    id: 101
                }]

            }
        }
        case 'REMOVE_FRIEND': {
            return {
                friends: [ { name: 'Avi', hometown: 'NYC', id: 100 }, { name: 'Steven', hometown: 'Philadephia', id: 102 } ] 
            }
        }

        default:
            return state;
    }
}
