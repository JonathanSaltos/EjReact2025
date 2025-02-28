import './operaciones.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

const renderTooltip = (texto) => (
    <Tooltip id="button-tooltip">
        {texto}
    </Tooltip>
);

function Operaciones({ numero1, numero2, setResultado }) {

    return (
        <div>
            <Row className="row text-center">
                <Col> <OverlayTrigger
                    placement="top"
                    overlay={renderTooltip('Sumar')}>

                    <Button type="button" variant="primary" onClick={() => setResultado(numero1 + numero2)}>+</Button>


                </OverlayTrigger>
                </Col>

                <Col ><OverlayTrigger
                    placement="top"
                    overlay={renderTooltip('Multiplicar')}>

                    <Button type="button" variant="secondary" onClick={() => setResultado(numero1 * numero2)}>X</Button></OverlayTrigger>

                </Col>
            </Row>

            <Row className="row text-center">
                <Col> <OverlayTrigger
                    placement="top"
                    overlay={renderTooltip('Restar')}>

                    <Button type="button" variant="danger" onClick={() => setResultado(numero1-numero2)}>-</Button>

                </OverlayTrigger>
                </Col>

                <Col><OverlayTrigger
                    placement="top"
                    overlay={renderTooltip('Dividir')}>

                    <Button type="button" variant="warning" onClick={() => setResultado(numero1/numero2)}>%</Button></OverlayTrigger>

                </Col>
            </Row>
        </div>

    )


}

export default Operaciones;