import { API } from "../../services/API";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SelectPdi from "./SelectPdi";
import "./Create.css"

const CreateExperience = () => {
    const [experience, setExperience] = useState({ pdis: [] });
    const [image, setImage] = useState(null);
    const [pdi, setPdis] = useState([]);
    const navigate = useNavigate();

    const createExperience = () => {
        const data = new FormData();
        data.append("image", image.selectedFile);
        data.append("name", experience.name);
        data.append("price", experience.price);
        data.append("description", experience.description);
        data.append("location", experience.location);
        data.append("pdis", experience.pdis);
        API.post(`/experience/create`, data).then((res) => {
            navigate("/experiences")
        })
    }

    const getPdis = () => {
        API.get(`/pdi/`).then((res) => {
            setPdis(res.data.data)
        })
    }

    const handleExperience = (e) => {
        if (e.target.name === "pdi") {
            const pdi = experience.pdis;
            pdi.push(e.target.value);
            console.log(pdi);
            setExperience({
                ...experience,
                pdis: pdi
            })
        } else {
            setExperience({
                ...experience,
                [e.target.name]: e.target.value
            })
        }
    }


    useEffect(() => {
        getPdis();
    }, [])


    return (
        <div className="form-dos">
            <div className="form-dos-img">
            </div>
            <div className="form-dos-title"><h2>Hay demasiadas aventuras ahí afuera esperando a ser vividas. Crea la tuya!</h2></div>
            <div className="form-dos-container">
                <form className="for-exp" action="">
                    <>
                        <div className="form-dos-input">
                            <label htmlFor="name">Nombre:</label>
                            <input type="text" name="name" id="name" onChange={handleExperience} />
                        </div>
                        <div className="form-dos-input">
                            <label htmlFor="location">Ciudad:</label>
                            <input type="text" name="location" id="location" onChange={handleExperience} />
                        </div>
                        <div className="form-dos-input">
                            <label htmlFor="image">Imagen:</label>
                            <input type="file" name="image" id="image" onChange={(e) => {
                                setImage({
                                    selectedFile: e.target.files[0],
                                    loaded: 0,
                                })
                            }} />
                        </div>
                        <div className="form-dos-input-description">
                            <label htmlFor="description">Descripción:</label>
                            <textarea rows="6" cols="10" name="description" onChange={handleExperience}></textarea>
                        </div>
                        <div className="form-dos-input">
                            <label htmlFor="price">Precio:</label>
                            <input type="number" name="price" id="price" onChange={handleExperience} />
                        </div>
                        <SelectPdi pdi={pdi} handleExperience={handleExperience}></SelectPdi>
                        <button type="button" className="button-tres" onClick={createExperience}>Crear</button>
                    </>
                </form>
            </div>
        </div>
    )
};


export default CreateExperience;