import React from 'react'
import { FaItchIo } from "react-icons/fa";


const Social = () => {
    return (
        <div className="home__social">
            {/*<a href="https://www.instagram.com/" className="home__social-icon" target='_blank' rel="noreferrer">
            <i className="uil uil-instagram"></i>
        </a>

        <a href="https://dribbble.com/" className="home__social-icon" target='_blank' rel="noreferrer">
            <i className="uil uil-dribbble"></i>
  </a>*/}
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
    )
}

export default Social