

import "../styles/Header.css"
import { Link } from "react-router-dom";
import logo from "../icons/Alesta_Logo-removebg-preview.png"
import { useHistory } from "react-router-dom";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import { useState } from "react";
import Contact from "./Contact";
const Header=()=>{

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    let history=useHistory();

    function pushHome(){
     history.push("/");
    }

    return(
        // <div className="header">

        //  deneme
        // </div>
<div className="container1">
<nav className="header">
            <div className="logo-div" onClick={pushHome}>
               <img className="logo" src={logo}></img> 
            </div>
          
        <div className="nav-bar">
           <a className="navbar-item" href='#entryPage'>Home</a>
           <a className="navbar-item" href='#announcements'>Announcements</a>
           <a className="navbar-item" href='#teammate'>Team</a>
           <a className="navbar-item" href='#resource'>Resource</a>
           <a className="navbar-item" href='#external'>External</a>
           <a className="navbar-item"href='#contact'>Contact</a>
        </div>

        <div className="toggler-navbar">
      <Navbar  color="faded" light>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
            <a className="navbar-item" href='#entryPage'>Home</a>
            </NavItem>
            <NavItem>
            <a className="navbar-item" href='#announcements'>Announcements</a>
            </NavItem>
            <NavItem>
            <a className="navbar-item" href='#teammate'>Team</a>
            </NavItem>
            <NavItem>
            <a className="navbar-item" href='#resource'>Resource</a>
            </NavItem>
            <NavItem>
            <a className="navbar-item" href='#external'>External</a>
            </NavItem>
            <NavItem>
            <a className="navbar-item" href='#contact'>Contact</a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
        {/* <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-general" aria-controls="navbar-general">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar-general">
             <Link id="header-item">Home</Link>
            <Link id="header-item">Profile</Link>
            <Link id="header-item">Teams</Link>
            <Link id="header-item">Announcements </Link>
            <Link id="header-item">Contact</Link>
        </div> */}
        
        </nav>
</div>
       
    )
        

    
}
export default Header;