/**
 * Created by sleepbear on 2016. 6. 2..
 */

import axios from 'axios';

export default axios.create({
    baseURL: 'http://117.17.102.241:8080/api',
    timeout: 3000
});
