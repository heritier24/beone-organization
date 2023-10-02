
export const errorHandlingMixins = {

  methods: {
    displayUnauthorized (error) {
      if (error.response === undefined) {
        this.$noty.error('somethinng wrong please contact support')
        return
      }

      if (error.response.data.errors) {
        this.$noty.error(error.response.data.errors[0])
        return
      }
      if (error.response.data.message) {
        this.$noty.error(error.response.data.message)
      }
    }
  }
}
