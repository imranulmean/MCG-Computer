import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Carousel } from "flowbite-react";
import { useEffect } from 'react';

export default function HomeComponent() {
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
        {/* ///////// banner area start /////////// */}
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
                              <div class="h2_banner-img" style={{"width":"420px"}}>
                                  <img src="/assets/img/banner-image1.png" alt=""/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>
        {/* //////////////////// banner area end ////////////////// */}

        {/* ////////////////// counter area start //////////////// */}
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
        {/* //////////////////// counter area end /////////////////// */}

        {/* ///////////////////// services area start ///////////////// */}
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
                              <img src="/assets/img/28.png" />
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
                              <img src="/assets/img/20.png" />
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
                              <img src="/assets/img/26.png" />
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
        {/* /////////////////////////  services area end /////////////////// */}

        {/* ////////////////////// Results area start ////////////////// */}
        <section class="h8_about-area pt-100 pb-45">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-6 col-lg-6">
                        <div class="h8_about-img mr-35 mb-20">
                            <iframe width="100%" height="380" src="https://www.youtube.com/embed/Igr_9vOTEg8?si=jOBgsmH502nPOvmn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="h8_about-wrap ml-30 mb-50">
                            <div class="section-area mb-30">
                                <h2 class="section-title mb-20">Maximize Efficiency with IT Services that Deliver Real Results</h2>
                            </div>
                            <div class="h8_about-content">
                                <div class="h8_about-content-item">
                                    <h4 class="h8_about-content-item-title">100% Money Back Guarantee</h4>
                                    <p class="h8_about-content-item-text">on data recovery and data loss prevention services </p>
                                </div>
                                <div class="h8_about-content-item">
                                    <h4 class="h8_about-content-item-title">24x7x365 days support</h4>
                                    <p class="h8_about-content-item-text">Online Course Quickly From Anywhere &amp; anytime.</p>
                                </div>
                            </div>
                            <div class="h8_about-content">
                                <div class="h8_about-content-item">
                                    <h4 class="h8_about-content-item-title">$2 per day</h4>
                                    <p class="h8_about-content-item-text">Our IT maintenance and outsourcing services start at $2 per day</p>
                                </div>
                                <div class="h8_about-content-item">
                                    <h4 class="h8_about-content-item-title">100% Satisfaction</h4>
                                    <p class="h8_about-content-item-text">is our guarantee for expert IT Services. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* ///////////////////////// Results area end /////////////////////         */}

        {/* ///////////////////// Why Choose Area /////////////////////// */}
        <div class="h4_faq-area pt-45 pb-45">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-6 col-lg-6">
                        <div class="about-img mb-50">
                            <img class="rounded" src="assets/img/our-promise.png" alt="" />
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-10">
                        <div class="about-content mb-50">
                            <div class="section-area mb-20">
                                <h2 class="section-title mb-15">Our Promise</h2>
                                <p class="section-text">
                                    At MCG Computers Australia, Our mission is to provide our customers with the best possible secure managed technology services and solutions. Cyber security is at the centre of everything we do, and we are committed to protecting our customers from cyber threats.
                                </p>
                                <p class="section-text">
                                    Whether it’s implementing modern workplace solutions or providing cyber security services, we are dedicated to delivering exceptional managed services, expertise and support to help you achieve your best in business.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* /////////////////////// counter area start ////////////////// */}
        <div class="h8_counter-area bg-default pt-100 pb-100" data-background="assets/img/statistics-bg.png" style={{"background-image":"url(assets/img/statistics-bg.png)"}}>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-10">
                        <div class="testimonial-section-area text-center">
                            <div class="section-area mb-55">
                                <h2 class="section-title mb-20">Our statistics speak for themselves</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center mt-50">
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="h8_counter-item justify-content-center mb-25">
                            <div class="h8_counter-info">
                                <div class="h8_counter-info-icon">
                                    <i class="fa-solid fa-stars"></i>
                                </div>
                                <h3 class="h8_counter-info-title">
                                    <span class="count_one odometer odometer-auto-theme" data-count="92"><div class="odometer-inside"><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">9</span></span></span></span></span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">2</span></span></span></span></span></div></span><span>%</span>
                                </h3>
                                <span class="h8_counter-info-text">Satisfaction Rating Across All Clients</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="h8_counter-item justify-content-center mb-25">
                            <div class="h8_counter-info">
                                <div class="h8_counter-info-icon">
                                    <i class="fa-solid fa-laptop"></i>
                                </div>
                                <h3 class="h8_counter-info-title">
                                    <span class="count_one odometer odometer-auto-theme" data-count="90"><div class="odometer-inside"><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">9</span></span></span></span></span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">0</span></span></span></span></span></div></span><span>%</span>
                                </h3>
                                <span class="h8_counter-info-text">Of Requests Resolved Within One Business Day</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="h8_counter-item justify-content-center mb-25">
                            <div class="h8_counter-info">
                                <div class="h8_counter-info-icon">
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                                <h3 class="h8_counter-info-title">
                                    <span class="count_one odometer odometer-auto-theme" data-count="97"><div class="odometer-inside"><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">9</span></span></span></span></span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">7</span></span></span></span></span></div></span><span>%</span>
                                </h3>
                                <span class="h8_counter-info-text">Of Calls Answered Inside 30 Seconds</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="h8_counter-item justify-content-center mb-25">
                            <div class="h8_counter-info">
                                <div class="h8_counter-info-icon">
                                    <i class="fa-solid fa-trophy"></i>
                                </div>
                                <h3 class="h8_counter-info-title">
                                    <span class="count_one odometer odometer-auto-theme" data-count="300"><div class="odometer-inside"><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">3</span></span></span></span></span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">0</span></span></span></span></span><span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value">0</span></span></span></span></span></div></span><span>%</span>
                                </h3>
                                <span class="h8_counter-info-text">Increased IT ROI Value</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* ////////////////////// counter area end ////////////////// */}

        {/* //////////////////////// brand area start //////////////////// */}
        <div class="brand-area h6_brand-area pt-140 pb-140">
            <div class="container">
                <div class="section-area text-center mb-100">
                    <h2 class="section-title mb-0">We partner with leading technology brands</h2>
                </div>
                <div class="brand-wrap">
                    <div class="brand-active-2 swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="brand-item">
                                    <img src="assets/img/1.png" alt="" class="brand-hover-img" />
                                    <img src="assets/img/1.png" alt="" class="brand-main-img" />
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="brand-item">
                                    <img src="assets/img/2.png" alt="" class="brand-hover-img" />
                                    <img src="assets/img/2.png" alt="" class="brand-main-img" />
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="brand-item">
                                    <img src="assets/img/3.png" alt="" class="brand-hover-img" />
                                    <img src="assets/img/3.png" alt="" class="brand-main-img" />
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="brand-item">
                                    <img src="assets/img/4.png" alt="" class="brand-hover-img" />
                                    <img src="assets/img/4.png" alt="" class="brand-main-img" />
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="brand-item">
                                    <img src="assets/img/5.png" alt="" class="brand-hover-img" />
                                    <img src="assets/img/5.png" alt="" class="brand-main-img" />
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="brand-item">
                                    <img src="assets/img/6.png" alt="" class="brand-hover-img" />
                                    <img src="assets/img/6.png" alt="" class="brand-main-img" />
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="brand-item">
                                    <img src="assets/img/7.png" alt="" class="brand-hover-img" />
                                    <img src="assets/img/7.png" alt="" class="brand-main-img" />
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="brand-item">
                                    <img src="assets/img/8.png" alt="" class="brand-hover-img" />
                                    <img src="assets/img/8.png" alt="" class="brand-main-img" />
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="brand-item">
                                    <img src="assets/img/9.png" alt="" class="brand-hover-img" />
                                    <img src="assets/img/9.png" alt="" class="brand-main-img" />
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="brand-item">
                                    <img src="assets/img/10.png" alt="" class="brand-hover-img" />
                                    <img src="assets/img/10.png" alt="" class="brand-main-img" />
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="brand-item">
                                    <img src="assets/img/11.png" alt="" class="brand-hover-img" />
                                    <img src="assets/img/11.png" alt="" class="brand-main-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* ///////////////////// brand area end ///////////////////              */}
        
        {/* //////////////// cta area start ///////////////// */}
        <div class="h3_cta-area">
            <div class="container">
                <div class="cta-wrapper">
                    <div class="row align-items-center">
                        <div class="col-xl-2 col-lg-6 p-25">
                            <img src="assets/img/contact-logo.png" />
                        </div>
                        <div class="col-xl-8 col-lg-6 pl-40 pt-2">
                            <div class="cta-content mb-30 mb-lg-0">
                                <h2 class="cta-title">Consult with our IT experts today</h2>
                                <p>Whether you're just starting your journey to the cloud, looking to optimise your existing infrastructure or improve your cyber security posture, we're here to help.</p>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-6">
                            <div class="cta-button">
                                <a href="#" class="theme-btn">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* ///////////////// cta area end ////////////////  */}
      </>  
    );
}
