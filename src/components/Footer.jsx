import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
export default function FooterCom() {
  return (
          <footer class="footer-area">
            <div class="footer-top" style={{'padding':'60px 0'}}>
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-xl-3 col-lg-7 col-md-7 col-sm-12 d-flex justify-content-xl-center">
                            <div class="footer-widget">
                                <div class="footer-logo">
                                    <Link to="/">
                                      <img src="assets/img/MCG-footer-logo.png" alt="" />
                                    </Link>
                                </div>
                                <p class="footer-widget-text">
                                    MCG Computer, a leading IT company based in Melbourne since 1991, delivers managed IT services and solutions designed to enhance your business's value by reducing IT costs and safeguarding against data loss.
                                </p>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-5 col-md-5 col-sm-6 d-flex justify-content-xl-center">
                            <div class="footer-widget">
                                <h5 class="footer-widget-title">Quick Link</h5>
                                <div class="footer-widget-list">
                                    <ul>
                                        <li><Link to="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Service</Link></li>
                                        <li><Link to="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FAQ</Link></li>
                                        <li><Link to="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Testimonial</Link></li>
                                        <li><Link to="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-5 col-md-5 col-sm-6 d-flex justify-content-xl-center order-md-4 order-xl-3">
                            <div class="footer-widget">
                                <h5 class="footer-widget-title">Our Services</h5>
                                <div class="footer-widget-list">
                                    <ul>
                                        <li><Link to="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hosting Solution</Link></li>
                                        <li><Link to="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cyber Security</Link></li>
                                        <li><Link to="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Network Analysis</Link></li>
                                        <li><Link to="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data Recovery</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-7 col-md-7 col-sm-12 order-md-3 order-xl-4">
                            <div class="footer-widget ml-80">
                                <h5 class="footer-widget-title">Follow Us</h5>
                                <p class="footer-widget-text mb-20 newsletter-text">The latest news, articles, sent to your inbox weekly.</p>
                                <div class="footer-social">
                                    <ul>
                                        <li><Link to="/"><i class="fa-brands fa-twitter"></i></Link></li>
                                        <li><Link to="/"><i class="fa-brands fa-facebook-f"></i></Link></li>
                                        <li><Link to="/"><i class="fa-brands fa-linkedin-in"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-area">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="copyright-text">
                                <p>Copyright © 2024 All Rights Reserved by MCG Computers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </footer>
  );
}
