import { Avatar, Button, Dropdown, Navbar, TextInput, Badge } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun, FaBell, FaShoppingCart } from 'react-icons/fa';


export default function Header() {

  return (
    <>
        {/*  sidebar-information-area-start */}
        <div class="sidebar-info side-info">
            <div class="sidebar-logo-wrapper mb-25">
                <div class="row align-items-center">
                    <div class="col-xl-6 col-8">
                        <div class="sidebar-logo">
                            <Link to="/">
                                <img src="assets/img/MCG-Logo.png" alt="logo-img" />
                            </Link>
                        </div>
                    </div>
                    <div class="col-xl-6 col-4">
                        <div class="sidebar-close-wrapper text-end">
                            <button class="sidebar-close side-info-close"><i class="fal fa-times"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sidebar-menu-wrapper fix">
                <div class="mobile-menu"></div>
            </div>
        </div>
        <div class="offcanvas-overlay"></div>
        {/* sidebar-information-area-end      */}
        <header>
          <div class="h7_header-top d-none d-md-block">
              <div class="container">
                  <div class="row align-items-end">
                      <div class="col-lg-4 col-md-4">
                          &nbsp;
                      </div>
                      <div class="col-lg-8 col-md-8">
                          <ul class="h7_header-top-list">
                              <li><a href="#"><i class="fa-light bold fa-user"></i>Customer Hub</a></li>
                              <li><a href="tel:(+65) 123568777"><i class="fa-light bold fa-phone"></i>(+65) 123 568 777</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div> 
          <div class="header-area header-sticky">
              <div class="container">
                  <div class="row align-items-center">
                      <div class="col-xl-4 col-lg-4 col-md-6 col-6">
                          <div class="header-left">
                              <div class="header-logo">
                                  <Link to ="/">
                                    <img src="/assets/img/MCG-Logo.png" alt="" />
                                  </Link>
                              </div>
                          </div>
                      </div>
                      <div class="col-xl-8 col-lg-8 col-md-6 col-6">
                          <div class="header-right">
                              <nav class="main-menu mobile-menu d-none d-xl-block" id="mobile-menu" style={{"display":"block"}}>
                                  <ul>
                                      <li>
                                          <Link to="/">Home</Link>
                                      </li>
                                      <li class="menu-has-child">
                                          <Link to="/">About Us</Link>
                                          <ul class="submenu">
                                              <li><Link to="/">Clients</Link></li>
                                              <li><Link to="/">Vendors</Link></li>
                                              <li><Link to="/">Testimonials</Link></li>
                                          </ul>
                                      </li>
                                      <li class="menu-has-child">
                                          <Link to="/">IT Solutions</Link>
                                          <ul class="submenu">
                                              <li><Link to="/">IT Outsourcing</Link></li>
                                              <li><Link to="/">IT Consulting</Link></li>
                                              <li><Link to="/">Cloud &amp;                 Virtualization</Link></li>
                                              <li><Link to="/">Network &amp; Data Security</Link></li>
                                              <li><Link to="/">Accounting IT Specialist</Link></li>
                                              <li><Link to="/">MS Terminal             Server</Link></li>
                                              <li><Link to="/">Hosted Exchange         </Link></li>
                                              <li><Link to="/">MS Office 365</Link></li>
                                          </ul>
                                      </li>
                                      <li class="menu-has-child">
                                          <Link to="#">IT Services</Link>
                                          <ul class="submenu">
                                              <li><Link to="/">Managed IT Services</Link></li>
                                              <li><Link to="/">Data Backup &amp; Recovery</Link></li>
                                              <li><Link to="/">Onsite &amp; Remote Support</Link></li>
                                              <li><Link to="/">Network Evaluations &amp; Audits</Link></li>
                                              <li><Link to="/">PC and Notebook         Repair</Link></li>
                                              <li><Link to="/">Virus Scanning          and Removal</Link></li>
                                              <li><Link to="/">Website                 Development</Link></li>
                                          </ul>
                                      </li>
                                      <li><Link to="/">Blogs</Link></li>
                                      <li><Link to="/">Contact</Link></li>
                                  </ul>
                              </nav>
                              <div class="header-menu-bar d-xl-none ml-10">
                                  <span class="header-menu-bar-icon side-toggle">
                                      <i class="fa-light fa-bars"></i>
                                  </span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </header>   
    </>

  );
}
