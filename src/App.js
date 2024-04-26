import './App.css';
import React from 'react';
import Home from'./components/pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contatos from './components/Contato/contato';
import Fotos from './components/fotos/fotos';
import Comente from './components/comentarios/comente';



function App() {

return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home />}/>
        <Route path='/Contatos'element={<Contatos />}/>
        <Route path='/Fotos'element={<Fotos />}/>
        <Route path='/Comentarios'element={<Comente />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
