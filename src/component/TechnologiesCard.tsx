
import { useState, type Dispatch, type SetStateAction } from 'react';
import type { ITechDatatype } from './dataType';
import { FaStar } from 'react-icons/fa';



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

const [cardStack, setCardStack] = useState(false);

  const hendelClick = () => {
setCardStack(true);
setTechItem([...tectItem, technologiesItem]);

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
            <h2 className="px-3 py-1 rounded-2xl text-white text-[0.7rem] bg-linear-to-r from-[#FD5426] to-[#EC4995]">
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
              <FaStar />
              {technologiesItem.rating}
            </span>
          </div>
          <button
            onClick={hendelClick}
            disabled={cardStack}
            className={`btn btn-neutral `}
          >
            {cardStack === true ? "added to stack" : "add to stack"}
          </button>
        </div>
      }
    </div>
  );
};

export default TechnologiesCard;
