<template>
<SideMenuAdmin />
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
        <h2>Create Service we Provide or Update The Current Service</h2>
      </div>
    </div>
    <div class="row">
    <MainContentServive
  v-for="(service, key) in services"
  :key="key"
  :id="service.id"
  :cols="service.cols"
  :iconBox="service.iconBox"
  :titleClass="service.titleClass"
  :title="service.title"
  :description="service.description"
  :descriptionClass="service.descriptionClass"
  @updateService="updateService"
  @deleteService="deleteService"/>
  </div><br>
    <div class="row">
      <div class="col-12 col-xl-7">
        <div class="card card-body border-0 shadow mb-4">
          <h2 class="h5 mb-4">
            Fill The Information to Create Service We Provide
          </h2>
          <form>
            <div class="row">
              <div class="col-sm-9 mb-3">
                <div class="form-group">
                  <label for="address">Header Title of Service</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Entering Header Title of About Us"
                    v-model="title"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-9 mb-3">
                <div class="form-group">
                  <label for="address"
                    >Content body of Service we Provide</label
                  >
                  <textarea
                    class="form-control"
                    rows="4"
                    placeholder="Entering or Update Content of About Us "
                    v-model="description"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <button v-if="saveBtn"
                class="btn btn-gray-800 mt-2 animate-up-2 bx-pull-right"
                type="button" @click="submitService();"
              >
                Save all
              </button>
              <button v-if="updateBtn"
                class="btn btn-gray-800 mt-2 animate-up-2 bx-pull-right"
                type="button" @click="updateServiceBtn();"
              >
                Update All
              </button>
            </div>
          </form>
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
import SideMenuAdmin from '../components/SideMenuAdmin.vue'
import MainContentServive from '../components/MainContentServive.vue'
import axios from 'axios'
// import { errorHandlingMixins } from '../mixins/errorHandlingMixins.js'
export default {
//   mixins: [errorHandlingMixins],
  components: {
    SideMenuAdmin,
    MainContentServive
  },
  data () {
    return {
      title: '',
      description: '',
      services: [],
      saveBtn: true,
      updateBtn: false
    }
  },
  methods: {
    updateService () {
      this.title = this.$store.state.title
      this.description = this.$store.state.description
      this.updateBtn = true
      this.saveBtn = false
    },
    async deleteService () {
      const serviceID = this.$store.state.serviceId
      try {
        const response = await axios.delete(
          'http://127.0.0.1:8000/api/delete-service/' + serviceID
        )
        alert(response.data)
        this.saveBtn = true
        this.updateBtn = false
        this.getServiceData()
      } catch (error) {
        // if (error.response === undefined) {
        //   this.$noty.error('somethinng wrong please contact support')
        //   return
        // }

        // if (error.response.data.errors) {
        //   this.$noty.error(error.response.data.errors[0])
        //   return
        // }
        // if (error.response.data.message) {
        //   this.$noty.error(error.response.data.message)
        // }
      }
    },
    async submitService () {
      const data = {
        title: this.title,
        description: this.description
      }
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/api/create-service', data
        )
        alert(response.data)
        this.title = ''
        this.description = ''
        this.getServiceData()
      } catch (error) {
        // if (error.response === undefined) {
        //   this.$noty.error('somethinng wrong please contact support')
        //   return
        // }

        // if (error.response.data.errors) {
        //   this.$noty.error(error.response.data.errors[0])
        //   return
        // }
        // if (error.response.data.message) {
        //   this.$noty.error(error.response.data.message)
        // }
      }
    },
    async updateServiceBtn () {
      const serviceID = this.$store.state.serviceId
      const data = {
        title: this.title,
        description: this.description
      }
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/api/update-service/' + serviceID, data
        )
        alert(response.data)
        this.title = ''
        this.description = ''
        this.saveBtn = true
        this.updateBtn = false
        this.getServiceData()
      } catch (error) {
        // if (error.response === undefined) {
        //   this.$noty.error('somethinng wrong please contact support')
        //   return
        // }

        // if (error.response.data.errors) {
        //   this.$noty.error(error.response.data.errors[0])
        //   return
        // }
        // if (error.response.data.message) {
        //   this.$noty.error(error.response.data.message)
        // }
      }
    },
    async getServiceData () {
      try {
        const response = await axios.get(
          'http://127.0.0.1:8000/api/list-services'
        )
        this.services = response.data.services
        this.$Progress.finish()
      } catch (error) {
        // if (error.response === undefined) {
        //   this.$noty.error('somethinng wrong please contact support')
        //   return
        // }

        // if (error.response.data.errors) {
        //   this.$noty.error(error.response.data.errors[0])
        //   return
        // }
        // if (error.response.data.message) {
        //   this.$noty.error(error.response.data.message)
        // }
      }
    }
  },
  mounted () {
    this.getServiceData()
  }
}
</script>
