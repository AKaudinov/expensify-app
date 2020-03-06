const authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return{
                uid: action.uid // grab the signed in user's id
            };
        case 'LOGOUT':
            return{
                //return an empty object if the user is logged out
            };
        default:
            return state;
    }
};

export default authReducer;
