import './operaciones.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Operaciones({ numero1, numero2, setResultado }) {

    return (
        <div className="row text-center">
            <div className="col-6  justify-content-center align-items-center">
            <button type="button" class="btn btn-primary" onClick={() => setResultado(numero1 + numero2)}>+</button>
            </div>

            <div className="col-6  justify-content-center align-items-center">
            <button type="button" class="btn btn-secondary" onClick = {() => setResultado(numero1*numero2)}>X</button>

            </div>

            <div className="col-6  justify-content-center align-items-center">
            <button type="button" class="btn btn-danger"onClick = {() => setResultado(numero1-numero2)} >-</button>

            </div>

            <div className="col-6  justify-content-center align-items-center">
            <button type="button" class="btn btn-warning">%</button>

            </div>

            
    
        </div>

    )


}

export default Operaciones;