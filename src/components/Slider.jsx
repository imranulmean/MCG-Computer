import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Carousel } from "flowbite-react";

export default function Slider() {
    return (
        <section class="h2_banner-area">
          <div class="h2_single-banner">
              <div class="container">
                  <div class="row align-items-center">
                      <div class="col-xl-6 col-lg-6 col-md-12">
                          <div class="h2_banner-content">
                              <div class="section-area-2 mb-45 ">
                                  <h1 class="section-title">Your trusted partner in IT security and Reliable IT Support</h1>
                                  <p class="section-text">Partner with MCG Computer for Cost-Effective IT Solutions backed by technical expertise and more than 30 years of experience.</p>
                              </div>
                              <span class="h2_banner-content-text">Discuss your IT needs with our experts today</span>
                              <a href="#" class="theme-btn theme-btn-big">Contact Us</a>
                          </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 d-none d-lg-block">
                          <div class="h2_banner-right pl-80">
                              <div class="h2_banner-img">
                                  <img src="https://arunodhai.com/MCG-Computer/newPage/assets/img/mcg/banner-image1.png" alt="" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>
      );
}
