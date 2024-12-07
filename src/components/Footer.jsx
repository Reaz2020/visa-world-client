import React from 'react'
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'



const Footer = () => {


    return ( <footer className="footer bg-base-200 text-base-content p-10 border-2 border-e-red-5">
        <nav>
       
        <div className='p-2 text-2xl text-orange-500'>Follow Visa World ltd.</div>
          <div className='flex gap-2'>   
          <a className="link link-hover">{<SocialIcon url="https://linkedin.com/in/couetilc" />}</a>
          <a className="link link-hover">{<SocialIcon network="twitter" />}</a>
          <a className="link link-hover">{<SocialIcon network="facebook" />}</a>
          </div>
        
        </nav>
        <nav>
         
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
        
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
        &copy; All rights reserved. 2022
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Keep yourself updated by signing up</span>
            </label>
            <div className="join">
          
              <button className="btn btn-primary join-item pr-2">Sign up free </button>
            </div>
          </fieldset>
        </form>
      </footer> );
}
 
export default Footer;