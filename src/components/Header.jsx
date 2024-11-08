import { Avatar, Button, Dropdown, Navbar, TextInput, Badge } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun, FaBell, FaShoppingCart } from 'react-icons/fa';


export default function Header() {

  return (
    <>
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
                                  <a href="https://arunodhai.com/MCG-Computer/newPage">
                                    <img src="https://arunodhai.com/MCG-Computer/newPage/assets/img/mcg/MCG-Logo.png" alt="" />
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div class="col-xl-8 col-lg-8 col-md-6 col-6">
                          <div class="header-right">
                              <nav class="main-menu mobile-menu d-none d-xl-block" id="mobile-menu" style={{"display":"block"}}>
                                  <ul>
                                      <li>
                                          <a href="https://arunodhai.com/MCG-Computer/newPage">Home</a>
                                      </li>
                                      <li class="menu-has-child">
                                          <a href="https://arunodhai.com/MCG-Computer/newPage/about-us.php">About Us</a>
                                          <ul class="submenu">
                                              <li><a href="#">Clients</a></li>
                                              <li><a href="#">Vendors</a></li>
                                              <li><a href="https://arunodhai.com/MCG-Computer/newPage/testimonials.php">Testimonials</a></li>
                                          </ul>
                                      </li>
                                      <li class="menu-has-child">
                                          <a href="#">IT Solutions</a>
                                          <ul class="submenu">
                                              <li><a href="https://arunodhai.com/MCG-Computer/newPage/IT-Outsourcing.php">IT Outsourcing          </a></li>
                                              <li><a href="https://arunodhai.com/MCG-Computer/newPage/IT-Consulting.php">IT Consulting</a></li>
                                              <li><a href="https://arunodhai.com/MCG-Computer/newPage/cloud-and-virtualization.php">Cloud &amp;                 Virtualization</a></li>
                                              <li><a href="https://arunodhai.com/MCG-Computer/newPage/network-and-data-security.php">Network &amp; Data Security</a></li>
                                              <li><a href="https://arunodhai.com/MCG-Computer/newPage/accounting-IT-Specialist.php">Accounting IT Specialist</a></li>
                                              <li><a href="https://arunodhai.com/MCG-Computer/newPage/MS-terminal-server.php">MS Terminal             Server</a></li>
                                              <li><a href="https://arunodhai.com/MCG-Computer/newPage/hosted-exchange.php">Hosted Exchange         </a></li>
                                              <li><a href="https://arunodhai.com/MCG-Computer/newPage/MS-Office-365.php">MS Office 365</a></li>
                                          </ul>
                                      </li>
                                      <li class="menu-has-child">
                                          <a href="#">IT Services</a>
                                          <ul class="submenu">
                                              <li><a href="https://arunodhai.com/MCG-Computer/newPage/managed-IT-services.php">Managed IT Services</a></li>
                                              <li><a href="https://arunodhai.com/MCG-Computer/newPage/data-backup-and-recovery.php">Data Backup &amp; Recovery</a></li>
                                              <li><a href="https://arunodhai.com/MCG-Computer/newPage/onsite-and-remote-support.php">Onsite &amp; Remote Support</a></li>
                                              <li><a href="https://arunodhai.com/MCG-Computer/newPage/network-evaluations-and-audits.php">Network Evaluations &amp; Audits</a></li>
                                              <li><a href="https://arunodhai.com/MCG-Computer/newPage/PC-and-Notebook-Repair.php">PC and Notebook         Repair</a></li>
                                              <li><a href="https://arunodhai.com/MCG-Computer/newPage/virus-scanning-and-removal.php">Virus Scanning          and Removal</a></li>
                                              <li><a href="https://arunodhai.com/MCG-Computer/newPage/web-development.php">Website                 Development</a></li>
                                          </ul>
                                      </li>
                                      <li><a href="#">Blogs</a></li>
                                      <li><a href="https://arunodhai.com/MCG-Computer/newPage/contact.php">Contact</a></li>
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
