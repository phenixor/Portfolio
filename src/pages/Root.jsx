import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

function Root() {
    return (
        <div className='MainDiv'>
            <div className='Sizing'>
                <div className='HeaderDiv'>
                    <header>
                        <div>
                            <h1>Coucou</h1>
                        </div>
                        <nav>
                            <NavLink className="Link" to="/">Accueil</NavLink> 
                            <NavLink className="Link" to="/skills">Mes compétences</NavLink>
                            <NavLink className="Link" to="/about-me">À Propos de moi</NavLink>
                        </nav>
                    </header>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
            <div>
                <ContactForm />
            </div>
            <div className="FooterDiv">
                <footer>
                    <p>2024 Tristan Quesnel :p</p>
                </footer>
            </div>
        </div>
    );
}


export default Root;