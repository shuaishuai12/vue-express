
import {getLogin} from '../../api/test'

// 存储状态值
const state = {
  username: ''

}



// 状态值的改变方法,操作状态值
// 提交mutations是更改Vuex状态的唯一方法
const mutations = {
  SET_NAME: (state, name) => {
  state.username = name;
console.log("name",name)
},
}


// 在store中定义getters（可以认为是store的计算属性）。Getters接收state作为其第一个函数
const getters = {

}

// actions用于处理异步事件，最后还是需要提交mutations来改变state
const actions = {
    login({ commit }, data) {
      //const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
          getLogin(data).then(res => {
          console.log("12121",res.data.user[0])
          const data = res.data.user[0]
          commit('SET_NAME', data.name)
      //setToken(response.data.token)
      resolve(res)
    }).catch(error => {
        reject(error)
      })
    })
    },
  //  login:({ commit } , data) => axios.get(`/api/users/login`,{params:data})

}


export default {
  state,
  getters,
  actions,
  mutations
}
