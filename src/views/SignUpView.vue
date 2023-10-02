<template>
  <div>
    <main>
      <!-- Section -->
      <section class="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
        <div class="container">
          <p class="text-center">
            <a
              href="/"
              class="d-flex align-items-center justify-content-center"
            >
              <svg
                class="icon icon-xs me-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Back to homepage
            </a>
          </p>
          <div
            class="row justify-content-center form-bg-image"
            data-background-lg="../../assets/img/illustrations/signin.svg"
          >
            <div
              class="col-12 d-flex align-items-center justify-content-center"
            >
              <div
                class="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500"
              >
                <div class="text-center text-md-center mb-4 mt-md-0">
                  <h1 class="mb-0 h3">Create Account</h1>
                </div>
                <form action="#" class="mt-4">
                  <!-- Form -->
                  <div class="form-group mb-4">
                    <label>Your Names</label>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Names"
                      />
                    </div>
                  </div>
                  <!-- End of Form -->
                  <!-- Form -->
                  <div class="form-group mb-4">
                    <label for="email">Your Email</label>
                    <div class="input-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="example@company.com"
                        id="email"
                        autofocus
                        required
                      />
                    </div>
                  </div>
                  <!-- End of Form -->
                  <div class="form-group">
                    <!-- Form -->
                    <div class="form-group mb-4">
                      <label for="password">Your Password</label>
                      <div class="input-group">
                        <input
                          type="password"
                          placeholder="Password"
                          class="form-control"
                          id="password"
                          required
                        />
                      </div>
                    </div>
                    <!-- End of Form -->
                    <!-- Form -->
                    <div class="form-group mb-4">
                      <label for="confirm_password">User Type</label>
                      <div class="input-group">
                        <select class="form-control">
                            <option value="">Student</option>
                            <option>Mentor</option>
                        </select>
                      </div>
                    </div>
                    <!-- End of Form -->
                    <div class="mb-4">
                    </div>
                  </div>
                  <div class="d-grid">
                    <button type="submit" class="btn btn-gray-800">
                      Sign up
                    </button>
                  </div>
                </form>
                <div
                  class="d-flex justify-content-center align-items-center mt-4"
                >
                  <span class="fw-normal">
                    Already have an account?
                    <a href="/login" class="fw-bold">Login here</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
