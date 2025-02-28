import './operaciones.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Operaciones() {

    return (
        <div className="row text-center">
            <div className="col-6  justify-content-center align-items-center">
            <button type="button" class="btn btn-primary">+</button>
            </div>

            <div className="col-6  justify-content-center align-items-center">
            <button type="button" class="btn btn-secondary">X</button>

            </div>

            <div className="col-6  justify-content-center align-items-center">
            <button type="button" class="btn btn-danger">-</button>

            </div>

            <div className="col-6  justify-content-center align-items-center">
            <button type="button" class="btn btn-warning">%</button>

            </div>

            
    
        </div>

    )


}

export default Operaciones;