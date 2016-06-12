/**
 * Created by sleepbear on 2016. 6. 12..
 */
import {OPEN, CLOSE} from '../actions/Modal';

const initialState = {
    modalState: false
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN :
            return Object.assign({}, state,
                {
                    modalState: true
                }
            );
        case CLOSE :
            return Object.assign({}, state,
                {
                    modalState: false
                }
            );
        default:
            return state;
    }
};

export default modalReducer;