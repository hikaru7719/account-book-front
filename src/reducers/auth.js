const initialState = {
    auth: {
        "token": "",
    }
};

export default (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                auth: {"token":action.token }
            }

        default:
            return state;
    }
}