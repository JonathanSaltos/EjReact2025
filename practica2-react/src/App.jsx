import './App.css';
import React, { useState } from "react"; 
import Header from './componentes/ui/Header';
import Footer from './componentes/ui/Footer';
import Numerosx from './componentes/num/Numerosx.jsx';
import Operaciones from './componentes/operaciones/Operaciones.jsx';
import Resultado from './componentes/resultado/Resultado.jsx';

function App() {

const [numero1, setNumero1] = useState('');
const [numero2, setNumero2] = useState('');
const [resultado, setResultado] = useState('');
  return (

    <div>
      <Header/>
      <Numerosx setNumero1={setNumero1} setNumero2={setNumero2}/>
      <Operaciones numero1={numero1} numero2={numero2} setResultado={setResultado}/>
      <Resultado resultado={resultado}/>
      <Footer/>
    </div>


  )

}

export default App
