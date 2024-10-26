import React, { useState } from "react";
import "./header.css";
import DarkMode from "./DarkMode";

const Header = () =>{
    //Toogle is when u resize(small for mobile mode) ur screen then show dts y at starting giving false .
    const[Toggle, showMenu] = useState(false);     
    const[activeNav, setActiveNav]=useState("#home") 
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav-logo">Vikalp Pareek</a>
                 
                 {/*if toogle true means when click on toogle then nav_menu and show_menu(all title menu show hoga like-home,contact,project etc) if false not show */  }
                <div className={ Toggle ? "nav_menu show_menu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
            {/*if home menu click pe home section set kro to go. and if home active hai then nav_link ,active-link(when hover then title green color show) class active if false only nav_link*/ }
                            <a href="#home" onClick={()=> setActiveNav("#home")} className={activeNav === "#home" ? "nav_link active-link" : "nav_link"}>
                                <i className="uil uil-estate nav_icons"></i>Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" onClick={()=> setActiveNav("#about")} className={activeNav === "#about" ? "nav_link active-link" : "nav_link"}>
                                <i className="uil uil-user nav_icons"></i>About
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skills" onClick={()=> setActiveNav("#skills")} className={activeNav === "#skills" ? "nav_link active-link" : "nav_link"}>
                                <i className="uil uil-file-alt nav_icons"></i>Skills
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#education" onClick={()=> setActiveNav("#education")} className={activeNav === "#education" ? "nav_link active-link" : "nav_link"}>
                                <i className="uil uil-briefcase-alt nav_icons"></i>Education
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#projects" onClick={()=> setActiveNav("#projects")} className={activeNav === "#projects" ? "nav_link active-link" : "nav_link"}>
                                <i className="uil uil-browser nav_icons"></i>Projects
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" onClick={()=> setActiveNav("#contact")} className={activeNav === "#contact" ? "nav_link active-link" : "nav_link"}>
                                <i className="uil uil-message nav_icons"></i>Contact
                            </a>
                        </li>
                        <li className="nav_item">
                            <DarkMode />
                        </li>
                    </ul>

                    <i class="uil uil-times nav_close"  onClick = {() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav_toggle" onClick = {() => showMenu(!Toggle)}>
                <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;