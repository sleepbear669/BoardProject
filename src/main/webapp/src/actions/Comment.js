import axios from '../utils/AxiosClient'

export const FETCH = "FETCH";
export const WRITE = "WRITE";

function update (comments){
    return {
        type: FETCH,
        comments : comments
    };
}

export function fetchComments(){
    return dispatch => {
        axios.get('/comments')
            .then(result => {
                dispatch(update(result.data));
            });
    }
}

export function write(){
    return {
        type: WRITE
    };
}
