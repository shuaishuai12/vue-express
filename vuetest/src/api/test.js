/**
 * Created by Administrator on 2018/5/9 0009.
 */

    import axios from 'axios';


    let base = '/api/';

    //显示List
    export const getList = params => { return axios.get( `${base}/active/xianshivue`,{params:params});};
    export const getAdd = params => { return axios.get(`${base}/active/doadd`,{params:params});}
