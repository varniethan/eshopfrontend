import Carousel from 'react-bootstrap/Carousel';

// assets/images/banner/parts.jpeg
// https://ir.ebaystatic.com/cr/v/c1/NAO-45026-19400.jpeg
// https://i.ebayimg.com/images/g/GnMAAOSwFNRj0mWm/s-l1600.webp
// https://i.ebayimg.com/thumbs/images/g/sTIAAOSwi-5j0BOK/s-l1200.webp
// https://i.ebayimg.com/thumbs/images/g/-qEAAOSwOIFj0Aau/s-l960.webp

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ebayimg.com/thumbs/images/g/sTIAAOSwi-5j0BOK/s-l1200.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ebayimg.com/images/g/GnMAAOSwFNRj0mWm/s-l1600.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;