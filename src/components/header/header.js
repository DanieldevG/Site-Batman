import React from 'react';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/561044.webp'


function Header(){
   const navigate = useNavigate();
    return(
        <header>
            <img id='logo' src={Logo} alt='' />
            <nav>
                <ul>
                    <Link to='/'  style={{ textDecoration: 'none' }}>
                    <li>Home</li>
                    </Link>
                    
                    <Link to='/Contatos'  style={{ textDecoration: 'none' }}>
                    <li>Contatos</li>
                    </Link>

                    <Link to='/Fotos' style={{ textDecoration: 'none' }}>
                    <li>Fotos</li>
                    </Link>
                    
                    <li onClick={() => navigate('Comentarios')}>Comentários</li>
                </ul>
            </nav>
        </header>
   
    )

}
export default Header;
