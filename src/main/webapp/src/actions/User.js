/**
 * Created by sleepbear on 2016. 6. 9..
 */

import axios from '../utils/AxiosClient'


export const LOGIN = "LOGIN";
export const SIGN_UP = "SIGN_UP";
export const EDIT = "EDIT";

export function login(member){
    return {
        type : LOGIN,
        loginMember : member
    }
}

export function edit(member) {
    return {
        type : EDIT,
        loginMember : member
    }
}