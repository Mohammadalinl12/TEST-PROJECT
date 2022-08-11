import React, { useState } from "react";
import {
  FaAtlassian,
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from "./Button";
import { Link } from "react-scroll";

const NavBar = () => {
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full  fixed top-0 left-0 ">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <span className="text-3xl text-indigo-600 ml-1 pt-2">
            <FaAtlassian />
          </span>
          محمدعلی
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute left-8 top-6 cursor-pointer
        md:hidden"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb pb-12 absolute md:static bg-white md:z-[1]  right-0 w-full md:w-auto md:pr-0 pr-9 transition-all duration-500 ease-in ${
            open
              ? "top-20 opacity-100"
              : "top-[-490px] opacity-0 md:opacity-100"
          }`}
        >
          <li className="md:mr-8 text-xl md:my-0 my-7" >
            <Link to="home" smooth={true} duration={500}>
              خانه
            </Link>
          </li>
          <li className="md:mr-8 text-xl md:my-0 my-7">
            <Link to="about" smooth={true} duration={500}>
              درباره ما
            </Link>
          </li >
          <li className="md:mr-8 text-xl md:my-0 my-7">
            <Link to="skills" smooth={true} duration={500}>
              مهارت ها
            </Link>
          </li>
          <li className="md:mr-8 text-xl md:my-0 my-7">
            <Link to="work" smooth={true} duration={500}>
              رزومه
            </Link>
          </li>

          <Button>
            <Link to="contact" smooth={true} duration={500}>
              اغاز به کار
            </Link>
          </Button>
        </ul>
      </div>
      <div className="hidden lg:flex fixed flex-col top-[35%] right-0">
        <li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-blue-600">
          <a
            href="/"
            className="flex justify-between items-center w-full text-gray-300"
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-yellow-500">
          <a
            href="/"
            className="flex justify-between items-center w-full text-gray-300"
          >
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-red-500">
          <a
            href="/"
            className="flex justify-between items-center w-full text-gray-300"
          >
            Email <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-green-500">
          <a
            href="/"
            className="flex justify-between items-center w-full text-gray-300"
          >
            Whatsapp <BsWhatsapp size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-blue-400">
          <a
            href="/"
            className="flex justify-between items-center w-full text-gray-300"
          >
            Telegram <FaTelegramPlane size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-pink-500">
          <a
            href="/"
            className="flex justify-between items-center w-full text-gray-300"
          >
            Contacts <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </div>
    </div>
  );
};

export default NavBar;
