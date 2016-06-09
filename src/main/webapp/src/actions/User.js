/**
 * Created by sleepbear on 2016. 6. 9..
 */

import axios from '../utils/AxiosClient'

export const LOGIN = "LOGIN";
export const SIGN_UP = "SIGN_UP";

export function signUp(){
    return {
        type: SIGN_UP
    };
}

export function login(){
    return {
        type: LOGIN
    };
}