import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Vikalp Pareek</h1>

                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer_link">Projects</a>
                    </li>
                    <li>
                        <a href="#education" className="footer_link">Education</a>
                    </li>
                </ul>

                <div className="footer_social">
                <a href="https://www.linkedin.com/in/vikalppareek/" className="home_social-icon" target="_blank">
            <i class="uil uil-linkedin"></i></a>   {/*icon import*/}
           
            {/* <a href="" className="home_social-icon" target="_blank">
            <i class="uil uil-twitter"></i>
            </a> */}
           
            <a href="https://www.instagram.com/pareek.vikalp_28/" className="home_social-icon" target="_blank">
            <i class="uil uil-instagram-alt"></i>
            </a>
           
            <a href="https://github.com/vikalppareek" className="home_social-icon" target="_blank">
            <i class="uil uil-github"></i>
            </a>
                </div>

                <span className="footer_copy">&#169; Vikalp Pareek</span>
            </div>
        </footer>
    )
}

export default Footer;