
import { type Dispatch, type SetStateAction } from 'react';
import type { ITechDatatype } from './dataType';
import { FaStar } from 'react-icons/fa';
import { Bounce, toast, ToastContainer } from 'react-toastify';



interface CardDatatype {
  technologiesItem: ITechDatatype;
  tectItem: ITechDatatype[];
  setTechItem: Dispatch<SetStateAction<ITechDatatype[]>>;

}

const TechnologiesCard = ({
  technologiesItem,
  tectItem,
  setTechItem,

}: CardDatatype) => {
    const Isverify = tectItem.some(item => item.id === technologiesItem.id);
  const hendelClick = () => {
  if(!Isverify){
      setTechItem([...tectItem, technologiesItem]);
      toast.success("Stack added", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
  }


  };

  return (
    <div>
      {
        <div className=" card bg-base-100 w-70 shadow-sm p-4 flex gap-4 ">
          <div className="flex justify-between items-center ">
            <img
              className="h-10"
              src={technologiesItem.icon}
              alt={technologiesItem.name}
            />
            <h2 className="px-3 py-1 rounded-2xl text-white text-[0.7rem] bg-linear-to-r from-[#fd5526] to-[#ec4995]">
              {technologiesItem.badge}
            </h2>
          </div>
          <div className=" ">
            <h1 className="font-bold text-1.4xl my-2">
              {technologiesItem.name}
            </h1>
            <p className="text-gray-600 text-left">
              {" "}
              {technologiesItem.description}
            </p>
          </div>
          <div className="divider m-0"></div>
          <div className=" flex justify-between items-center ">
            <span className=" bg-gray-100 px-2 py-1 rounded-[5px] text-[15px] text-gray-600">
              {technologiesItem.category}
            </span>
            <span className="text-[15px] text-gray-600">
              {technologiesItem.difficulty}
            </span>
            <span className="text-[15px] text-gray-600 flex items-center gap-1">
              <FaStar className='text-yellow-500' />
              {technologiesItem.rating}
            </span>
          </div>
          <button
            onClick={hendelClick}
            disabled={Isverify}
            className={`btn btn-neutral `}
          >
            <ToastContainer />
            {Isverify === true ? "added to stack" : "add to stack"}
          </button>
        </div>
      }
    </div>
  );
};

export default TechnologiesCard;
