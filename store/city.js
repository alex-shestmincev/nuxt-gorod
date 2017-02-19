const axios = require('axios');

export const CITY_SET_LIST = 'CITIES_SET_LIST'

export const state = {
  list: []
}

export const mutations = {
  [CITY_SET_LIST]: (state, list) => {
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
    return axios.get('http://localhost:5005/api/city')
      .then(({data}) => {
      console.log('data', data)
        commit(CITY_SET_LIST, data)
      })
  },
};
