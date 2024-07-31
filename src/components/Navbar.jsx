import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);  
  return (
    <>
      <style>
        {`
          @keyframes purpleRedAnimation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes slideIn {
            from {
              width: 0;
              opacity: 0;
            }
            to {
              width: 100%;
              opacity: 1;
            }
          }

          @keyframes slideOut {
            from {
              width: 100%;
              opacity: 1;
            }
            to {
              width: 0;
              opacity: 0;
            }
          }

          .navbar-animated {
            background: linear-gradient(270deg, #ff0000, #00008b, #ff0000, #6a0dad);
            background-size: 600% 600%;
            animation: purpleRedAnimation 7s ease infinite;
          }

          .nav-item {
            transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
            border-radius: 8px; /* Rounded borders */
            padding: 10px 15px; /* Increase padding for a bigger box */
          }

          .nav-item:hover {
            color: transparent; /* Make text transparent to show gradient */
            background-image: linear-gradient(45deg, #FFD700, #FFAA00); /* Gold gradient */
            background-clip: text;
            -webkit-background-clip: text;
            transform: translateY(-2px); /* Slightly lift the box for 3D effect */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add shadow for 3D effect */
          }

          .nav-item.active {
            background-color: blue; /* Blue background */
            color: white; /* White text */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add shadow for 3D effect */
          }
        `}
      </style>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 sticky top-0 z-50 navbar-animated`}
      >
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">Sripad &nbsp; <span className="sm:block hidden">Srikonda</span></p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`nav-item ${active === link.title ? "active" : ""} text-[18px] font-bold cursor-pointer p-2`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img 
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div className={`${!toggle ? 'hidden' : 'flex' } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;