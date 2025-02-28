import './numerosx.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Numerosx({ setNumero1, setNumero2 }) {


    return (

        <div className="row text-center">
            <div className="col-6  justify-content-center align-items-center">

                <input class="form-control form-control-lg" type="text" placeholder="Intruduzca Número1"  onChange={(e) => setNumero1(Number(e.target.value))}>
                </input>

            </div>
            <div className="col-6  justify-content-center align-items-center">


                <input class="form-control form-control-lg" type="text" placeholder="Introduzca Número2"  onChange={(e) => setNumero2(Number(e.target.value))}>
                </input>

            </div>

        </div>


















    )

}

export default Numerosx;