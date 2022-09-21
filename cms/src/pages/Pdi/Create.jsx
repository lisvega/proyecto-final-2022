import { API } from "../../services/API";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Create.css"

const Create = () => {
  const [pdi, setPdi] = useState({});
  const [image, setImage] = useState(null);
  const navigate = useNavigate();


  const createPdi = () => {
    const data = new FormData();
    data.append("image", image.selectedFile);
    data.append("type", pdi.type);
    data.append("name", pdi.name);
    data.append("description", pdi.description);
    data.append("location", pdi.location);
    data.append("address", pdi.address);
    data.append("price", pdi.price);
    data.append("lat", pdi.lat);
    data.append("lng", pdi.lng)
    API.post(`/pdi/create`, data).then((res) => {
      navigate("/pdis")
    })
  }

  const handlePdi = (e) => {
    setPdi({ ...pdi, [e.target.name]: e.target.value })
  }




  return (
    <div className="form-uno">

      <div className="form-uno-img">
      </div>

      <div className="form-uno-title"><h2>No te guardes tu experiencia y comparte. Empieza a crear!</h2></div>

      <div className="form-uno-container">
        <form className='for-pdi' action="">

          <div className="form-uno-input">
            <label htmlFor="type">Tipo:</label>
            <input type="text" name="type" id="type" onChange={handlePdi} />
            <p className="p-type">*Completar con: MUSEUM, RESTAURANT, HOTEL, SHOPPING,NIGHTLIFE,SIGHTSEEING, OTHER</p>

          </div>

          <div className="form-uno-input">
            <label htmlFor="name">Nombre:</label>
            < input type="text" name="name" id="name" onChange={handlePdi} />
          </div>


          <div className="form-uno-description">
            <label htmlFor="description">Descripción:</label>
            <textarea rows="6" cols="10" name="description" onChange={handlePdi}></textarea>
          </div>



          <div className="form-uno-input">
            <label htmlFor="image">Imagen:</label>
            <input type="file" name="image" id="image" onChange={(e) => {
              setImage({
                selectedFile: e.target.files[0],
                loaded: 0,
              })
            }} />
          </div>

          <div className="form-uno-input">
            <label htmlFor="location">Ciudad:</label>
            < input type="text" name="location" id="location" onChange={handlePdi} />
          </div>

          <div className="form-uno-input">
            <label htmlFor="address">Dirección:</label>
            <input type="text" name="address" id="address" onChange={handlePdi} />
          </div>

          <div className="form-uno-input">
            <label htmlFor="lat">Lat:</label>
            <input type="text" name="lat" id="lat" onChange={handlePdi} />
          </div>

          <div className="form-uno-input">
            <label htmlFor="lng">Lng:</label>
            <input type="text" name="lng" id="lng" onChange={handlePdi} />
          </div>

          <div className="form-uno-input">
            <label htmlFor="price">Precio:</label>
            <input type="number" name="price" id="price" onChange={handlePdi} />
          </div>

          <button type="button" className="button-dos" onClick={createPdi}>Nuevo PDI</button>
        </form>
      </div>
    </div>

  )
}

export default Create;