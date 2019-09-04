export const state = () => ({
  token: 123,
  info: { name: '호' }
})

export const mutations = {
  TOKEN(state, token) {
    state.token = token
  },
  INFO(state, token) {
    state.token = token
  }
}

export const getters = {
  TOKEN(state) {
    return state.token
  },
  INFO(state) {
    return state.info
  }
}

export const actions = {
  LOGOUT({ commit }) {
    commit('TOKEN', null)
    commit('INFO', null)
    // localStorage 나 cookie에 있는 token 삭제
  },
  LOGIN({ commit }, token) {
    commit('TOKEN', token)
  }
}
