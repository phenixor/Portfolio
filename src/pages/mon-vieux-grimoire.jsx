import React from "react";
import { NavLink } from "react-router-dom";

function Grimoire() {
    return (
        <div className="Projet">
            <h1 className="TitleP">Projet : mon vieux grimoire</h1>
            <h2 className="SubTitleP">Description du projet :</h2>
            <p className="DescP">Le 7ème projet de la formation de développeur WEB d'OpenClassroom, il est orienté sur l'apprentissage du backend.</p>
            <h2 className="SubTitleP">Compétences développées :</h2>
            <p className="DescP">Ce projet est l'occasion d'apprendre à gérer du backend et la base de donnée associée. Pour ce faire, on utilise du javascript avec NodeJS et express, avec mongoDB pour la base de donnée. Cet exercice m'a permis d'apprendre également comment fonctionne le routage côté backend et l'utilisation des middlewares. Ce projet est, je pense, celui qui se rapproche le plus de mes objectifs à long termes, la création des controllers étant la partie la plus enrichissante en ce qui est de l'apprentissage de compétences qui me seront utiles dans le future.</p>
            <NavLink className="LinkP" to="/">Retourner sur la page d’accueil</NavLink>
        </div>
    );
}

export default Grimoire;
