const axios = require('axios');

export const CATEGORY_SET_LIST = 'CATEGORIES_SET_LIST'

export const state = {
  list: []
}

export const mutations = {
  [CATEGORY_SET_LIST]: (state, list) => {
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
      .then(({data}) => {
        commit(CATEGORY_SET_LIST, data)
      })
  },
};
