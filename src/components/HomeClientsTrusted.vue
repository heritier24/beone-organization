<template>
  <div class="col-sm-2">
    <img :src="logoImage" class="img-fluid" alt="" /><span
      hidden
      >{{ logoID }}</span
    >
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
  }
}
</script>
