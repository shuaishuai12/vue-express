/**
 * Created by Administrator on 2018/5/6 0006.
 */

import axios from 'axios'

export const  addapi = (params) => axios.get('active/doadd',{params:params});

export const  findapi = (params) => axios.get('active/xianshivue',{params:params});
