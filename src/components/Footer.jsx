import React from 'react'
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'



const Footer = () => {


    return ( <footer className="footer bg-base-200 text-base-content p-10 border-2 border-e-red-5">
        <nav>
       
        <div className='p-2 text-2xl text-orange-500'>Follow us on</div>
          <div className='flex gap-2'>   
          <a className="link link-hover">{<SocialIcon url="https://linkedin.com/in/couetilc" />}</a>
          <a className="link link-hover">{<SocialIcon network="twitter" bgColor="#ff5a01" />}</a>
          <a className="link link-hover">{<SocialIcon network="facebook" bgColor="#ff5a01" />}</a>
          </div>
        
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
        &copy; All rights reserved. 2022
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item" />
              <button className="btn btn-primary join-item pr-2">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer> );
}
 
export default Footer;