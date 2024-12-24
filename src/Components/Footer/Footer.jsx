import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
          <div className="Jui-footer py-[67px]">
            <div className="container">
              <div className="main_footer_text flex gap-[70px] justify-center ">
                <div className="col_One">
                  <Link to={'#'}><img className='' src="/imge/logo.png" alt="footer-logo" /></Link>
                  <h2 className='Onehead'>Product</h2>
                  <Link to={'#'}><p>Individuals</p></Link>
                  <Link to={'#'}><p>Team</p></Link>
                  <Link to={'#'}><p>Enterprise</p></Link>
                  <Link to={'#'}><p>Pricing</p></Link>
                  <Link to={'#'}><p>Technology</p></Link>
                  <Link to={'#'}><p>Security</p></Link>
                  <Link to={'#'}><p>Integrations</p></Link>
                </div>
                <div className="col_tow mt-[46px]">
                  <h2 className='Onehead'>Company</h2>
                  <Link to={'#'}><p>About</p></Link>
                  <Link to={'#'}><p>Careers</p></Link>
                  <Link to={'#'}><p>Login</p></Link>
                  <Link to={'#'}><p>Sign Up</p></Link>
                  <Link to={'#'}><p>News</p></Link>
                </div>
                <div className="col_three mt-[46px]">
                  <h2 className='Onehead'>Resources</h2>
                  <Link to={'#'}><p>How-tos</p></Link>
                  <Link to={'#'}><p>Case studies</p></Link>
                  <Link to={'#'}><p>Help</p></Link>
                </div>
                <div className="col_four mt-[46px]">
                 <h2 className='Onehead'>Headquarters</h2>
                  <Link to={'#'}><p className='w-[107px]'>Your company address, Street, & name</p></Link>
                </div>
                <div className="col_five mt-[46px]">
                  <h2 className='Onehead'>North America</h2>
                  <Link to={'#'}><p className='w-[107px]'>Your company address, Street, & name</p></Link>
                </div>
                <div className="col_six mt-[46px]">
                  <h2 className='Onehead'>Connect</h2>
                  <div className="icons flex gap-[13px]">
                    <Link to={'#'}><FaTwitter/></Link>
                    <Link to={'#'}><FaFacebookF/></Link>
                    <Link to={'#'}><FaLinkedinIn/></Link>
                  </div>
                </div>
                <div className="col_seven mt-[46px]">
                  <h2 className='Onehead'>Connect</h2>
                  <div className=" gap-[13px]">
                    <Link to={'#'}><img src="/imge/app.png" alt="apple" /></Link>
                    <Link to={'#'}><img className='mt-5' src="/imge/google.png" alt="google" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Footer