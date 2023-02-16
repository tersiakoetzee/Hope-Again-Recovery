import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
function PicCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/2560738.jpg"
          alt="First slide"
          height="550"
        />
        <Carousel.Caption>
          <h3>Celebrate Sobriety</h3>
          <p>Our last fundraiser to raise awareness on substance use, and fundraiser for land.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.wallpapersafari.com/desktop/1280/1024/94/65/m9lET8.jpg"
          alt="Second slide"
          height="550"
        />

        <Carousel.Caption>
          <h3>Book A Screening</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          alt="Third slide"
          height="550"
        />

        <Carousel.Caption>
          <h3>Land Project</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default PicCarousel;