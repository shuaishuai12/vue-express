/**
 * Created by Administrator on 2018/5/9 0009.
 */

    import axios from 'axios';


    let base = '/api';

    //显示List
    export const getList = params => { return axios.get( `${base}/active/xianshivue`,{params:params});}
    export const getAdd = params => { return axios.get(`${base}/active/doadd`,{params:params});}
    //删除
    export const getRemove = params => { return axios.get(`${base}/active/doremove`,{params:params});}
    //编辑
    export const getUpdata = params => { return axios.get(`${base}/active/doupdata`,{params:params});}
    //查询
    export const getFind = params => { return axios.get(`${base}/active/dofind`,{params:params})}



   //注册
    export const getRegister = params => { return axios.get(`${base}/users/register`,{params:params});}
    //login
    export const getLogin = params => { return axios.get(`${base}/users/login`,{params:params});}


  //图片上传
    export const getUploadPicture ={ url:base+'/picture/uploadPicture'}
  //图片显示
    export const getShowPicture = params => { return axios.get(`${base}/picture/showPicture`,{params:params});}
    //图片删除
    export const getDeletePicture = params => { return axios.get(`${base}/picture/deletePicture`,{params:params});}
