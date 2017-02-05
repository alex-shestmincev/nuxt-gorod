// Polyfill for window.fetch()
require('whatwg-fetch')

export const state = {
    authUser: null
};

export const mutations = {
    SET_USER: function (state, user) {
      console.log('SET_USER')
        state.authUser = user
    }
};

export const actions = {
    nuxtServerInit ({ commit }, { req }) {
        if (req.session && req.session.authUser) {
            commit('SET_USER', req.session.authUser)
        }
    },

    login ({ commit }, { username, password }) {
        return fetch('/api/login', {
            // Send the client cookies to the server
            credentials: 'same-origin',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            .then((res) => {
                if (res.status === 401) {
                    throw new Error('Bad credentials')
                } else {
                    return res.json()
                }
            })
            .then((authUser) => {
                commit('SET_USER', authUser)
            })
    },

    logout ({ commit }) {
        return fetch('/api/logout', {
            // Send the client cookies to the server
            credentials: 'same-origin',
            method: 'POST'
        })
            .then(() => {
                commit('SET_USER', null)
            })
    }
};

