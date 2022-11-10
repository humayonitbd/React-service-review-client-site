import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logoDentice.jpg'
import { FaFacebook, FaInstagram, FaTwitter, FaCheck } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-base-200'>
           <footer className="footer p-10 w-10/12 mx-auto  text-base-content">
  <div>
  <span className='footer-title'>Dentrist services</span>
    <img src={logo} className='w-40 h-28 rounded-3xl' alt="" />
    
  </div> 
  <div>
    <span className="footer-title">links</span> 
    <Link to='/' className="link link-hover">Home</Link> 
    <Link to='/addService' className="link link-hover">addService</Link> 
    <Link to='/myReview' className="link link-hover">myReview</Link> 
    <Link to='/service' className="link link-hover">services</Link>
    <Link to='/blog' className="link link-hover">Blog</Link> 
  </div> 
  <div>
    <span className="footer-title">Specialites</span> 
    <Link  className="link link-hover"><FaCheck className='inline mr-1'/> General Dentistry</Link> 
    <Link  className="link link-hover"><FaCheck className='inline mr-1'/>Pediatric Dentistry</Link> 
    <Link  className="link link-hover"><FaCheck className='inline mr-1'/>Cosmetic dentistry</Link> 
    <Link  className="link link-hover"><FaCheck className='inline mr-1'/>Dental implants</Link> 
    <Link  className="link link-hover"><FaCheck className='inline mr-1'/>Teeth Whitening</Link> 
    
  </div> 
  <div>
    <span className="footer-title">Contact</span> 
    <p>Email: humayonforid44@gmail.com</p>
    <p>Phone: +012367895</p>
    <p>Address: dhaka, Bangladesh</p>
    <div className='flex text-xl mt-2'>
      <p className='mr-2'><a href='https://www.facebook.com/humayonitbd/'><span><FaFacebook/></span></a></p>
      <p className='mr-2'><a href="https://www.instagram.com/humayonitbd/"><span ><FaInstagram/></span></a></p>
     <p><a href="https://twitter.com/humayonitbd"> <span><FaTwitter/></span></a></p>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;