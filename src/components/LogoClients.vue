<template>
  <div :class="colImage">
    <img :src="logoImage" class="img-fluid" alt="" /><span hidden>{{ logoID }}</span>
    <button type="button" class="btn btn-danger" @click="removeClientTrustedUs();">Remove</button>
  </div>
</template>
<script>
export default {
  props: {
    logoID: {
      type: String,
      default: ''
    },
    colImage: {
      type: String,
      default: 'col-sm-2'
    },
    logoImage: {
      type: String,
      default: ''
    }
  },
  methods: {
    removeClientTrustedUs () {
      const logoID = this.logoID
      this.$store.commit('setClientTrustedUsID', logoID)
      this.$emit('removeClientTrustedUs')
    }
  }
}
</script>
