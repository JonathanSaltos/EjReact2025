import './App.css';
import Header from './componentes/ui/Header';
import Footer from './componentes/ui/Footer';
import Numerosx from './componentes/num/Numerosx.jsx';
import Operaciones from './componentes/operaciones/Operaciones.jsx';
import Resultado from './componentes/resultado/Resultado.jsx';
function App() {

  
  return (
    <div>
      <Header/>
      <Numerosx/>
      <Operaciones/>
      <Resultado/>
      <Footer/>
    </div>


  )

}

export default App
