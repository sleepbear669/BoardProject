import axios from '../utils/AxiosClient'

export const FETCH = "FETCH";

function fetch (comments){
    return {
        type: FETCH,
        comments : comments._embedded.responseList,
        page: comments.page
    };
}

export function fetchComment(pageNum){
    return dispatch => {
        axios.get('/comments?page=' + pageNum)
            .then(result => {
                dispatch(fetch(result.data));
            });
    }
}

