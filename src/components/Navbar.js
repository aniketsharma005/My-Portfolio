import React, { useRef, useState } from 'react'
import  './Navbar.css'
import logo from "../../src/assets/logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import underline from '../../../myportfolio/src/assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../src/assets/menu_open.svg'
import menu_close from '../../src/assets/menu_close.svg'
import { Navbar, Nav, Container } from 'react-bootstrap';



const MyNavbar = () => {
   
  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <Navbar className='navbar' style={{position:'fixed'}} >
        { <img src={logo} alt=" " style={{paddingRight:'104px'}}></img> }
        
        <img src={menu_open} alt=' ' onClick={openMenu} className='nav-mob-open'/>
        <ul ref={menuRef} className='nav-menu'>
          <img src={menu_close} alt='' onClick={closeMenu}  className='nav-mob-close'/>
            <li> <AnchorLink className="anchor-link"  href='#Home'> <p onClick={()=>setMenu("home")}>  Home</p> </AnchorLink> {menu==="home"? <img src={underline} alt='' />:<></> }</li>
            <li> <AnchorLink className="anchor-link"   href='#About'> <p onClick={()=>setMenu("about me")}>About Me</p> </AnchorLink> {menu==="about me"? <img src={underline} alt='' />:<></> } </li>
            <li> <AnchorLink className="anchor-link"   href='#Services'> <p onClick={()=>setMenu("services")}>Services</p> </AnchorLink> {menu==="services"? <img src={underline} alt='' />:<></> }</li>
            <li> <AnchorLink className="anchor-link"   href='#Work'> <p onClick={()=>setMenu("portfolio")}>Portfolio</p> </AnchorLink>{menu==="portfolio"? <img src={underline} alt='' />:<></> }</li>
            <li> <AnchorLink className="anchor-link"  href='#Contact'> <p onClick={()=>setMenu("contact")}>Contact</p> </AnchorLink> {menu==="contact"? <img src={underline} alt='' />:<></> }</li>
        </ul>
        <div style={{paddingLeft:'100px'}}>
        <div className='nav-connect'> <AnchorLink className="anchor-link"  href='#Contact'>Connect With Me </AnchorLink></div>
        </div>
    </Navbar>
    
  )
}

export default MyNavbar