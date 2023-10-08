<template>
  <main class="content">
    <nav
      class="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0"
    >
      <div class="container-fluid px-0">
        <div
          class="d-flex justify-content-between w-100"
          id="navbarSupportedContent"
        >
          <div class="d-flex align-items-center">
            <!-- Search form -->
            <form class="navbar-search form-inline" id="navbar-search-main">
              <div class="input-group input-group-merge search-bar">
                <span class="input-group-text" id="topbar-addon">
                  <svg
                    class="icon icon-xs"
                    x-description="Heroicon name: solid/search"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <input
                  type="text"
                  class="form-control"
                  id="topbarInputIconLeft"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="topbar-addon"
                />
              </div>
            </form>
            <!-- / Search form -->
          </div>
          <!-- Navbar links -->
          <ul class="navbar-nav align-items-center"></ul>
        </div>
      </div>
    </nav>

    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4"
    >
      <div>
        <h2>Create Or Update Testimonials Section</h2>
      </div>
    </div>
    <div class="row gy-4">
      <div class="slides-3 swiper" data-aos="fade-up" data-aos-delay="100">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="testimonial-wrap">
              <div class="row">
                <TestimonialItemAdmin
                v-for="(testimonial, key) in testimonials"
                :key="key"
                :testimonialID="testimonial.testimonialID"
                :colTestimonial="testimonial.colTestimonial"
                :nameTitle="testimonial.nameTitle"
                :namePosition="testimonial.namePosition"
                :nameDescription="testimonial.nameDescription"
                :testimonialImage="testimonial.imagePathTestimonials"
                @removeTestimonial="removeTestimonial" />
              </div><br>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-xl-7">
        <div class="card card-body border-0 shadow mb-4">
          <h2 class="h5 mb-4">
            Fill The Information or Update Information of Testimonial Section
          </h2>
          <form>
            <div class="row">
              <div class="col-sm-9 mb-3">
                <div class="form-group">
                  <label for="address">Name of Testimonial Client</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="nameTitle"
                    placeholder="Entering Name of Testimonial Client"
                  />
                </div>
                <div class="form-group">
                  <label for="address">Name of position from Testimonial</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="namePosition"
                    placeholder="Entering Name Position from Testimonial"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-9 mb-3">
                <div class="form-group">
                  <label for="address">Description from Testimoniall</label>
                  <textarea
                    class="form-control"
                    rows="8"
                    placeholder="Description from Testimonial"
                    v-model="nameDescription"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <button
                v-if="submitBtn"
                class="btn btn-gray-800 mt-2 animate-up-2 bx-pull-right"
                type="button"
                @click="submitTestimonial()"
              >
                Save all
              </button>
              <button
                v-if="updateBtn"
                class="btn btn-gray-800 mt-2 animate-up-2 bx-pull-right"
                type="button"
                @click="updateTestimonial()"
              >
                Update all
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-12 col-xl-5">
        <div class="row">
          <div class="col-12">
            <div class="card card-body border-0 shadow mb-4">
              <h2 class="h5 mb-4">Select To Display Image photo</h2>
              <div class="form-group">
                <input
                  class="form-control"
                  type="file"
                  placeholder="No."
                  @change="handleFileChange"
                />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import TestimonialItemAdmin from '../components/TestimonialItemAdmin.vue'
import axios from 'axios'
export default {
  components: {
    TestimonialItemAdmin
  },
  data () {
    return {
      submitBtn: true,
      updateBtn: false,
      nameTitle: '',
      namePosition: '',
      nameDescription: '',
      image_path: '',
      testimonials: []
    }
  },
  methods: {
    handleFileChange (event) {
      this.image_path = event.target.files[0]
    },
    async removeTestimonial () {
      const testimonialID = this.$store.state.testimonialID
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/api/remove-testimonial/' + testimonialID
        )
        alert(response.data)
        this.retreiveTestimonials()
      } catch (error) {
        alert(error.message)
        console.log(error.message)
      }
    },
    async submitTestimonial () {
      const formData = new FormData()
      formData.append('nameTitle', this.nameTitle)
      formData.append('namePosition', this.namePosition)
      formData.append('nameDescription', this.nameDescription)
      formData.append('image_path', this.image_path)
      console.log('form data response:' + formData.image_path)
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/api/create-testimonial', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        )
        alert(response.data)
        this.retreiveTestimonials()
      } catch (error) {
        alert(error.message)
        console.log(error.message)
      }
    },
    async retreiveTestimonials () {
      try {
        const response = await axios.get(
          'http://127.0.0.1:8000/api/list-services'
        )
        this.testimonials = response.data.testimonialSection
      } catch (error) {
        alert(error.message)
        console.log(error.message)
      }
    }
  },
  mounted () {
    this.retreiveTestimonials()
  }
}
</script>
