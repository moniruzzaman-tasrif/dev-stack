import Logo from"../assets/logo-text.png"

const Nav = () => {
  return (
    <div className="border border-gray-300">
      <div className=" flex justify-between items-center max-w-300 mx-auto py-4">
        <img src={Logo} alt="" />
        <ul className="flex gap-8 text-gray-500 ">
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
        <div className=" flex gap-4">
          <button className=" shadow-none text-gray-500 ">Sign in</button>
          <button className="btn btn-secondary shadow-none rounded-4xl px-6">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
