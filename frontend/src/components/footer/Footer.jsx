import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="flex justify-center items-center scale-120 pb-2">
            <p className="">Facundo Mingorance 2024-2025 |</p>
            <a href="https://github.com/FacuM87" target="_blank" rel="noopener noreferrer" className=" mx-2 text-gray-400 duration-450 ease-in-out hover:text-black">
                <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/facundo-mingorance/" target="_blank" rel="noopener noreferrer" className=" text-gray-400 duration-450 ease-in-out hover:text-blue-700">
                <FaLinkedin size={20} />
            </a>
        </footer>
    )
}

export default Footer

