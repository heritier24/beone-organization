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
        <h2>Import Logo of Clients Trusted Us</h2>
      </div>
    </div>
     <div class="row">
        <LogoClients
        v-for="(logo, key) in logos"
        :key="key"
        :logoID="logo.logoID"
        :colImage="logo.colImage"
        :logoImage="logo.imagePathLogo" />
     </div>
    <div class="row">
      <div class="col-12 col-xl-5">
        <div class="row">
          <div class="col-12">
            <div class="card card-body border-0 shadow mb-4">
              <h2 class="h5 mb-4">Select Logo To Display Image Logo</h2>
              <div class="form-group">
                  <input
                    class="form-control"
                    type="file"
                    placeholder="No."
                    @change="handleFileChange"
                  />
                  <br>
                </div>
            </div>
            <button type="button" class="btn btn-gray-800 mt-2 animate-up-2 bx-pull-right" @click="submitLogo();">Submit Logo</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import axios from 'axios'
import LogoClients from './LogoClients.vue'
export default {
  components: {
    LogoClients
  },
  data () {
    return {
      image_path: '',
      logos: []
    }
  },
  methods: {
    handleFileChange (event) {
      this.image_path = event.target.files[0]
    },
    async submitLogo () {
      const formData = new FormData()
      formData.append('image_path', this.image_path)
      console.log('form data response:' + formData.image_path)
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/api/create-clients-trustedus', formData, {
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
    async updateHeroSection () {
      const formData = new FormData()
      formData.append('title', this.title)
      formData.append('body', this.body)
      formData.append('image_path', this.image_path)
      console.log('form data response:' + formData.title + formData.body + formData.image_path)
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/api/update-about/' + this.sectionID, formData, {
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
          'http://127.0.0.1:8000/api/list-clients-trustedus'
        )
        this.logos = response.data
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
