import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {styles} from '../styles'
import {navLinks} from '../constants'
import {logo, menu, close} from '../assets'

const Navbar = () => {

  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(true)

return (
<nav className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-primary `}>
<div className='w-full flex justify-between items-centre max-w-7xl mx-auto'>
  <Link
    to='/'
    className='flex items-center gap-2'
    onClick={() => {
      setActive(""); //keeps track of where we are on the page currently
      window.scrollTo(0,0);
    }}
  >
<a href="https://github.com/akramgadir" target="_blank" rel="noopener noreferrer">
<img src={logo} alt="logo" className='w-12 h-12 object-contain logo-hover-animation'/>
</a>
<p className='text-white text-[18px] font-bold cursor-pointer flex items-center justify-between'>
  Akram Gadir&nbsp;
  {/* this span makes it appear in the same line */}
  <span className='sm:block hidden'> | Full Stack Developer</span></p>
  </Link>
  <ul className='list-none hidden sm:flex flex-row gap-10 items-center justify-between'>
    {navLinks.map((Link)=>(
    <li
      key={Link.id}
      className={`${
      active===Link.title
      ? "text-white"
      : 'text-secondary'
    } hover:text-white text-[18px] font-medium cursor-point
      `}
      onClick={()=> setActive(Link.title)}
      >
      <a href={`#${Link.id}`}>{Link.title}
      </a>
    </li>      
    ))}
  </ul>

<div className='sm:hidden flex flex-1 justify-end items-center'>
<img src={toggle ? menu : close} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
 onClick={()=>setToggle(!toggle)}/>
    <div className={`${toggle? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
      <ul className='list-none flex justify-end items-start flex-col gap-4'>
      {navLinks.map((Link)=>(
      <li
        key={Link.id}
        className={`${
        active===Link.title
        ? "text-white"
        : "text-secondary"
      } font-poppins font-medium cursor-pointer text-[16px]`}
        onClick={()=> {
          setToggle(!toggle)
          setActive(Link.title);
        }}
        >
        <a href={`#${Link.id}`}>{Link.title}
        </a>
      </li>      
      ))}
    </ul>
    </div>
  </div>
</div>
</nav>  
)
}

export default Navbar