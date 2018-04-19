export const state = () => ({
  profile: {},
  stored: false,
  loading: false
})

export const getters = {
  profile (state) {
    return state.profile
  },
  isProfileLoading (state) {
    return state.loading
  }
}

export const actions = {
  fetchProfile ({ commit }) {
    const response = this.$axios.$get('/profile')
    if (response && response.result) {
      commit('setProfile', response.result)
    }
  }
}

export const mutations = {
  setProfile (state, payload) {
    state.profile = payload
    state.stored = true
  },
  clearProfile (state) {
    state.profile = {}
    state.stored = false
  },
  profileLoading (state, payload) {
    state.loading = payload
  }
}
