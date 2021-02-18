import isEmpty from 'loadsh/isEmpty'
function login(login = {
    isAuth: false,
    user: {}
}, action) {
    switch (action.type) {
        case "SYNC_STATE_INFO":
            return {
                isAuth:!isEmpty(action.payload),
                user:action.payload
            };
        default:
            return login;
    }
}
export default login;