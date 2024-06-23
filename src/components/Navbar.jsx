import { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png'
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
                    
                        <Link to="/" className='navbar-brand' id='sliderlogo'><img src={logo} /><h1>Geek Tech</h1></Link>
                    </div>
                </label>
                <ul>
                    <li><NavLink activeclassname="active" to="/" onClick={handleMenuItemClick}>Home</NavLink></li>
                    <li><NavLink to="/salas" onClick={handleMenuItemClick}>Salas</NavLink></li>
                    <li><NavLink to="/guest" onClick={handleMenuItemClick}>Convidado</NavLink></li>
                    <li><NavLink to="/rules" onClick={handleMenuItemClick}>Regras</NavLink></li>
                    <li><NavLink to="/contact" onClick={handleMenuItemClick}>Contato</NavLink></li>
                    <li><NavLink to="/about" onClick={handleMenuItemClick}>Curiosidades</NavLink></li>

                </ul>
            </nav>
        </>
    );
};

export default Navbar;
