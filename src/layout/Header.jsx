import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RiMenuLine } from 'react-icons/ri';
import { Link } from 'react-router-dom'; // If you're using React Router

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white text-black p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-semibold">
                    <Link to="/">SpaceX Data API</Link>
                </h1>
                <div className="lg:hidden">
                    {/* Toggle button */}
                    <button
                        className="focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <AiOutlineClose size={24} /> : <RiMenuLine size={24} />}
                    </button>
                </div>
                {/* Menu items */}
                <ul className={`lg:flex lg:space-x-4 lg:items-center lg:transition-all lg:duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <li><Link to="/" className="text-lg hover:text-gray-700 transition duration-300">Home</Link></li>
                    <li><Link to="/about" className="text-lg hover:text-gray-700 transition duration-300">About</Link></li>
                    <li><Link to="/contact" className="text-lg hover:text-gray-700 transition duration-300">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;