import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';

const FormContact=()=>{
    return(
        <Form>
            <Row className='mb-3'>
                <Col>
                <Form.Control placeholder="First name" />
                </Col>
                <Col>
                <Form.Control placeholder="Last name" />
                </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Col sm={6}>
                <Form.Control type="email" placeholder="Email" />
                </Col>
                <Col sm={6}>
                <Form.Control type="email" placeholder="Valid Email" />
                </Col>
            </Form.Group>
            <hr className='mt-4'/>
            <div className='d-flex justify-content-center'>
                <Button className="btn btn-warning btn-lg" type="submit">Submit form</Button>
            </div>
        </Form>
    )
}
export default FormContact