import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../contexts/jwtContext";
import { API } from "../../services/API";
import Swal from "sweetalert2";
import "./PdiCard.css"


const PdiCard = ({ pdi }) => {
    const { setEditingPdi } = useContext(JwtContext);
    let navigate = useNavigate();

    const deletePdis = () => {
        Swal.fire({
            title: "¿Estas seguro de borrar el punto de interes?",
            text: "No lo vas a poder recuperar",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, borrala!",
        }).then((result) => {
            if (result.isConfirmed) {

                API.delete(`/pdis/${pdi._id}`).then((res) => {
                    window.location.reload();
                });
            }
        });
    }

    const editPdi = (pdi) => {
        setEditingPdi(pdi);
        navigate("/editpdis");
    };


    return (

        <figure className="pdicard">
            <div className="img-pdi-dos">
                <img src={pdi.image} alt={pdi.name} />
            </div>

            <div className="pdi-p">
                <div className="INFO">
                    <h3>{pdi.name}</h3>
                    <p className="type"><span className="span-uno">Tipo:</span> {pdi.type} </p>
                    <p className="name"><span className="span-uno">Nombre:</span> {pdi.name}</p>
                    <p className="description"><span className="span-uno">Descripción:</span> {pdi.description}</p>
                    <p className="location"><span className="span-uno">Ciudad:</span> {pdi.location} </p>
                    <p className="address"><span className="span-uno">Dirección:</span> {pdi.address} </p>
                    <p className="lat"><span className="span-uno">Lat:</span> {pdi.lat} </p>
                    <p className="lng"><span className="span-uno">Lng:</span> {pdi.lng} </p>
                    <p className="price"><span className="span-uno">EU:</span> {pdi.price} </p>
                </div>

                <div className="container-button-pdicard">
                    <button className="button-pdi-card" onClick={() => editPdi(pdi._id)}> Edit </button>
                    <button className="button-pdi-card" onClick={() => deletePdis(pdi._id)}> Delete </button>
                </div>
            </div>
        </figure>

    );
};

export default PdiCard;
