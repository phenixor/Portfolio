import React from "react";
import { NavLink } from "react-router-dom";

function Location() {
    return (
        <div className="Projet">
            <h1 className="TitleP">Projet : Site de location</h1>
            <h2 className="SubTitleP">Description du projet :</h2>
            <p className="DescP">Le 6ème projet de la formation de développeur WEB d'OpenClassroom, il est orienté sur l'apprentissage de react et du scss via SASS.</p>
            <h2 className="SubTitleP">Compétences développées :</h2>
            <p className="DescP">Durant ce projet, un grand pannel de compétences sont utilisées, notamment le routage côté frontend en utilisant react. L'apprentissage de react est très simple si l'on a des bases saines en javascript, de même pour le sass qui en reprend les codes. c'est également dans ce projet que l'on apprendra à faire des animations, ici d'un menu déroulant. On apprend aussi à récupérer des informations depuis le backend afin de les réutiliser à de multiples endroit. Ce projet m'a également permis d'améliorer considérablement ma capacitées à créer un code propre, lisible et bien rangé.</p>
            <NavLink className="LinkP" to="/">Retourner sur la page d’accueil</NavLink>
        </div>
    );
}

export default Location;
