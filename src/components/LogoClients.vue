<template>
  <div :class="colImage">
    <img :src="logoImage" class="img-fluid" alt="" />
  </div>
</template>
<script>
export default {
  props: {
    colImage: {
      type: String,
      default: 'col-sm-2'
    },
    logoImage: {
      type: String,
      default: 'assets/img/clients/client-1.png'
    }
  }
}
</script>
