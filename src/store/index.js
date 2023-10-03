import { createStore } from 'vuex'

export default createStore({
  state: {
    serviceId: '',
    title: '',
    description: ''
  },
  getters: {
  },
  mutations: {
    setServiceId (state, serviceId) {
      state.serviceId = serviceId
    },
    setTitle (state, title) {
      state.title = title
    },
    setDescription (state, description) {
      state.description = description
    }
  },
  actions: {
  },
  modules: {
  }
})
