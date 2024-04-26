import React from "react";
import Header from "../../../components/header/header";
import './style.css'
import video from '../../../assets/video.mp4'
import Cards from "../../cards";
import Logo from '../../../assets/561044.webp';
import { useNavigate } from "react-router-dom";

function Home(){
const navigate = useNavigate();

    return(
        <>
        <Header />
        <div id='banner'></div>
        <div id='trailer-container'>
            <div className="content">
                <video controls className="trailer">
                    <source src={video}/>
                    Seu navegador nao possui suporte para vIdeos
                </video>
                <div id="sinopse">
                    <p className="description">
                    Batman (The Batman, no original) segue o segundo ano de Bruce Wayne 
                            (Robert Pattinson) como o herói de Gotham, causando medo nos corações 
                            dos criminosos da sombria cidade. Com apenas alguns aliados de confiança 
                            Alfred Pennyworth (Andy Serkis) e o tenente James Gordon (Jeffrey Wright) 
                    </p>
                    <button className="button">Comprar ingresso</button>
                </div>
            </div>
            </div>
            <Cards />
            <footer>
                <img style={{objectFit: 'contain'}} id="logo" src={Logo} alt=""/>
                <span>Todos os direitos reservados &copy;</span>
                <span>Desenvolvido por Daniel Gonçalves</span>
                <nav className="footer-navigation">
                    <ul className="footer-list">
                        <li onClick={() => navigate('Home')}>Home</li>
                        <li onClick={() => navigate('Contatos')}>Contatos</li>
                        <li onClick={() => navigate('Fotos')}>Fotos</li>
                        <li onClick={() => navigate('Comentários')}>Comentários</li>
                    </ul>
                </nav>
            </footer>
        </>
    )
}

export default Home;