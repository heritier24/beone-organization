<template>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top d-flex align-items-center">
    <div
      class="container-fluid d-flex align-items-center justify-content-between"
    >
      <div class="logo">
        <h1 class="text-light">
          <a href="#" style="margin-left: 50px"
            >
            <img src="assets/img/beone organization logo.jpeg" alt="">
            <!-- <span>BeOne Organization</span> -->
            </a
          >
        </h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About Us</a></li>
          <li><a class="nav-link scrollto" href="#services">What We Do</a></li>
          <li class="dropdown">
            <a href="#"><span>News</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a class="nav-link scrollto" href="#services">Events</a></li>
              <li>
                <a class="nav-link scrollto" href="#portfolio">Gallery</a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#testimonials"
                  >Testimonials</a
                >
              </li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="#team">Team</a></li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          <!-- <li><a class="getstarted scrollto" href="#about">Get Started</a></li> -->
          <li>
            <a
              class="nav-link scrollto"
              href="/login"
              style="margin-left: 270px"
              >Login</a
            >
          </li>
          <li>
            <a
              class="nav-link scrollto"
              href="#"
              style="margin-right: 30px; color: red;"
              >Donate</a
            >
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <!-- .navbar -->
    </div>
  </header>
  <!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center">
    <div class="container-fluid">
      <div class="row gy-4">
        <div
          class="col-lg-4 order-2 order-lg-1 d-flex flex-column justify-content-center"
          style="margin-right: 0px"
        >
          <h1>{{ sectionHomeTitle }}</h1>
          <h2> {{ sectionHomeContent }},</h2>
          <div>
            <a href="#about" class="btn-get-started scrollto">Get Started</a>
          </div>
        </div>
        <div class="col-lg-2"></div>
        <div class="col-lg-4 order-1 order-lg-2 hero-img">
          <img
            :src="sectionHomeImage"
            class="img-fluid animated"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  <!-- End Hero -->

  <main id="main">
    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container">
        <div class="row justify-content-between">
          <div
            class="col-lg-5 d-flex align-items-center justify-content-center about-img"
          >
            <img
              :src="imageAboutSection"
              class="img-fluid"
              alt=""
              data-aos="zoom-in"
            />
          </div>
          <div class="col-lg-6 pt-5 pt-lg-0">
            <h3 data-aos="fade-up">{{ titleAboutSection }}</h3>
            <p data-aos="fade-up" data-aos-delay="100">
              {{ bodyAboutSection }}
            </p>
            <!-- <div class="row">
              <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <i class="bx bx-receipt"></i>
                <h4>Corporis voluptates sit</h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
              <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <i class="bx bx-cube-alt"></i>
                <h4>Ullamco laboris nisi</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </section>
    <!-- End About Section -->

    <!-- ======= Clients Section ======= -->
    <section id="clients" class="clients section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Clients</h2>
          <p>They trusted us</p>
        </div>

        <div class="row">
          <HomeClientsTruestedUs
          v-for="(client, key) in clients"
          :key="key"
          :colImage="client.colImage"
          :logoID="client.logoID"
          :logoImage="client.imagePathLogo" />
        </div>
      </div>
    </section>
    <!-- End Clients Section -->

    <!-- ======= Services Section ======= -->
    <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Features</h2>
          <p>Amazing Features</p>
        </div>

        <div class="row">
          <HomeServiceSection
          v-for="(service, key) in services"
          :key="key"
          :colSection="service.colSection"
          :title="service.title"
          :description="service.description" />
        </div>
      </div>
    </section>
    <!-- End Services Section -->

    <!-- ======= Testimonials Section ======= -->
    <section id="testimonials" class="testimonials">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>Testimonials</h2>
          <p>
            Voluptatem quibusdam ut ullam perferendis repellat non ut
            consequuntur est eveniet deleniti fignissimos eos quam
          </p>
        </div>

        <div class="slides-3 swiper" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper">
            <HomeTestimonialSectionItem
            v-for="(testimonial, key) in testimonials"
            :key="key"
            :namePosition="testimonial.namePosition"
            :nameTitle="testimonial.nameTitle"
            :testimonialDescription="testimonial.testimonialDescription"
            :testimonialImage="testimonial.imagePathTestimonial" />
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
    <!-- End Testimonials Section -->

    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio sections-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>Portfolio</h2>
          <p>
            Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum
            nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti
          </p>
        </div>

        <div
          class="portfolio-isotope"
          data-portfolio-filter="*"
          data-portfolio-layout="masonry"
          data-portfolio-sort="original-order"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div>
            <ul class="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-product">Product</li>
              <li data-filter=".filter-branding">Branding</li>
              <li data-filter=".filter-books">Books</li>
            </ul>
            <!-- End Portfolio Filters -->
          </div>

          <div class="row gy-4 portfolio-container">
            <div class="col-xl-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <a
                  href="assets2/img/portfolio/app-1.jpg"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                  ><img
                    src="assets2/img/portfolio/app-1.jpg"
                    class="img-fluid"
                    alt=""
                /></a>
                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html" title="More Details"
                      >App 1</a
                    >
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
            <!-- End Portfolio Item -->

            <div class="col-xl-4 col-md-6 portfolio-item filter-product">
              <div class="portfolio-wrap">
                <a
                  href="assets2/img/portfolio/product-1.jpg"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                  ><img
                    src="assets2/img/portfolio/product-1.jpg"
                    class="img-fluid"
                    alt=""
                /></a>
                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html" title="More Details"
                      >Product 1</a
                    >
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
            <!-- End Portfolio Item -->

            <div class="col-xl-4 col-md-6 portfolio-item filter-branding">
              <div class="portfolio-wrap">
                <a
                  href="assets2/img/portfolio/branding-1.jpg"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                  ><img
                    src="assets2/img/portfolio/branding-1.jpg"
                    class="img-fluid"
                    alt=""
                /></a>
                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html" title="More Details"
                      >Branding 1</a
                    >
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
            <!-- End Portfolio Item -->

            <div class="col-xl-4 col-md-6 portfolio-item filter-books">
              <div class="portfolio-wrap">
                <a
                  href="assets2/img/portfolio/books-1.jpg"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                  ><img
                    src="assets2/img/portfolio/books-1.jpg"
                    class="img-fluid"
                    alt=""
                /></a>
                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html" title="More Details"
                      >Books 1</a
                    >
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
            <!-- End Portfolio Item -->

            <div class="col-xl-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <a
                  href="assets2/img/portfolio/app-2.jpg"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                  ><img
                    src="assets2/img/portfolio/app-2.jpg"
                    class="img-fluid"
                    alt=""
                /></a>
                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html" title="More Details"
                      >App 2</a
                    >
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
            <!-- End Portfolio Item -->

            <div class="col-xl-4 col-md-6 portfolio-item filter-product">
              <div class="portfolio-wrap">
                <a
                  href="assets2/img/portfolio/product-2.jpg"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                  ><img
                    src="assets2/img/portfolio/product-2.jpg"
                    class="img-fluid"
                    alt=""
                /></a>
                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html" title="More Details"
                      >Product 2</a
                    >
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
            <!-- End Portfolio Item -->

            <div class="col-xl-4 col-md-6 portfolio-item filter-branding">
              <div class="portfolio-wrap">
                <a
                  href="assets2/img/portfolio/branding-2.jpg"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                  ><img
                    src="assets2/img/portfolio/branding-2.jpg"
                    class="img-fluid"
                    alt=""
                /></a>
                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html" title="More Details"
                      >Branding 2</a
                    >
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
            <!-- End Portfolio Item -->

            <div class="col-xl-4 col-md-6 portfolio-item filter-books">
              <div class="portfolio-wrap">
                <a
                  href="assets2/img/portfolio/books-2.jpg"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                  ><img
                    src="assets2/img/portfolio/books-2.jpg"
                    class="img-fluid"
                    alt=""
                /></a>
                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html" title="More Details"
                      >Books 2</a
                    >
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
            <!-- End Portfolio Item -->

            <div class="col-xl-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <a
                  href="assets2/img/portfolio/app-3.jpg"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                  ><img
                    src="assets2/img/portfolio/app-3.jpg"
                    class="img-fluid"
                    alt=""
                /></a>
                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html" title="More Details"
                      >App 3</a
                    >
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
            <!-- End Portfolio Item -->

            <div class="col-xl-4 col-md-6 portfolio-item filter-product">
              <div class="portfolio-wrap">
                <a
                  href="assets2/img/portfolio/product-3.jpg"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                  ><img
                    src="assets2/img/portfolio/product-3.jpg"
                    class="img-fluid"
                    alt=""
                /></a>
                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html" title="More Details"
                      >Product 3</a
                    >
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
            <!-- End Portfolio Item -->

            <div class="col-xl-4 col-md-6 portfolio-item filter-branding">
              <div class="portfolio-wrap">
                <a
                  href="assets2/img/portfolio/branding-3.jpg"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                  ><img
                    src="assets2/img/portfolio/branding-3.jpg"
                    class="img-fluid"
                    alt=""
                /></a>
                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html" title="More Details"
                      >Branding 3</a
                    >
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
            <!-- End Portfolio Item -->

            <div class="col-xl-4 col-md-6 portfolio-item filter-books">
              <div class="portfolio-wrap">
                <a
                  href="assets2/img/portfolio/books-3.jpg"
                  data-gallery="portfolio-gallery-app"
                  class="glightbox"
                  ><img
                    src="assets2/img/portfolio/books-3.jpg"
                    class="img-fluid"
                    alt=""
                /></a>
                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html" title="More Details"
                      >Books 3</a
                    >
                  </h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
            <!-- End Portfolio Item -->
          </div>
          <!-- End Portfolio Container -->
        </div>
      </div>
    </section>

    <!-- ======= Team Section ======= -->
    <section id="team" class="team">
      <div class="container">
        <div class="section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>Our team is always here to help</p>
        </div>

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
    </section>
    <!-- End Team Section -->

    <!-- ======= Contact Us Section ======= -->
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Contact Us</h2>
          <p>Contact us the get started</p>
        </div>

        <div class="row">
          <div
            class="col-lg-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                frameborder="0"
                style="border: 0; width: 100%; height: 290px"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div
            class="col-lg-6 mt-5 mt-lg-0 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              class="php-email-form"
            >
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div class="form-group col-md-6 mt-3 mt-md-0">
                  <label for="name">Your Email</label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div class="form-group mt-3">
                <label for="name">Subject</label>
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div class="form-group mt-3">
                <label for="name">Message</label>
                <textarea
                  class="form-control"
                  name="message"
                  rows="10"
                  required
                ></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div class="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- End Contact Us Section -->
  </main>
  <!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="footer-newsletter">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <h4>Join Our Newsletter</h4>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
            <form action="" method="post">
              <input type="email" name="email" /><input
                type="submit"
                value="Subscribe"
              />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 footer-contact">
             <!-- <img src="assets/img/beone organization logo.jpeg" alt=""> -->
            <h3>BeOne Organization</h3>
            <p>
              A108 Adam Street <br />
              New York, NY 535022<br />
              United States <br /><br />
              <strong>Phone:</strong> +1 5589 55488 55<br />
              <strong>Email:</strong> info@example.com<br />
            </p>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="#">About us</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="#">Services</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="#">Web Design</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#">Web Development</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#">Product Management</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="#">Marketing</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Social Networks</h4>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
            <div class="social-links mt-3">
              <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
              <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
              <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-4">
      <div class="copyright">
        &copy; Copyright <strong><span>BeOne Organization</span></strong
        >. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/ninestars-free-bootstrap-3-theme-for-creative/ -->
        <!-- Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> -->
      </div>
    </div>
  </footer>
  <!-- End Footer -->

  <a
    href="#"
    class="back-to-top d-flex align-items-center justify-content-center"
    ><i class="bi bi-arrow-up-short"></i
  ></a>
</template>
<script>
import HomeServiceSection from '../components/HomeServiceSection.vue'
import HomeClientsTruestedUs from '../components/HomeClientsTrusted.vue'
import HomeTestimonialSectionItem from '../components/HomeTestimonialSectionItem.vue'
import ContentTeamItem from '../components/ContentTeamItem.vue'
import axios from 'axios'
export default {
  components: {
    HomeServiceSection,
    HomeClientsTruestedUs,
    HomeTestimonialSectionItem,
    ContentTeamItem
  },
  data () {
    return {
      titleAboutSection: '',
      bodyAboutSection: '',
      imageAboutSection: '',
      sectionHomeContent: '',
      sectionHomeTitle: '',
      sectionHomeImage: 'assets/img/hero-img.svg',
      services: [],
      clients: [],
      testimonials: [],
      teams: []
    }
  },
  methods: {
    async getServiceData () {
      try {
        const response = await axios.get(
          'http://127.0.0.1:8000/api/list-services'
        )
        this.services = response.data.services
        this.sectionHomeTitle = response.data.heroTitle
        this.sectionHomeContent = response.data.heroBody
        this.sectionHomeImage = response.data.image_path
        this.titleAboutSection = response.data.aboutTitle
        this.bodyAboutSection = response.data.aboutBody
        this.imageAboutSection = response.data.aboutImagePath
        this.clients = response.data.clientsTrustedUs
        this.testimonials = response.data.testimonialSection
        this.teams = response.data.teamsSection
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
