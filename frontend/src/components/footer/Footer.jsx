import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
    return (
        <footer className="pb-2">
            <p className="">Facundo Mingorance 2024-2025 |</p>
            <a href="https://github.com/FacuM87" target="_blank" rel="noopener noreferrer" className="githubLink mx-2 text-gray-700 hover:text-black">
                <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/facundo-mingorance/" target="_blank" rel="noopener noreferrer" className="linkedInLink mx-2 text-gray-700 hover:text-blue-700">
                <FaLinkedin size={20} />
            </a>
        </footer>
    )
}

export default Footer