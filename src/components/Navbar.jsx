import React, {useEffect, useState} from 'react';
import {FaBars, FaTimes} from "react-icons/fa";

// Navbar data
const navLinks = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'Discover Us',
        link: '/discover'
    },
    {
        title: 'Our Products',
        link: '/products'
    },
    {
        title: 'Contact Us',
        link: '/contact'
    },

]

const Navbar = () => {

    const [open, setOpen] = useState(false) // State for Mobile Menu
    const [isScrolled, setIsScrolled] = useState(false); // State for Mouse Scroll

    // Handle Mobile Menu
    const handleMenu =() =>{
        setOpen(prev => !prev)
        console.log(open)
    }

    // Handle Scroll with useEffect Hook
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <div
            className={`md:bg-transparent sm:bg-gray-800 w-full fixed top-0 left-0 z-10 shadow-md transition-all duration-300 
            ${isScrolled ? 'md:bg-[#450a0a]' : ''}`}
        >
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo Section */}
                    <div className="flex items-center gap-x-1">
                        <a href="/">
                            <img src="/images/logo.png" alt="" width={50} height={50}/>
                        </a>
                        <p className='text-white text-lg font-bold'>Assurance Quality Apparels</p>
                    </div>

                    {/*  Medium Device Menu  */}
                    <div className="hidden md:block">
                        <div className="flex ml-10 items-baseline space-x-4">
                            {navLinks.map((link, index) => (
                                <a key={index}
                                   className='
                                   text-gray-300 hover:text-[#A7D378] transition-all
                                   duration-500 px-3 py-2 rounded-md text-md font-extrabold'
                                   href={link.link}
                                >
                                    {/* text-gray-300 hover:bg-[#A7D378] hover:text-black transition-all */}
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/*  Hamburger Button  */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            type='button'
                            onClick={handleMenu}
                            className='
                            inline-flex items-center justify-center p-2 rounded-md
                            text-gray-400 hover:text-white hover:bg-gray-700
                            focus:outline-none focus:ring-2 focus:ring-offset-2
                            focus:ring-offset-gray-800 focus:ring-white'
                        >
                            <span className='sr-only'>Open Main Menu</span>
                            {open === true ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/*  Mobile Menu  */}
            {
                open ? (
                    <div className='md:hidden'>
                        <div className='ox-2 pt-2 pb-3 space-y-1 sm:px-3'>
                            {navLinks.map((link, index) => (
                                <a key={index}
                                   className='
                                   text-gray-300 hover:bg-gray-700 hover:text-white block
                                   px-3 py-2 rounded-md text-base font-medium'
                                   href={link.link}
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </div>
                ) : null
            }
        </div>
    );
};

export default Navbar;