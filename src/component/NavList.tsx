

const NavList = () => {
  return (
    <div className=" h-dvh border-b z-50 ">
      <ul className="  flex flex-col gap-8 justify-between items-center text-gray-500 lg:hidden py-5">
        <li className="hover:text-[#D91B7E] ">
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
    </div>
  );
};

export default NavList;
