import React from "react";
import { NavLink } from "react-router-dom";

function Skills() {
    const skillsData = [
        {
            category: "Frontend",
            skills: [
                { name: "HTML", level: "Niveau avancé", emoji: "😃" },
                { name: "CSS/SCSS", level: "Niveau intermédiaire", emoji: "😮" },
                { name: "Language - Javascript", level: "Niveau intermédiaire", emoji: "😮" },
                { name: "Language - REACT", level: "Niveau intermédiaire", emoji: "😮" },
                { name: "Mise en place de router", level: "Niveau débutant", emoji: "🙁" }
            ]
        },
        {
            category: "Backend",
            skills: [
                { name: "NodeJS", level: "Niveau intermédiaire", emoji: "😮" },
                { name: "MongoDB", level: "Niveau débutant", emoji: "🙁" }
            ]
        },
        {
            category: "Gestion de Projet",
            skills: [
                { name: "Jira", level: "Niveau intermédiaire", emoji: "😮" },
                { name: "Veille technologique- ronpiche", level: "Niveau avancé", emoji: "😃" },
                { name: "Planification", level: "Niveau intermédiaire", emoji: "😮" },
                { name: "Evaluation des ressources humaines et temporelles nécéssaires", level: "Niveau intermédiaire", emoji: "😮" },
                { name: "Présentation de projets", level: "Niveau intermédiaire", emoji: "😮" }
            ]
        },
        {
            category: "Autre",
            skills: [
                { name: "Mise en place de SEO optimisées", level: "Niveau avancé", emoji: "😃" },
                { name: "Correction de bug d'un code préexistant", level: "Niveau avancé", emoji: "😃" },
                { name: "Optimisation technique à partir d'un code préexistant", level: "Niveau intermédiaire", emoji: "😮" }
            ]
        }
    ];

    return (
        <section className="skills__container">
            <h2 className="skills__title">Voici une liste de mes compétences par catégories et de leur niveau :</h2>
            {skillsData.map((category, index) => (
                <section key={index} className="skills__category">
                    <h3>{category.category}</h3>
                    <ul>
                        {category.skills.map((skill, idx) => (
                            <li key={idx}>
                                {skill.name} - {skill.level} <span role="img" aria-label={skill.level}>{skill.emoji}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
            <h2 className="skills__objectives">Objectifs INCROYAAAAAAABLES :D</h2>
            <ul>
                <li>Apprendre le C++</li>
                <li>Apprendre le ruby</li>
                <li>Suivre la formation développeur logiciel</li>
                <li>Participer et optionnellement remporter une GameJam</li>
                <li>Sortir un fangame d'une franchise que j'aime bien :D</li>
            </ul>
        </section>
    );
}


export default Skills;
