<template>
  <div :class="colTestimonial">
    <div class="testimonial-item">
      <div class="d-flex align-items-center">
        <img
          :src="testimonialImage"
          class="testimonial-img flex-shrink-0"
          alt=""
        />
        <div>
          <h3>{{ nameTitle }}</h3><span hidden>{{ testimonialID }}</span>
          <h4>{{ namePosition }}</h4>
          <div class="stars">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
            ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
            ><i class="bi bi-star-fill"></i>
          </div>
        </div>
      </div>
      <p>
        <i class="bi bi-quote quote-icon-left"></i>
        {{ nameDescription }}
        <i class="bi bi-quote quote-icon-right"></i>
      </p>
    </div>
    <button type="button" class="btn btn-gray-800 mt-2 animate-up-2" @click="removeTestimonial();">Remove</button>
  </div>
</template>
<script>
export default {
  props: {
    testimonialID: {
      type: String,
      default: ''
    },
    colTestimonial: {
      type: String,
      default: 'col-sm-3'
    },
    testimonialImage: {
      type: String,
      default: ''
    },
    nameTitle: {
      type: String,
      default: 'Heritier Ganza Tamba'
    },
    namePosition: {
      type: String,
      default: 'Software Developer'
    },
    nameDescription: {
      type: String,
      default: 'BeOne organization desscription content here'
    }
  },
  methods: {
    removeTestimonial () {
      const testimonialID = this.testimonialID
      this.$store.commit('setTestimonialID', testimonialID)
      this.$emit('removeTestimonial')
    }
  }
}
</script>
