import { type Dispatch, type SetStateAction } from "react";

interface TypeNavList {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open:boolean

}

const NavList = ({ setOpen, open }: TypeNavList) => {
  const closeButon = () => {
    setOpen(false);
  };
  return (
    <div
      className={`fixed inset-0 top-[15%] bg-white z-40 flex flex-col justify-between p-8 transition-all duration-300 ease-in-out lg:hidden ${
        open
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none -translate-y-4"
      }`}
    >
      <ul className="  flex flex-col gap-8 justify-between items-center text-gray-500 lg:hidden py-5">
        <li className="hover:text-[#D91B7E] ">
          <a onClick={closeButon} href="/">
            Home
          </a>
        </li>
        <li className="hover:text-[#D91B7E]">
          <a onClick={closeButon} href="#Technologies">
            Technologies
          </a>
        </li>
        <li className="hover:text-[#D91B7E]">
          <a onClick={closeButon} href="#Projects">
            Projects
          </a>
        </li>
        <li className="hover:text-[#D91B7E]">
          <a onClick={closeButon} href="/">
            About
          </a>
        </li>
        <li className="hover:text-[#D91B7E]">
          <a onClick={closeButon} href="#Contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavList;
