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
        <h2>Create Or Update Teams Section</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-xl-7">
        <div class="card card-body border-0 shadow mb-4">
          <h2 class="h5 mb-4">
            Fill The Information or Update Information of Teams Section
          </h2>
          <form>
            <div class="row">
              <div class="col-sm-6 mb-3">
                <div class="form-group">
                  <label for="address">Team title</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="teamTitle"
                    placeholder="Team Titlle"
                  />
                </div>
                <div class="form-group">
                  <label for="address">Twitter Link</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="twitterLink"
                    placeholder="Twitter Link"
                  />
                </div>
              </div>
              <div class="col-sm-6 mb-3">
                <div class="form-group">
                  <label for="address">Team Position</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="teamPosition"
                    placeholder="Team Position"
                  />
                </div>
                <div class="form-group">
                  <label for="address">FaceBook Link</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="facebookLink"
                    placeholder="Facebook LInk"
                  />
                </div>
              </div>
               <div class="col-sm-6 mb-3">
                <div class="form-group">
                  <label for="address">Instagram Link</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="instagramLink"
                    placeholder="Instagram Link"
                  />
                </div>
              </div>
              <div class="col-sm-6 mb-3">
                <div class="form-group">
                  <label for="address">LInkedln Link</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="linkedlnLink"
                    placeholder="Linkedln Link"
                  />
                </div>
              </div>
            </div>
            <div class="mt-3">
              <button
                v-if="submitBtn"
                class="btn btn-gray-800 mt-2 animate-up-2 bx-pull-right"
                type="button"
                @click="submitTeams()"
              >
                Save all
              </button>
              <button
                v-if="updateBtn"
                class="btn btn-gray-800 mt-2 animate-up-2 bx-pull-right"
                type="button"
                @click="updateTeams()"
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
              <h2 class="h5 mb-4">Select Team Image Photo</h2>
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
    <div class="row gy-4">
      <div class="slides-3 swiper" data-aos="fade-up" data-aos-delay="100">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="testimonial-wrap">
              <div class="row">
                <ContentTeamItem
                v-for="(team, key) in teams"
                :key="key"
                :colsTeam="team.colsTeam"
                :imageTeam="team.imagePathTeam"
                :teamTitle="team.teamTitle"
                :teamPosition="team.teamPosition"
                :facebookLink="team.facebookLink"
                :instagramLink="team.instagramLink"
                :linkedlnLink="team.linkedlnLink"
                :twitterLink="team.twitterLink" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import axios from 'axios'
import ContentTeamItem from './ContentTeamItem.vue'
export default {
  components: {
    ContentTeamItem
  },
  data () {
    return {
      submitBtn: true,
      updateBtn: false,
      teamTitle: '',
      teamPosition: '',
      twitterLink: '',
      facebookLink: '',
      instagramLink: '',
      linkedlnLink: '',
      image_path: '',
      teams: [
        {
          colsTeam: 'col-xl-3 col-lg-3 col-md-6',
          imageTeam: 'assets/img/team/team-1.jpg',
          teamTitle: 'Heritier Ganza tamba',
          teamPosition: 'Software Developer'
        },
        {
          colsTeam: 'col-xl-3 col-lg-3 col-md-6',
          imageTeam: 'assets/img/team/team-1.jpg',
          teamTitle: 'Heritier Ganza tamba',
          teamPosition: 'Software Developer'
        },
        {
          colsTeam: 'col-xl-3 col-lg-3 col-md-6',
          imageTeam: 'assets/img/team/team-1.jpg',
          teamTitle: 'Heritier Ganza tamba',
          teamPosition: 'Software Developer'
        },
        {
          colsTeam: 'col-xl-3 col-lg-3 col-md-6',
          imageTeam: 'assets/img/team/team-1.jpg',
          teamTitle: 'Heritier Ganza tamba',
          teamPosition: 'Software Developer'
        },
        {
          colsTeam: 'col-xl-3 col-lg-3 col-md-6',
          imageTeam: 'assets/img/team/team-1.jpg',
          teamTitle: 'Heritier Ganza tamba',
          teamPosition: 'Software Developer'
        }
      ]
    }
  },
  methods: {
    handleFileChange (event) {
      this.image_path = event.target.files[0]
    },
    async submitTeams () {
      const formData = new FormData()
      formData.append('teamTitle', this.teamTitle)
      formData.append('teamPosition', this.teamPosition)
      formData.append('twitterLink', this.twitterLink)
      formData.append('facebookLink', this.facebookLink)
      formData.append('instagramLink', this.instagramLink)
      formData.append('linkedlnLink', this.linkedlnLink)
      formData.append('image_path', this.image_path)
      console.log('form data response:' + formData.teamTitle + formData.teamPosition + formData.twitterLink + formData.facebookLink + formData.instagramLink + formData.linkedlnLink + formData.image_path)
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/api/create-teams', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        )
        alert(response.data)
        this.retreiveTeams()
      } catch (error) {
        alert(error.message)
        console.log(error.message)
      }
    },
    async retreiveTeams () {
      try {
        const response = await axios.get(
          'http://127.0.0.1:8000/api/list-services'
        )
        this.teams = response.data.teamsSection
      } catch (error) {
        alert(error.message)
        console.log(error.message)
      }
    },
    updateTeams () {
      alert('update teams')
    }
  },
  mounted () {
    this.retreiveTeams()
  }
}
</script>
