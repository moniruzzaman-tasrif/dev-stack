import type { Dispatch, SetStateAction } from "react";
import type { ITechDatatype } from "./dataType";
import { IoIosClose } from "react-icons/io";
import { Bounce, toast } from "react-toastify";

interface iTechtype {
  // techDataPromis: Promise<ITechDatatype[]>;
  tectItem: ITechDatatype[];
  setTechItem: Dispatch<SetStateAction<ITechDatatype[]>>;

}

const Stack = ({ tectItem, setTechItem
 }: iTechtype) => {
  const hendelClick = (item: ITechDatatype) => {
    const removeItem = tectItem.filter(items => items.id !== item.id);
    setTechItem(removeItem);
    toast.error("Stack Deleted ", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleRemoveAll = () => {


      setTechItem([]);

   toast.error(" All Stack Delete!", {
     position: "bottom-right",
     autoClose: 1000,
     hideProgressBar: false,
     closeOnClick: false,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "light",
     transition: Bounce,
   });

  };
  return (
    <div className="md:w-0 md:mt-0 mt-7">
      <div className="card bg-base-100    lg:w-70 md:w-60 w-full shadow-sm p-5">
        <div className="">
          <h1 className="capitalize font-bold text-2xl">your card</h1>
          <p className=" text-gray-500 capitalize">
            {tectItem.length === 0
              ? "No technologies selected yet."
              : ` ${tectItem.length} technologies selected yet. `}
          </p>
        </div>
        <div className=" mt-5">
          {tectItem.length === 0 ? (
            <p className="border-2 border-dotted py-5 text-center text-gray-400 rounded-2xl border-gray-300">
              Your stack is empty.
            </p>
          ) : (
            tectItem.map(item => {
              return (
                <div>
                  <div
                    key={item.id}
                    className=" card bg-base-100 w-full shadow-sm py-2 mt-4"
                  >
                    <div className="flex justify-between w-full items-center px-2">
                      <div className="flex gap-4 items-center justify-between">
                        <img className="h-9" src={item.icon} alt="" />
                        <div className="">
                          <h2 className=" font-bold text-[0.9rem]">
                            {item.name}
                          </h2>
                          <span className="text-[0.7rem] text-gray-500">
                            {" "}
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <div className="">
                        <IoIosClose
                          className=" text-4xl text-gray-500 cursor-pointer h hover:bg-[#f9711674] hover:rounded-3xl hover:text-white transition duration-100 ease-in "
                          onClick={() => hendelClick(item)}
                        />

                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        {tectItem.length === 0 ? (
          ""
        ) : (
          <button
            className={`btn mt-5 border-red-400 text-red-400 font-bold text-[1rem] bg-white hover:bg-red-400 hover:text-white `}
            onClick={handleRemoveAll}
          >
            {" "}

            Remove All
          </button>
        )}
      </div>
    </div>
  );
};

export default Stack;
