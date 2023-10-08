<template>
  <div class="swiper-slide">
    <div class="testimonial-wrap">
      <div class="testimonial-item">
        <div class="d-flex align-items-center">
          <img
            :src="testimonialImage"
            class="testimonial-img flex-shrink-0"
            alt=""
          />
          <div>
            <h3>{{ nameTitle }}</h3>
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
         {{ testimonialDescription }}
          <i class="bi bi-quote quote-icon-right"></i>
        </p>
      </div>
    </div>
  </div>
  <!-- End testimonial item -->
</template>
<script>
export default {
  props: {
    nameTitle: {
      type: String,
      default: 'Saul Goodman'
    },
    namePosition: {
      type: String,
      default: 'Ceo & Founder'
    },
    testimonialDescription: {
      type: String,
      default: ' Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.'
    },
    testimonialImage: {
      type: String,
      default: 'assets2/img/testimonials/testimonials-1.jpg'
    }
  }
}
</script>
