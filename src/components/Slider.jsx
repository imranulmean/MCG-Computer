import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Carousel } from "flowbite-react";
import { useEffect } from 'react';

export default function Slider() {
      useEffect(() => {
        // Select all elements with the 'count_one' class
        const odometerElements = document.querySelectorAll('.count_one');
        
        // Loop through each element to initialize and set the odometer
        odometerElements.forEach((el) => {
            const targetValue = parseInt(el.getAttribute('data-count')) || 0; // Use data-count attribute or default to 0

            // Initialize Odometer for each element
            el.odometer = new Odometer({
                el: el,
                value: 0,
            });

            // Update to target value
            el.odometer.update(targetValue);
        });
    }, []);  
    return (
      <>
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

        <div class="counter-area pt-45 pb-45">
            <div class="container">
                <div class="counter-wrap">
                    <div class="row g-0">
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div class="counter-item">
                                <div class="counter-icon">
                                    <i class="fa-thin fa-stars"></i>
                                </div>
                                <div class="counter-info">
                                    <h3 class="counter-info-title">
                                        <span class="odometer count_one" data-count="30">00</span>
                                        <span>+</span>
                                    </h3>
                                    <span class="counter-info-text">Years of Experience</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div class="counter-item">
                                <div class="counter-icon">
                                    <i class="fa-thin fa-award"></i>
                                </div>
                                <div class="counter-info">
                                    <h3 class="counter-info-title">
                                        <span class="odometer count_one" data-count="100">00</span>
                                        <span>+</span>
                                    </h3>
                                    <span class="counter-info-text">Certified Engineers</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div class="counter-item1">
                                <div class="counter-icon">
                                    <i class="fa-thin fa-users"></i>
                                </div>
                                <div class="counter-info">
                                    <h3 class="counter-info-title">
                                        <span class="odometer count_one" data-count="500">00</span>
                                        <span>+</span>
                                    </h3>
                                    <span class="counter-info-text">Clients</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="h3_category-area pt-45 pb-45">
                <div class="container">
                    <div class="row align-items-end mb-30">
                        <div class="section-area">
                            <h2 class="section-title text-center mb-0">Proactive IT Solutions Designed to Fuel Your Success</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-3 col-lg-6">
                            <a href="#"><div class="h3_category-item mb-30">
                                <div class="h3_category-item-icon">
                                    <img src="assets/img/mcg/icons/home/28.png" />
                                </div>
                                <div class="h3_category_inner">
                                    <div class="h3_category-item-content">
                                        <h5>Cyber Security</h5>
                                        <p>Our cyber security solutions are designed to protect your data and keep it secure, as well as meet Australian regulatory requirements. Our solutions are always aligned with the current legal landscape.</p>
                                    </div>
                                </div>
                                <div class="service_btn"><div class="h3_category_link">
                                    <div>Learn More</div>
                                    <div><i class="fa-thin fa-arrow-up-right"></i></div>
                                </div></div>
                            </div></a>
                        </div>    
                        <div class="col-xl-3 col-lg-6">
                            <a href="#"><div class="h3_category-item mb-30">
                                <div class="h3_category-item-icon">
                                    <img src="assets/img/mcg/icons/home/20.png" />
                                </div>
                                <div class="h3_category_inner">
                                    <div class="h3_category-item-content">
                                        <h5>Managed services</h5>
                                        <p>We provide comprehensive and secure managed technology services to help you get the most out of your business in Australia. Our team of professionals has extensive knowledge and expertise in various technologies.</p>
                                    </div>
                                </div>
                                <div class="service_btn"><div class="h3_category_link">
                                    <div>Learn More</div>
                                    <div><i class="fa-thin fa-arrow-up-right"></i></div>
                                </div></div>
                            </div></a>
                        </div>
                        <div class="col-xl-3 col-lg-6">
                            <a href="#"><div class="h3_category-item mb-30">
                                <div class="h3_category-item-icon">
                                    <img src="assets/img/mcg/icons/home/26.png" />
                                </div>
                                <div class="h3_category_inner">
                                    <div class="h3_category-item-content">
                                        <h5>Cloud Solutions</h5>
                                        <p>Utilise our advanced communication and collaboration technology solutions to optimise productivity and enable seamless hybrid or remote work capabilities for your team.</p>
                                    </div>
                                </div>
                                <div class="service_btn"><div class="h3_category_link">
                                    <div>Learn More</div>
                                    <div><i class="fa-thin fa-arrow-up-right"></i></div>
                                </div></div>
                            </div></a>
                        </div>
                        <div class="col-xl-3 col-lg-6">
                            <a href="#"><div class="h3_category-item mb-30">
                                <div class="h3_category-item-icon">
                                    <img src="/assets/img/27.png" />
                                </div>
                                <div class="h3_category_inner">
                                    <div class="h3_category-item-content">
                                        <h5>PC and Notebook Repair</h5>
                                        <p>We partner with leading global technology vendors to provideautomated business processes and increase efficiency across your organisation.</p>
                                    </div>
                                </div>
                                <div class="service_btn"><div class="h3_category_link">
                                    <div>Learn More</div>
                                    <div><i class="fa-thin fa-arrow-up-right"></i></div>
                                </div></div>
                            </div></a>
                        </div>
                    </div>
                </div>
            </section>        
      </>  
      );
}
