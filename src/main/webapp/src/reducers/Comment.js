/**
 * Created by sleepbear on 2016. 6. 9..
 */
import {FETCH , WRITE} from '../actions/Comment'

const initialState = {
    comments : []
};

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH :
            return Object.assign({}, state, {
                comments : action.comments
            });
        default :
            return state
    }
};

export default commentReducer;