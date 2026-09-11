import { use } from "react";
import type { ITechDatatype } from "./dataType";
import TechnologiesCard from "./TechnologiesCard";

interface iTechtype{
  techDataPromis:Promise<ITechDatatype[]>
}

const Technologies = ({ techDataPromis }: iTechtype) => {
  const dataTech = use(techDataPromis);
  console.log(dataTech);
  return (
    <div>
      <div className="max-w-300 mx-auto">
        <div className="">
          <h1 className="text-4xl font-bold ">
            Explore the{" "}
            <span className="bg-linear-to-r from-[#FD5426] to-[#EC4995] bg-clip-text text-transparent">
              Technologies
            </span>
          </h1>
          <p className="mt-5">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-12 mt-15">
          <div className="col-span-9 grid grid-cols-3 gap-y-4  ">
            {dataTech.map(item => {
              return (
                <div className="">
                  <TechnologiesCard technologiesItem={item}></TechnologiesCard>
                </div>
              );
            })}
          </div>
          <div className=" col-span-3"> </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
