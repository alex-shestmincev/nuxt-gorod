const axios = require('axios');

export const NEW_AD = 'NEW_AD'

export const state = {
  list: [],
  ad: null,
}

export const mutations = {
  [NEW_AD]: (state, data) => {
    state.ad = data
  },
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    // if (req.session && req.session.authUser) {
    //   commit('SET_USER', req.session.authUser)
    // }
    console.log('nuxtServerInit')
  },

  addNew ({ commit }, data) {
    return axios.post('http://localhost:5005/api/ad', data)
      .then((res) => {
        commit(NEW_AD, res.data)
      })
  },
};
