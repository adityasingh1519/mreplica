import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from 'react-bootstrap/Carousel'

function CarouselFade() {
  return (
  
  <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://picsum.photos/900/330/?night"
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://picsum.photos/900/330/?gray"
      alt="Second slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://picsum.photos/900/330/?blackcat"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>


            



  );
}

export default CarouselFade;