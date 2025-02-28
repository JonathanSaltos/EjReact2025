import './resultado.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Resultado() {

    return (

        <div className="row text-center">
            <div className=" justify-content-center align-items-center">
                <p>El resultado de la operación Aritmética es:</p>
                <output aria-label="Resultado">2</output>
            </div>

        </div>
    )


}



export default Resultado;