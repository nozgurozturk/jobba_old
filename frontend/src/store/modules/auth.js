import { checkToken } from '../../utils/token'

export default {
  state: {
    isLoggedIn: false
  },
  mutations: {
    setLoggedIn: (state, isLoggedIn) => {
      state.isLoggedIn = isLoggedIn
    }
  },
  actions: {
    setLoggedIn: ({ commit }) => {
      commit('setLoggedIn', checkToken())
    }
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn
  }
}
