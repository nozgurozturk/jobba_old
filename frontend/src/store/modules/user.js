
export default {
  state: {
    userName: '',
    email: ''
  },
  mutations: {
    setUserName: (state, userName) => {
      state.userName = userName
    },
    setEmail: (state, email) => {
      state.email = email
    }
  },
  actions: {
    setUserName: ({ commit }, userName) => {
      commit('setUserName', userName)
    },
    setEmail: ({ commit }, email) => {
      commit('setEmail', email)
    }
  },
  getters: {
    userName: state => state.userName,
    email: state => state.email
  }
}
