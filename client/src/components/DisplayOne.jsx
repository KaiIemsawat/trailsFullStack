import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

const DisplayOne = (props) => {
    const [oneTrail, setOneTrail] = useState({});
    const { id } = useParams();
    const nav = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/getOneTrail/${id}`)
            .then((resp) => {
                console.log(resp.data);
                setOneTrail(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return(
    <div>
        <h2>Trail Details</h2>
        <p><span style={{ fontWeight: "bold" }}>Title : </span>{oneTrail.title}</p>
        <p><span style={{ fontWeight: "bold" }}>Distance : </span>{oneTrail.distance}</p>
        <p><span style={{ fontWeight: "bold" }}>Location : </span>{oneTrail.location}</p>
        {
            oneTrail.wheelChairAccess ? 
            <p><span  style={{ fontWeight: "bold" }}>Wheel Chair Accessibility : </span>yes</p>
            :
            <p><span  style={{ fontWeight: "bold" }}>Wheel Chair Accessibility : </span>No</p>
        }
        <p><span style={{ fontWeight: "bold" }}>Description : </span>{oneTrail.description}</p>
        <p><span style={{ fontWeight: "bold" }}>Difficulty : </span>{oneTrail.difficulty}</p>
        {
            oneTrail.img ? 
            <img src={oneTrail.img} style={{width:"30%"}} alt={`${oneTrail.name} image`}/>
            :
            null
        }
    </div>);
};

export default DisplayOne;
