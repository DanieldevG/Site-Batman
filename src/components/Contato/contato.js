import React from "react";
import './contato.css';

function Contatos(){
    
    return(
        <div className="começo">
            <form action="./contato.js">
            <label for="email">Email</label>
            <input style={{display: "block"}} id="email" type="email" name="qualquercoisa" placeholder="coloque um email válido"/>
            <label for="senha">Senha</label>
            <input style={{display: "block"}} id="password" type="password" name="password" placeholder="digite sua senha"/>
            </form>
            <button id="Button">Enviar</button>
        </div>
    )
    
}

export default Contatos;