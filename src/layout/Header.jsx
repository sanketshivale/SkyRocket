import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { MdRocket } from 'react-icons/md';
import { RiMenuLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    const isActive = (path) => {
        return location.pathname === path || location.pathname.startsWith(path);
    };

    return (
        <nav className="bg-white text-black p-4 shadow-lg mx-4 z-20 rounded-lg fixed top-0 left-0 right-0">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="lg:text-2xl md:text-2xl font-semibold flex items-center">
                    <MdRocket className="inline-block mr-2" />
                    <Link to="/" className="hover:text-gray-700 transition duration-300">SpaceX Data API</Link>
                </h1>
                <div className="lg:hidden">
                    <button
                        className="focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <AiOutlineClose size={24} /> : <RiMenuLine size={24} />}
                    </button>
                </div>
                <ul className={`lg:flex lg:space-x-6 lg:items-center absolute lg:static bg-white lg:bg-transparent w-full lg:w-auto left-0 lg:left-auto top-full lg:top-auto z-10 p-4 lg:p-0 shadow-lg lg:shadow-none rounded-lg lg:rounded-none transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible lg:visible lg:max-h-full'}`}>
                    <li><Link to="/home" onClick={handleLinkClick} className={`text-lg block py-2 ${isActive('/home') ? 'text-gray-900 font-bold' : 'hover:text-gray-700 transition duration-300'}`}>Home</Link></li>
                    <li><Link to="/capsules" onClick={handleLinkClick} className={`text-lg block py-2 ${isActive('/capsules') ? 'text-gray-900 font-bold' : 'hover:text-gray-700 transition duration-300'}`}>Capsules</Link></li>
                    <li><Link to="/cores" onClick={handleLinkClick} className={`text-lg block py-2 ${isActive('/cores') ? 'text-gray-900 font-bold' : 'hover:text-gray-700 transition duration-300'}`}>Cores</Link></li>
                    <li><Link to="/dragons" onClick={handleLinkClick} className={`text-lg block py-2 ${isActive('/dragons') ? 'text-gray-900 font-bold' : 'hover:text-gray-700 transition duration-300'}`}>Dragons</Link></li>
                    <li><Link to="/histories" onClick={handleLinkClick} className={`text-lg block py-2 ${isActive('/histories') ? 'text-gray-900 font-bold' : 'hover:text-gray-700 transition duration-300'}`}>Histories</Link></li>
                    <li><Link to="/landpads" onClick={handleLinkClick} className={`text-lg block py-2 ${isActive('/landpads') ? 'text-gray-900 font-bold' : 'hover:text-gray-700 transition duration-300'}`}>Landpads</Link></li>
                    <li><Link to="/launches" onClick={handleLinkClick} className={`text-lg block py-2 ${isActive('/launches') ? 'text-gray-900 font-bold' : 'hover:text-gray-700 transition duration-300'}`}>Launches</Link></li>
                    <li><Link to="/launchpads" onClick={handleLinkClick} className={`text-lg block py-2 ${isActive('/launchpads') ? 'text-gray-900 font-bold' : 'hover:text-gray-700 transition duration-300'}`}>Launchpads</Link></li>
                    <li><Link to="/rockets" onClick={handleLinkClick} className={`text-lg block py-2 ${isActive('/rockets') ? 'text-gray-900 font-bold' : 'hover:text-gray-700 transition duration-300'}`}>Rockets</Link></li>
                    <li><Link to="/roadster" onClick={handleLinkClick} className={`text-lg block py-2 ${isActive('/roadster') ? 'text-gray-900 font-bold' : 'hover:text-gray-700 transition duration-300'}`}>Roadster</Link></li>
                    <li><Link to="/ships" onClick={handleLinkClick} className={`text-lg block py-2 ${isActive('/ships') ? 'text-gray-900 font-bold' : 'hover:text-gray-700 transition duration-300'}`}>Ships</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;