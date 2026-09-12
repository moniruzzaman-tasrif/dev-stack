

import { Suspense, useState } from "react";
import "./App.css";
import Banar from "./component/Banar";
import Nav from "./component/Nav";
import Technologies from "./component/Technologies";
import type { ITechDatatype } from "./component/dataType";
import Footer from "./component/footer";

const dataPrimis = async (): Promise<ITechDatatype[]> => {
  const res = await fetch("/technologies.json");
  const data = await res.json();
  return data;
};

function App() {

  const [tectItem,setTechItem]=useState<ITechDatatype[]>([])


  return (
    <>
      <Suspense
        fallback={

       <h1 className="text-4xl text-center"> Loding.....</h1>

        }
      >
        <Nav></Nav>
        <Banar></Banar>
        <Technologies
          techDataPromis={dataPrimis()}
          tectItem={tectItem}
          setTechItem={setTechItem}
        ></Technologies>
        <Footer></Footer>
      </Suspense>
    </>
  );
}

export default App;
