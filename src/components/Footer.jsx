import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 border-2 border-e-red-5">
      <div className="flex items-center mb-4">
        <img className="w-14 h-14 border-8 rounded-full" src="/logo.png" alt="Visa World Ltd Logo" />
      </div>
     
      <div className=' gap-2'>
      <div className="p-2 text-2xl text-orange-500">Social Links</div>
     <div className='flex gap-2'>
     <a className="link link-hover">
          <SocialIcon url="https://linkedin.com/in/couetilc" />
        </a>
        <a className="link link-hover">
          <SocialIcon url="https://facebook.com/" />
        </a>
     </div>
      </div>
      <nav>
        <li>
          <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/support">Support</NavLink>
        </li>
        <li>
          <NavLink to="/jobs">Career With Us</NavLink>
        </li>
      </nav>
      <form>
        &copy; All rights reserved. 2022
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Keep yourself updated by signing up</span>
          </label>
          <div className="join">
            <NavLink to="/login">
              <button className="btn btn-primary join-item ">Sign up free</button>
            </NavLink>
          </div>
        </fieldset>
      </form>
    </footer>
  );
}

export default Footer;
