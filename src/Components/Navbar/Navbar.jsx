import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className="MNav shadow-[rgba(13,_38,_76,_0.19)_0px_5px_6px]">

          <div className="container">
            <div className="main_Nav flex justify-between  items-center text-center  gap-[154px] sm:py-[5px] py-[9px]">
              <div className="logo"><Link to={'#'}><img src="/imge/logo.png" alt="nav-logo" /></Link></div>
              <ul className='Jui-nav'>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>[isActive ? "ActivePage" : "NotActivePage", ].join(" ")}
                    >
                    Home
                  </NavLink>  
                  <NavLink
                    to="/About"
                    className={({ isActive }) =>[isActive ? "ActivePage" : "NotActivePage", ].join(" ")}
                    >
                    About
                  </NavLink>  
                  <NavLink
                    to="/gdfg"
                    className={({ isActive }) =>[isActive ? "ActivePage" : "NotActivePage", ].join(" ")}
                    >
                    Contact
                  </NavLink>  
                  <NavLink
                    to="fgfg"
                    className={({ isActive }) =>[isActive ? "ActivePage" : "NotActivePage", ].join(" ")}
                    >
                  Help
                  </NavLink>                   
                </li>
              </ul>
                <div className="Navbutton flex gap-[13px] ">
                  <button className='NavButton'>Start Free Trial</button>
                  <button className='NavButton'>Login</button>
                </div>
              
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar