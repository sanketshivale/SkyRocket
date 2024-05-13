import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RiMenuLine } from 'react-icons/ri';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white text-black py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-semibold">SpaceX Data API</h1>
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
                <ul className={`lg:flex lg:space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <li><a href="#" className="text-lg  hover:underline">Home</a></li>
                    <li><a href="#" className="text-lg hover:underline">About</a></li>
                    <li><a href="#" className="text-lg hover:underline">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;