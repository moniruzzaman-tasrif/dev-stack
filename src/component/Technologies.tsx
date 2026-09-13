import { use, type Dispatch, type SetStateAction } from "react";
import type { ITechDatatype } from "./dataType";
import TechnologiesCard from "./TechnologiesCard";
import Stack from "./stack";

interface iTechtype {
  techDataPromis: Promise<ITechDatatype[]>;
  tectItem: ITechDatatype[];
  setTechItem: Dispatch<SetStateAction<ITechDatatype[]>>;
}

const Technologies = ({
  techDataPromis,
  tectItem,
  setTechItem,
}: iTechtype) => {
  const dataTech = use(techDataPromis);
  console.log(dataTech);
  return (
    <div id="Technologies">
      <div className="max-w-300 mx-auto md:px-0 px-5">
        <div className="lg:text-left text-center">
          <h1 className="text-4xl font-bold ">
            Explore the{" "}
            <span className="bg-linear-to-r from-[#FD5426] to-[#EC4995] bg-clip-text text-transparent">
              Technologies
            </span>
          </h1>
          <p className="mt-5 text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12  gap-4 mt-15 ">
          <div className="  lg:col-span-9  md:col-span-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-y-4  ">
            {dataTech.map(item => {
              return (
                <div key={item.id} className="">
                  <TechnologiesCard
                    technologiesItem={item}
                    tectItem={tectItem}
                    setTechItem={setTechItem}
                  ></TechnologiesCard>
                </div>
              );
            })}
          </div>
          <div className="  md:col-span-3">
            <Stack tectItem={tectItem} setTechItem={setTechItem}></Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
