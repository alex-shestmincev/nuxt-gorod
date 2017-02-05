const axios = require('axios');

export const SET_LIST = 'CATEGORIES_SET_LIST'

export const state = {
  list: []
}

export const mutations = {
  [SET_LIST]: (state, list) => {
    state.list = list
  },
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    // if (req.session && req.session.authUser) {
    //   commit('SET_USER', req.session.authUser)
    // }
    console.log('nuxtServerInit')
  },

  list ({ commit }) {
    return axios.get('http://localhost:5005/api/category')
      .then((res) => {
        commit(SET_LIST, res.data)
      })
  },
};
