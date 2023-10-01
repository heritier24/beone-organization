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
        <h2>Create Service we Provide or Update The Current Service</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-10">
        <div class="row">
          <div
            class="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div class="icon-box">
              <!-- <div class="icon"><i class="bx bxl-dribbble"></i></div> -->
              <br />
              <h4 class="title"><a href="">Secure</a></h4>
              <p class="description">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati cupiditate
              </p>
            </div>
          </div>

          <div
            class="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div class="icon-box">
              <!-- <div class="icon"><i class="bx bx-file"></i></div> -->
              <br />
              <h4 class="title"><a href="">24/7 Support</a></h4>
              <p class="description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla
              </p>
            </div>
          </div>

          <div
            class="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div class="icon-box">
              <!-- <div class="icon"><i class="bx bx-tachometer"></i></div> -->
              <br />
              <h4 class="title"><a href="">Customizable</a></h4>
              <p class="description">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim
              </p>
            </div>
          </div>

          <div
            class="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div class="icon-box">
              <!-- <div class="icon"><i class="bx bx-world"></i></div> -->
              <br />
              <h4 class="title"><a href="">Reliable</a></h4>
              <p class="description">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum
              </p>
            </div>
          </div>
          <div
            class="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div class="icon-box">
              <!-- <div class="icon"><i class="bx bx-world"></i></div> -->
              <br />
              <h4 class="title"><a href="">Reliable</a></h4>
              <p class="description">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
                    required
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
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <button
                class="btn btn-gray-800 mt-2 animate-up-2 bx-pull-right"
                type="submit"
              >
                Save all
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
