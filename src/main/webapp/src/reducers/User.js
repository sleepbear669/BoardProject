/**
 * Created by sleepbear on 2016. 6. 9..
 */
import {LOGIN , SIGN_UP} from '../actions/User'

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
        default :
            return state;
    }
};

export default userReducer;