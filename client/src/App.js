import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import DisplayAll from "./components/DisplayAll";
import DisplayOne from "./components/DisplayOne";

function App() {
    return (
        <div>
            <h1>Trails</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DisplayAll />} />
                    <Route path="/displayOneTrail/:id" element={<DisplayOne/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
