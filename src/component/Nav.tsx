import { RxHamburgerMenu } from "react-icons/rx";
import Logo from"../assets/logo-text.png"
import NavList from "./NavList";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
  const [open,setOpen]=useState<boolean>(false)

  const handelClick=()=>{
    setOpen(!open);
  }

  return (
    <div className="">
      <div
        className={`border border-gray-300 px-5 ${open && "z-30 fixed bg-white inset-0"}`}
      >
        <div className=" flex justify-between items-center max-w-300 mx-auto md:px-0    py-4">
          <button onClick={handelClick} className="cursor-pointer lg:hidden">
            {open ? (
              <IoMdClose className="text-2xl lg:hidden hover:bg-[#F43098]" />
            ) : (
              <RxHamburgerMenu className="text-2xl lg:hidden hover:bg-[#F43098]" />
            )}
          </button>
          {/* <RxHamburgerMenu className="text-2xl lg:hidden hover:bg-[#F43098]" /> */}
          <img src={Logo} alt="" className="h-6 md:h-9" />
          <ul className="lg:flex gap-8 text-gray-500 hidden">
            <li className="hover:text-[#D91B7E]">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-[#D91B7E]">
              <a href="#Technologies">Technologies</a>
            </li>
            <li className="hover:text-[#D91B7E]">
              <a href="#Projects">Projects</a>
            </li>
            <li className="hover:text-[#D91B7E]">
              <a href="/">About</a>
            </li>
            <li className="hover:text-[#D91B7E]">
              <a href="#Contact">Contact</a>
            </li>
          </ul>
          <div className="gap-4 flex">
            <button className=" shadow-none text-gray-500 text-[0.7rem] md:text-[1rem]  ">
              Sign in
            </button>
            <button className="btn btn-secondary shadow-none h-7 text-[0.7rem] md:text-[1rem] md:h-10 rounded-4xl px-2.5 md:px-6">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      {open && <NavList setOpen={setOpen} open={open}></NavList>}
    </div>
  );
};

export default Nav;
