import { useState, useEffect } from 'react';

import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && !event.target.closest('nav')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [menuOpen]);


    return (
        <>
            <nav >
                <input type="button" id="click" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
                <label htmlFor="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
                    <div id="logo">
                        <Link to="/" className='navbar-brand'><h1>Restaurant</h1></Link>
                    </div>
                </label>
                <ul>
                    <li><NavLink activeclassname="active" to="/" onClick={handleMenuItemClick}>Inicio</NavLink></li>
                    <li><NavLink to="/about" onClick={handleMenuItemClick}>Sobre</NavLink></li>
                    <li><NavLink to="/services" onClick={handleMenuItemClick}>Serviços</NavLink></li>
                    <li><NavLink to="/salas" onClick={handleMenuItemClick}>Salas</NavLink></li>
                    <li><NavLink to="/team" onClick={handleMenuItemClick}>Equipe</NavLink></li>
                    <li><NavLink to="/contact" onClick={handleMenuItemClick}>Contato</NavLink></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
