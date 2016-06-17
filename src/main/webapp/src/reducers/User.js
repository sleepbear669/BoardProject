/**
 * Created by sleepbear on 2016. 6. 9..
 */
import {LOGIN , SIGN_UP, EDIT} from '../actions/User'

const initialState = {
    isLogin: false,
    member : {}
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state,
                {
                    member : action.loginMember,
                    isLogin : true
                }
            );
        case EDIT:
            return Object.assign({}, state,
                {
                    member : action.loginMember
                }
            );
        default :
            return state;
    }
};

export default userReducer;