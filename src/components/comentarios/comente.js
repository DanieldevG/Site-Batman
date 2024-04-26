import React from "react";
import './comente.css';

function Comente(){
    return(
        <div>
             <div className="foto-1"></div> 
            <form id="editar" action="./comente.js">  
             <textarea id="mensagem" name="mensagem" rows="4" cols="50"></textarea>
            </form>
        </div>
    )
}

export default Comente;