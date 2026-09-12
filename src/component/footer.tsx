
import LogoImg from "../assets/logo-text.png"
const Footer = () => {
  return (
    <div>
      <div className=" max-w-300 mx-auto mt-25">
        <div className=" grid grid-cols-12  gap-4">
          <div className="col-span-5 ">
            <img src={LogoImg} className="" alt="" />
            <p className="text-gray-500 py-4 pr-8">
              {" "}
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className=" flex gap-4 capitaize ">
              <span>GitHub</span>
              <span>Twitter</span>
              <span>Linkedin</span>
            </div>
          </div>
          <div className="col-span-2">
            <h1 className="font-bold uppercase  text-[0.9rem]"> product</h1>
            <ul className=" text-gray-500 flex flex-col gap-2 mt-4 text-[0.9rem] capitalize">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Technologies</a>
              </li>
              <li>
                <a href="/">Project</a>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h1 className="font-bold uppercase  text-[0.9rem]">company</h1>
            <ul className=" text-gray-500 flex flex-col gap-2 mt-4 text-[0.9rem] capitalize">
              <li>
                <a href="/">about</a>
              </li>
              <li>
                <a href="/">contact</a>
              </li>
              <li>
                <a href="/">careers</a>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h1 className="font-bold uppercase text-[0.9rem]">legal</h1>
            <ul className="text-gray-500 flex flex-col gap-2 mt-4 text-[0.9rem] capitalize">
              <li>
                <a href="/"> privacy policy</a>
              </li>
              <li>
                <a href="/">terms of service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex justify-between items-center mt-8 py-5">
          <span className="text-gray-500 text-[0.9rem]">
            © 2026 Dev Stack. All rights reserved.
          </span>
          <div className=" text-gray-500 flex gap-3  text-[0.9rem]">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
