<template>
  <div
    :class="colsTeam"
    data-aos="zoom-in"
    data-aos-delay="100"
  >
    <div class="member">
      <img :src="imageTeam" class="img-fluid" alt="" />
      <div class="member-info">
        <div class="member-info-content">
          <h4>{{ teamTitle }}</h4>
          <span>{{ teamPosition }}</span>
        </div>
        <div class="social">
          <a :href="twitterLink"><i class="bi bi-twitter"></i></a>
          <a :href="facebookLink" style="margin-left: 10px"
            ><i class="bi bi-facebook"></i
          ></a>
          <a :href="instagramLink" style="margin-left: 10px"
            ><i class="bi bi-instagram"></i
          ></a>
          <a :href="linkedlnLink" style="margin-left: 10px"
            ><i class="bi bi-linkedin"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    colsTeam: {
      type: String,
      default: 'col-xl-3 col-lg-4 col-md-6'
    },
    imageTeam: {
      type: String,
      default: 'assets/img/team/team-1.jpg'
    },
    teamTitle: {
      type: String,
      default: 'Walter White'
    },
    teamPosition: {
      type: String,
      default: 'Chief Executive Officer'
    },
    twitterLink: {
      type: String,
      defaullt: ''
    },
    facebookLink: {
      type: String,
      default: ''
    },
    instagramLink: {
      type: String,
      default: ''
    },
    linkedlnLink: {
      type: String,
      default: ''
    }
  }
}
</script>
