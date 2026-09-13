import { RxHamburgerMenu } from "react-icons/rx";
import Logo from"../assets/logo-text.png"

const Nav = () => {
  return (
    <div className="border border-gray-300 px-5 lg-px-0">
      <div className=" flex justify-between items-center max-w-300 mx-auto md:px-0 px-5 py-4">
        <RxHamburgerMenu className="text-2xl lg:hidden hover:bg-[#F43098]" />
        <img src={Logo} alt="" className="h-6 md:h-9" />
        <ul className="lg:flex gap-8 text-gray-500 hidden">
          <li className="hover:text-[#D91B7E]">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-[#D91B7E]">
            <a href="/">Technologies</a>
          </li>
          <li className="hover:text-[#D91B7E]">
            <a href="/">Projects</a>
          </li>
          <li className="hover:text-[#D91B7E]">
            <a href="/">About</a>
          </li>
          <li className="hover:text-[#D91B7E]">
            <a href="/">Contact</a>
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
  );
};

export default Nav;
