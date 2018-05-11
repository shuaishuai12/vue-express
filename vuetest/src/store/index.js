/**
 * Created by Administrator on 2018/5/11 0011.
 */



    import Vue from 'vue';
    import Vuex from 'vuex';
    import users from './modules/users'


    Vue.use(Vuex)



    const store = new Vuex.Store({
        state:{},
        getters:{},
        mutations:{},
        modules:{
          users
        }

    })


    export default store
