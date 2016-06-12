import axios from '../utils/AxiosClient'

export const FETCH = "FETCH";
export const UPDATE = "UPDATE";
export const INIT_COMMENT = "INIT_COMMENT";

function fetch (comments){
    return {
        type: FETCH,
        comments : comments,
    };
}

export function initComment(){
    return dispatch => {
        axios.get('/comments')
            .then(result => {
                dispatch(fetch(result.data));
            });
    }
}


export function update(){
    return {
        type: UPDATE
    };
}
