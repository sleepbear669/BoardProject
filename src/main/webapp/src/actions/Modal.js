/**
 * Created by sleepbear on 2016. 6. 12..
 */

export const OPEN = 'OPEN';
export const CLOSE = 'CLOSE';

export function open(){
    return {
        type : OPEN,
        modalState : true
    }
}

export function close(){
    return {
        type : CLOSE,
        modalState : false
    }
}