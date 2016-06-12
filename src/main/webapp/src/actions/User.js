/**
 * Created by sleepbear on 2016. 6. 9..
 */

import axios from '../utils/AxiosClient'


export const LOGIN = "LOGIN";
export const SIGN_UP = "SIGN_UP";

export function signUp(formData){
    return dispatch => {
        axios.post('/signUp', formData)
            .then(result => {
                console.log(result);
                dispatch(() => {type : SIGN_UP})
            }).catch(function (res) {
            if (res instanceof Error) {
                console.log(res.message);
            } else {
                console.log(res.data);
            }
        });
    }

}

export function login(member){
    return {
        type : LOGIN,
        loginMember : member
    }
}