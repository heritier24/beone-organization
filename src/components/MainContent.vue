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
          <ul class="navbar-nav align-items-center">
          </ul>
        </div>
      </div>
    </nav>

    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4"
    >
      <div>
        <h2>Create Or Update Hero Section View</h2>
      </div>
    </div>
    <div class="row gy-4">
        <div class="col-lg-1"></div>
        <div
          class="col-lg-4"
        >
          <h3 data-aos="fade-up">{{ sectionHomeTitle }}</h3><span hidden>{{ sectionID }}</span>
            <p data-aos="fade-up" data-aos-delay="100">
              {{ sectionHomeContent }}
            </p>
            <div>
                <button type="button" class="btn btn-success" @click="updatebtn();">Update</button>
            </div>
        </div>
        <div class="col-lg-4 order-1 order-lg-2 hero-img">
          <img
            :src="imagePath"
            class="img-fluid animated"
            alt=""
          />
        </div>
      </div>
    <div class="row">
      <div class="col-12 col-xl-7">
        <div class="card card-body border-0 shadow mb-4">
          <h2 class="h5 mb-4">Fill The Information or Update Information of HomePage</h2>
          <form>
            <div class="row">
              <div class="col-sm-9 mb-3">
                <div class="form-group">
                  <label for="address">Header Title of Home</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Entering Header Title of Home"
                    v-model="title"
                  />
                </div>
              </div>
            </div>
             <div class="row">
              <div class="col-sm-9 mb-3">
                <div class="form-group">
                  <label for="address">Sub Header Content</label>
                  <textarea class="form-control" rows="8" placeholder="Entering or Update Content of Home " v-model="body"></textarea>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <button v-if="submitBtn" class="btn btn-gray-800 mt-2 animate-up-2 bx-pull-right" type="button" @click="submitHeroSection();">
                Save all
              </button>
              <button v-if="updateBtn" class="btn btn-gray-800 mt-2 animate-up-2 bx-pull-right" type="button" @click="updateHeroSection();">
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
                    placeholder="No." @change="handleFileChange"
                  />
                  <br>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <footer class="bg-white rounded shadow p-5 mb-4 mt-4">
      <div class="row">
        <div class="col-12 col-md-4 col-xl-6 mb-4 mb-md-0">
          <p class="mb-0 text-center text-lg-start">
            © 2023-<span class="current-year"></span>
            <a
              class="text-primary fw-normal"
              href="https://themesberg.com"
              target="_blank"
              >BeOne Organization</a
            >
          </p>
        </div>
      </div>
    </footer> -->
  </main>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      submitBtn: true,
      updateBtn: false,
      sectionID: '',
      sectionHomeTitle: 'Voluptatem dignissimos provident quasi',
      sectionHomeContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duisaute irure dolor in reprehenderit',
      title: '',
      body: '',
      image_path: null,
      imagePath: 'assets/img/hero-img.svg'
    }
  },
  methods: {
    updatebtn () {
      this.title = this.sectionHomeTitle
      this.body = this.sectionHomeContent
      this.submitBtn = false
      this.updateBtn = true
    },
    handleFileChange (event) {
      this.image_path = event.target.files[0]
    },
    async submitHeroSection () {
      const formData = new FormData()
      formData.append('title', this.title)
      formData.append('body', this.body)
      formData.append('image_path', this.image_path)
      console.log('form data response:' + formData.title + formData.body + formData.image_path)
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/api/create-hero-view', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        )
        alert(response.data)
      } catch (error) {
        alert(error.message)
        console.log(error.message)
      }
    },
    async updateHeroSection () {
      const formData = new FormData()
      formData.append('title', this.title)
      formData.append('body', this.body)
      formData.append('image_path', this.image_path)
      console.log('form data response:' + formData.title + formData.body + formData.image_path)
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/api/update-hero-view/' + this.sectionID, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        )
        alert(response.data)
        this.retreiveHeroSection()
      } catch (error) {
        alert(error.message)
        console.log(error.message)
      }
    },
    async retreiveHeroSection () {
      try {
        const response = await axios.get(
          'http://127.0.0.1:8000/api/hero-view'
        )
        this.sectionID = response.data[0].id
        this.sectionHomeTitle = response.data[0].title
        this.sectionHomeContent = response.data[0].body
        this.imagePath = response.data[0].image_path
      } catch (error) {
        alert(error.message)
        console.log(error.message)
      }
    }
  },
  mounted () {
    this.retreiveHeroSection()
  }
}
</script>
