import { useEffect, useState } from "react";
import PdiCard from "../../components/PdiCard/PdiCard"
import { API } from "../../services/API";
import "./Pdi.css"

const Pdi = () => {
  const [allPdi, setAllPdi] = useState([]);

  const getAllPdis = async () => {
    API.get("/pdi").then((res) => {
      setAllPdi(res.data.data);
    });
  };


  useEffect(() => {
    getAllPdis();
  }, []);



  return (

    <section className="pdi">
      <div className="pdi-title-dos">
        <h1>Puntos de Interes</h1>
        <h3>Galeria</h3>

      </div>
      <div className="container-gallery-pdi">
        {allPdi.length ? allPdi.map((pdi) => (
          <div className="gallery" key={pdi._id}>

            <PdiCard key={pdi._id} pdi={pdi} />
          </div>
        )) : <> not Found</>
        }
      </div>
    </section >



  );
};

export default Pdi;