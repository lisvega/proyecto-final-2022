import { useEffect, useState } from "react";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import { API } from "../../services/API";
import "./Experience.css"

const Experiences = () => {
    const [allExperience, setAllExperience] = useState([]);



    const getAllExperiences = async () => {
        API.get("/experience").then((res) => {
            setAllExperience(res.data.data);
        });
    };


    useEffect(() => {
        getAllExperiences();
    }, []);



    return (
        <section className="exp">

            <div className="exp-title-dos">
                <h1>Experiencias</h1>
                <h3>Galeria</h3>
            </div>

            <div className="container-gallery-exp" >
                {allExperience.length ? allExperience.map((experience) => (
                    <div className="gallery" key={experience._id}>

                        <ExperienceCard key={experience._id} experience={experience} />
                    </div>
                )) : <> not Found</>
                }
            </div>
        </section >
    );
};



export default Experiences;