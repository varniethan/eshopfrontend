import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function ButtonsExample() {
  return (
    <div className='search-header'>
        <div class="row d-flex justify-content-center">
            <div class="col-md-6">
                <InputGroup className="custome_input">
                    <Form.Control
                    placeholder="Search for anything"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    />
                </InputGroup>
            </div>
            <div class="col-md-1">
                <Button variant="outline-secondary" id="button-addon2" class="btn-lg btn-primary">
                    Search
                </Button>
            </div>
        </div>
        <br/>
    </div>
  );
}

export default ButtonsExample;