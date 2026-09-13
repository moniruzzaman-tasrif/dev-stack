import BanarImg from "../assets/banner-stack.png"

const Banar = () => {
  return (
    <div>
      <div className=" lg:flex mt-20 lg:mt-0  items-center  gap-10 max-w-300 mx-auto md:px-0 px-5 ">
        <div className="text-center lg:text-left">
          <div className=" md:max-w-150 mx-auto lg:max-w-auto">
            {" "}
            <h1 className=" text-5xl font-bold ">
              Build Your Ideal{" "}
              <span className="bg-linear-to-r from-[#FD5426] to-[#7F39E9] bg-clip-text text-transparent ">
                Development Stack
              </span>{" "}
            </h1>
            <p className="mt-8 lg:max-w-125 p-3 text-gray-500">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>
          </div>
          <div className=" flex items-center justify-center lg:justify-start gap-4 mt-5 w-full ">
            <button className="btn bg-linear-to-r from-[#FD5426] to-[#EC4995] text-white">
              {" "}
              Explore Technologies
            </button>
            <button className="btn px-10 md:px-12 bg-white text-gray-500">
              Learn More
            </button>
          </div>
        </div>
        <img src={BanarImg} className=" mx-auto lg:mx-0 " alt="" />
      </div>
    </div>
  );
};

export default Banar;
