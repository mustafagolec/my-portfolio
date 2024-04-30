import React from 'react';
import './footer.css';
import { FaItchIo } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Mustafa Göleç</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://github.com/mustafagolec" className="home__social-icon" target='_blank' rel="noreferrer">
                        <i className="uil uil-github-alt"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/mustafa-golec" className="home__social-icon" target='_blank' rel="noreferrer">
                        <i className="uil uil-linkedin-alt"></i>
                    </a>
                    <a href="https://mustafagolec.itch.io/" className="home__social-icon" target='_blank' rel="noreferrer">
                        <FaItchIo />
                    </a>
                    <a href="https://www.youtube.com/@mustafagolec/" className="home__social-icon" target='_blank' rel="noreferrer">
                        <i className="uil uil-youtube"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Crypticalcoder. All Rights Reserved</span>
            </div>
        </footer>
    )
}

export default Footer