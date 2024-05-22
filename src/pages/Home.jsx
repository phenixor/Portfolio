import React from "react";
import { NavLink } from "react-router-dom";
import SlideShow from "../components/SlideShow";

function Home() {
    return (
        <div className="DefilProj">
            <h3>Mes projets dont je suis le plus fiers :D</h3>
            <SlideShow />
        </div>
    );
}

export default Home;
