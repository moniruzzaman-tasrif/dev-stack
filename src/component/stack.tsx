import type { Dispatch, SetStateAction } from "react";
import type { ITechDatatype } from "./dataType";
import { IoIosClose } from "react-icons/io";
import { Bounce, toast, ToastContainer } from "react-toastify";

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
  };

  const handleRemoveAll = () => {


      setTechItem([]);

      toast.error(" All Stack Deleted ", {
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
    

  };
  return (
    <div>
      <div className="card bg-base-100 w-75 shadow-sm p-5">
        <div className="">
          <h1 className="capitalize font-bold text-2xl">your card</h1>
          <p className=" text-gray-500">No technologies selected yet.</p>
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
                  <div key={item.id} className=" card bg-base-100 w-65 shadow-sm py-2 mt-4">
                    <div className="flex justify-between items-center px-2">
                      <div className="flex gap-4 items-center">
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
                      <IoIosClose
                        className=" text-5xl cursor-pointer"
                        onClick={() => hendelClick(item)}
                      />
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div
          className={`btn mt-5 border-red-400 text-red-500 font-bold text-[1rem] bg-white `}
          onClick={handleRemoveAll}
        >
          {" "}
          <ToastContainer />
          Remove All
        </div>
      </div>
    </div>
  );
};

export default Stack;
