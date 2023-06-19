import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

const DisplayAll = (props) => {
    const [allTrails, setAllTrails] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/allTrails")
            .then((resp) => {
                console.log(resp);
                setAllTrails(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            {allTrails.map((eachTrail, index) => (
                <div key={index}>
                    <p><span style={{ fontWeight: "bold" }}>Title : </span>{eachTrail.name}</p>
                    <p><span style={{ fontWeight: "bold" }}>Distance : </span>{eachTrail.distance}</p>
                    <p><span style={{ fontWeight: "bold" }}>Location : </span>{eachTrail.location}</p>
                    {
                        eachTrail.wheelChairAccess ? 
                        <p><span  style={{ fontWeight: "bold" }}>Wheel Chair Accessibility : </span>yes</p>
                        :
                        <p><span  style={{ fontWeight: "bold" }}>Wheel Chair Accessibility : </span>No</p>
                    }
                    <p><span style={{ fontWeight: "bold" }}>Description : </span>{eachTrail.description}</p>
                    <p><span style={{ fontWeight: "bold" }}>Difficulty : </span>{eachTrail.difficulty}</p>
                    {
                        eachTrail.img ? 
                        <img src={eachTrail.img} style={{width:"30%"}} alt={`${eachTrail.name} image`}/>
                        :
                        null
                    }
                    <Link className="btn btn-primary" to={`/displayOneTrail/${eachTrail._id}`}>Details</Link>
                </div>
            ))}
        </div>
    );
};

export default DisplayAll;
