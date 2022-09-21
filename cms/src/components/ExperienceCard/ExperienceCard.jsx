import "./ExperienceCard.css"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../contexts/jwtContext";
import { API } from "../../services/API";
import Swal from "sweetalert2";

const ExperienceCard = ({ experience }) => {
    const { setEditingExp } = useContext(JwtContext);
    let navigate = useNavigate();

    const deleteExp = () => {
        Swal.fire({
            title: "¿Estas seguro de borrar la experiencia?",
            text: "No lo vas a poder recuperar",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, borrala!",
        }).then((result) => {
            if (result.isConfirmed) {

                API.delete(`/experience/${experience._id}`).then((res) => {
                    window.location.reload();
                });
            }
        });
    }

    const editExp = (experience) => {
        setEditingExp(experience);
        navigate("/editexperience");
    };


    return (
        <figure className="exp-card">
            <div className="img-exp-dos">
                <img src={experience.image} alt={experience.name} />
            </div>

            <div className="exp-p">
                <div className="INFO-DOS">
                    <h3>{experience.name}</h3>
                    <p className="location"><span className="span-dos"> Locación:</span> {experience.location}</p>
                    <p className="description"><span className="span-dos">Descripción:</span> {experience.description}</p>
                    <p className="price"><span className="span-dos">EU:</span>{experience.price} </p>
                </div>


                <div className="container-button-exp-card">
                    <button className="button-exp-card" onClick={() => editExp(experience._id)}> Edit </button>
                    <button className="button-exp-card" onClick={() => deleteExp(experience._id)}> Delete </button>
                </div>
            </div>
        </figure>
    );
};



export default ExperienceCard;
