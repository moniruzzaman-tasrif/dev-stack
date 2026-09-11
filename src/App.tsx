

import { Suspense, useState } from "react";
import "./App.css";
import Banar from "./component/Banar";
import Nav from "./component/Nav";
import myVideo from "./assets/loading.webm"
import Technologies from "./component/Technologies";
import type { ITechDatatype } from "./component/dataType";

const dataPrimis = async (): Promise<ITechDatatype[]> => {
  const res = await fetch("/public/technologies.json");
  const data = await res.json();
  return data;
};

function App() {

  const [tectItem,setTechItem]=useState<ITechDatatype[]>([])


  return (
    <>
      <Suspense
        fallback={
          <div>
            {" "}
            <video autoPlay loop width="100%">
              <source src={myVideo} type="video/mp4" />
            </video>
          </div>
        }
      >
        <Nav></Nav>
        <Banar></Banar>
        <Technologies
          techDataPromis={dataPrimis()}
          tectItem={tectItem}
          setTechItem={setTechItem}
        ></Technologies>
      </Suspense>
    </>
  );
}

export default App;
