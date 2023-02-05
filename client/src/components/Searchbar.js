import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function ButtonsExample() {
  return (
    <div className=''>
         <div id="sc2">
            <div id="sc21" onclick="window.location.href='index.html'">
                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1200px-EBay_logo.svg.png"
                    alt=""/> */}
            </div>

            <div id="sc22">
                <p>
                    Shop by category
                </p>
                <i class="far fa-angle-down"></i>
            </div>
            <div id="sc23">
                <i class="far fa-solid fa-search" styles="margin-left: 5px;"></i>
                <input type="text" name="" placeholder="Search for anything" id=""/>
                <div>
                    <button name="" id="">
                        All category
                    </button>
                    <i class="far fa-solid fa-angle-down"></i>
                </div>
            </div>

            <Button variant="outline-secondary" id="button-addon2" class="btn-lg btn-primary">
                Search
            </Button>
        </div>
    </div>
  );
}

export default ButtonsExample;