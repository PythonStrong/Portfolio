import React, { useEffect, useState } from 'react'
import { FaBars, FaFacebook, FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa'
import { FaBarsStaggered } from "react-icons/fa6";
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill, BsTelegram } from 'react-icons/bs'
import { Link } from 'react-scroll'
import { logo } from '../assets'

export default function Navbar() {
    const [nav, setNav] = useState(false)
    const [show, setShow] = useState(false)
    const handleclick = () => setNav(!nav)
    const handlealert = () => { alert('By Hydra_Coder') }
    const [isSticky, setIsStciky] = useState(false)

    useEffect(() => {
        const handelscroll = () => {
            if (window.scrollY > 70) {
                setIsStciky(true)
            }
            else {
                setIsStciky(false)
            }
        }
        window.addEventListener('scroll', handelscroll)

        return () => {
            window.addEventListener('scroll', handelscroll)
        }
    })

    return (
        <div className={`fixed w-[100%] h-[80px] flex justify-between items-center px-4 text-gray-500 z-[700] ${isSticky ? "bg-[#0a162f] duration-500" : ""}`}>
            <div className="avatar flex items-center justify-center">
                <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={logo}  className='logo'/>
                </div>
            </div>
            {/* menu  */}
            <ul className='hidden md:flex '>
                <li className='text-xl'>
                    <Link to='home' smooth={true} duration={500} className='a'>
                        Home <span></span>
                    </Link>
                </li>
                <li className=' text-xl'>
                    <Link to='about' smooth={true} duration={500} className='a'>
                        About <span></span>
                    </Link>
                </li>
                <li className=' text-xl'>
                    <Link to='technologic' smooth={true} duration={500} className='a'>
                        Technologic <span></span>
                    </Link>
                </li>
                <li className='text-xl'>
                    <Link to='work' smooth={true} duration={500} className='a'>
                        Work <span></span>
                    </Link>
                </li>
                <li className='text-xl'>
                    <Link to='contact' smooth={true} duration={500} className='a'>
                        Contact <span></span>
                    </Link> 
                </li>

            </ul>


            {/* Hamburger  */}
            <div onClick={handleclick} className='md:hidden z-10 cursor-pointer '>
                {!nav ? <FaBarsStaggered size={25} /> : <FaTimes size={25} color='red' />}
            </div>

            {/* mbile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0   w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center '}>
                <li className='py-6 text-4xl'>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to='technologic' smooth={true} duration={500} >
                        Technologic
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to='work' smooth={true} duration={500} >
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to='contact' smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
                {/* for socails  */}
                <ul className='flex items-center justify-center gap-10 mt-10 flex-wrap'>
                    <li className='w-[80px] rounded-xl h-[80px] flex  justify-between items-center duration-300 bg-blue-800 '>
                        <a href="/" className='flex justify-between flex-col-reverse items-center w-full text-gray-300'>
                            Linkedin <FaLinkedin size={40} />
                        </a>
                    </li>
                    <li className='w-[80px] rounded-xl h-[80px] flex  justify-between items-center duration-300 bg-[#333333]'>
                        <a href="/" className='flex justify-between flex-col-reverse items-center w-full text-gray-300'>
                            Github <FaGithub size={40} />
                        </a>
                    </li>
                    <li className='w-[80px] rounded-xl h-[80px] flex  justify-between items-center duration-300 bg-[#4ad18b]'>
                        <a href="/" className='flex justify-between flex-col-reverse items-center w-full text-gray-300'>
                            Email <HiOutlineMail size={40} />
                        </a>
                    </li>
                    <li className='w-[80px] rounded-xl h-[80px] flex  justify-between items-center duration-300 bg-[#565f69]'>
                        <a href="/" className='flex justify-between flex-col-reverse items-center w-full text-gray-300'>
                            Resume <BsFillPersonLinesFill size={40} />
                        </a>
                    </li>
                    <li className='w-[80px] rounded-xl h-[80px] flex  justify-between items-center duration-300 bg-blue-500'>
                        <a href="/" className='flex justify-between flex-col-reverse items-center w-full text-gray-300'>
                            Telegram <BsTelegram size={40} />
                        </a>
                    </li>
                </ul>
            </ul>


            {/* social icons  */}
            <div className='hidden  lg:flex fixed flex-col top-[35%] left-0 '>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-800 '>
                        <a href="https://www.linkedin.com" className='flex justify-between items-center w-full text-gray-300'>
                            Linkedin <FaLinkedin size={40} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333]'>
                        <a href="https://github.com/" className='flex justify-between items-center w-full text-gray-300'>
                            Github <FaGithub size={40} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#4ad18b]'>
                        <a href="https://mail.google.com/mail/u/0/#inbox" className='flex justify-between items-center w-full text-gray-300'>
                            Email <HiOutlineMail size={40} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#565f69]'>
                        <a href="/" download={'Resume'} className='flex justify-between items-center w-full text-gray-300'>
                            Resume <BsFillPersonLinesFill size={40} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-500'>
                        <a href="https://t.me/PythonStrong" className='flex justify-between items-center w-full text-gray-300'>
                            Telegram <BsTelegram size={40} />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}
