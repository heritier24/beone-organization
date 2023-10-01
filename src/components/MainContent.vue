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
        <button type="button" class="btn btn-secondary d-inline-flex align-items-center me-3">New</button>
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
                    required
                  />
                </div>
              </div>
            </div>
             <div class="row">
              <div class="col-sm-9 mb-3">
                <div class="form-group">
                  <label for="address">Sub Header Content</label>
                  <textarea class="form-control" rows="8" placeholder="Entering or Update Content of Home "></textarea>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <button class="btn btn-gray-800 mt-2 animate-up-2 bx-pull-right" type="submit">
                Save all
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
                    required
                  />
                  <br>
                </div>
              <div class="d-flex align-items-center">
                <div class="me-4">
                  <!-- Avatar -->
                  <img
                    class="rounded avatar-xl"
                    src="assets1/img/team/profile-picture-3.jpg"
                    alt="change avatar"
                  />
                </div>
                <div class="file-field">
                  <div class="d-flex justify-content-xl-center ms-xl-3">
                    <div class="d-flex">
                      <svg
                        class="icon text-gray-500 me-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <input type="file" />
                      <div class="d-md-block text-left">
                        <div class="fw-normal text-dark mb-1">Choose Image</div>
                        <div class="text-gray small">
                          JPG, GIF or PNG. Max size of 800K
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
