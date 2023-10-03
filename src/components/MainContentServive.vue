<template>
          <div
            :class="cols"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div :class="iconBox">
              <!-- <div class="icon"><i class="bx bxl-dribbble"></i></div> -->
              <br />
              <h4 class="title"><a href="">{{ title }}</a><span hidden>{{ id }}</span></h4>
              <p :class="descriptionClass">
                {{ description }}
              </p>
              <div>
                <button type="button" class="btn btn-success" @click="updateService();">Update</button>
                <button type="button" class="btn btn-danger" style="margin-left:5px;" @click="deleteService();">Delete</button>
            </div>
            </div>
          </div>
</template>
<script>
export default {
  props: {
    cols: {
      type: String,
      default: 'col-md-6 col-lg-3 d-flex align-items-stretch'
    },
    iconBox: {
      type: String,
      default: 'icon-box'
    },
    title: {
      type: String,
      default: 'Secure'
    },
    titleClass: {
      type: String,
      default: 'title'
    },
    description: {
      type: String,
      default: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate'
    },
    descriptionClass: {
      type: String,
      default: 'description'
    },
    id: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateService () {
      const serviceId = this.id
      const title = this.title
      const description = this.description
      this.$store.commit('setServiceId', serviceId)
      this.$store.commit('setTitle', title)
      this.$store.commit('setDescription', description)
      this.$emit('updateService')
    },
    deleteService () {
      const serviceId = this.id
      const title = this.title
      const description = this.description
      this.$store.commit('setServiceId', serviceId)
      this.$store.commit('setTitle', title)
      this.$store.commit('setDescription', description)
      this.$emit('deleteService')
    }
  }
}
</script>
