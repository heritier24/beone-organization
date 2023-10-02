<template>
  <div
    :class="colSection"
    data-aos="zoom-in"
    data-aos-delay="200"
  >
    <div class="icon-box">
      <div class="icon"><i class="bx bx-file"></i></div>
      <br />
      <h4 class="title"><a href="">{{ title }}</a></h4>
      <p class="description">
        {{ description }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    colSection: {
      type: String,
      default: 'col-md-6 col-lg-3 d-flex align-items-stretch'
    },
    title: {
      type: String,
      default: '24/7 Support'
    },
    description: {
      type: String,
      default: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla'
    }
  }
}
</script>
