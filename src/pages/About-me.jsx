import React from "react";
import { NavLink } from "react-router-dom";

function About() {
    return (
        <div className="AboutDiv">
            <h1 className="Moi">Moi :D</h1>
            <h2 className="AboutSec">Qui je suis :</h2>
            <p className="AboutText">Je m'appelle Tristan Quesnel ! J'ai la vingtaine et je vise à devenir développeur logiciel dans un avenir proche</p>
            <br />
            <h2 className="AboutSec">Mes passions :</h2>
            <p className="AboutText">Je suis quelqu'un attiré par tout les domaines artistiques, cependant, mes nombreuses passions sont généralement réunis sous le spectre de la narration. Que ce soit l'écriture, le jeux de rôle, le jeux vidéo ou un autre support, je suis passionné par ce qu'on peut raconter, que ça soit par les mots, l'environnement, la musique ou d'autre mediums.</p>
            <br />
            <h2 className="AboutSec">Mes engagements :</h2>
            <p className="AboutText">A l'heure actuelle, je suis trésorier d'une association de jeux de rôle/simulation/société d'une soixantaine d'adhérents !</p>
            <br />
            <h2 className="AboutSec">Mes diplômes :</h2>
            <p className="AboutText">Aujourd'hui, je possède un cambridge certificate et un Baccalauréat scientifique option SVT. Dans peu de temps, je pourrais aussi revendiquer un diplôme de développeur web équivalent à un BAC+2 ! :D</p>
            <NavLink className="LinkAbout" to="/">Aller voir mes meilleurs projets avec ce lien :D !</NavLink>
        </div>
    );
}

export default About;
