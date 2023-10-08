import { createStore } from 'vuex'

export default createStore({
  state: {
    serviceId: '',
    title: '',
    description: '',
    logoID: '',
    testimonialID: ''
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
    },
    setClientTrustedUsID (state, logoID) {
      state.logoID = logoID
    },
    setTestimonialID (state, testimonialID) {
      state.testimonialID = testimonialID
    }
  },
  actions: {
  },
  modules: {
  }
})
