import BanarImg from "../assets/banner-stack.png"

const Banar = () => {
  return (
    <div>
      <div className=" flex items-center gap-10 max-w-300 mx-auto ">
        <div className=" ">
          <h1 className="text-5xl font-bold  ">
            Build Your Ideal{" "}
            <span className="bg-linear-to-r from-[#FD5426] to-[#7F39E9] bg-clip-text text-transparent ">
              Development Stack
            </span>{" "}
          </h1>
          <p className="mt-8 max-w-125 p-3">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className=" flex gap-4 mt-5">
            <button className="btn bg-linear-to-r from-[#FD5426] to-[#EC4995] text-white">
              {" "}
              Explore Technologies
            </button>
            <button className="btn">Learn More</button>
          </div>
        </div>
        <img src={BanarImg} alt="" />
      </div>
    </div>
  );
};

export default Banar;
