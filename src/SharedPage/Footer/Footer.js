import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logoDentice.jpg'

const Footer = () => {
    return (
        <div className='bg-base-200'>
           <footer className="footer p-10 w-10/12 mx-auto  text-base-content">
  <div>
    
    <img src={logo} className='w-40 h-28' alt="" />
  </div> 
  <div>
    <span className="footer-title">links</span> 
    <Link to='/' className="link link-hover">Home</Link> 
    <Link to='/addProduct' className="link link-hover">addProduct</Link> 
    <Link to='/myReview' className="link link-hover">myReview</Link> 
    <Link to='/service' className="link link-hover">services</Link>
  </div> 
  <div>
    <span className="footer-title">Info</span> 
    <Link to='/about' className="link link-hover">About us</Link> 
    <Link to='/blog' className="link link-hover">Blog</Link> 
    <Link to='https://job.com/' className="link link-hover">Jobs</Link> 
    
  </div> 
  <div>
    <span className="footer-title">Contact</span> 
    <p>Email: humayonforid44@gmail.com</p>
    <p>Phone: +012367895</p>
    <p>Address: dhaka, Bangladesh</p>
  </div>
</footer>
        </div>
    );
};

export default Footer;