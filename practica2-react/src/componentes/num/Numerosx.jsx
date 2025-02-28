import './numerosx.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Numerosx() {

const Num1 = () => {
 
    setNum1();

}

    return (

        <div className="row text-center">
            <div className="col-6  justify-content-center align-items-center">

                <input class="form-control form-control-lg" type="text" placeholder="Intruduzca Número1" onChange={Num1}>
                </input>

            </div>
            <div className="col-6  justify-content-center align-items-center">


                <input class="form-control form-control-lg" type="text" placeholder="Introduzca Número2">
                </input>

            </div>

        </div>


















    )

}

export default Numerosx;