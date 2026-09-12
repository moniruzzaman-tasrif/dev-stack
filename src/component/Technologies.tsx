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
          <div className=" col-span-3">
            <Stack
              tectItem={tectItem}
              setTechItem={setTechItem}

            ></Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
