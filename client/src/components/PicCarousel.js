import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PicCarousel.css";
import Image1 from "../assets/img1.jpeg";
import Image2 from "../assets/img2.jpeg";
import Image3 from "../assets/img3.jpeg";
export const PicCarousel = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={Image1}
					alt="First slide"
					height="760"
				/>{" "}
				<Carousel.Caption>
					<h3>Celebrate Sobriety</h3>

					<p>
						Our last fundraiser to raise awareness on substance use, and
						fundraiser for land.
					</p>
					<a href="/projects" className="btn btn-lg btn-dark">
						View more here
					</a>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={Image2}
					alt="Second slide"
					height="760"
				/>

				<Carousel.Caption>
					<h3>Book A Screening</h3>

					<p>Find out how admission works and book a screening.</p>
					<a href="/booking" className="btn btn-lg btn-dark">
						{" "}
						View more here
					</a>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={Image3}
					alt="Third slide"
					height="760"
				/>

				<Carousel.Caption>
					<h3>Land Project</h3>

					<p>
						Mount Hope plans to erect a Leadership Centre for Skills Development
						and Recovery for Men and Women.
					</p>
					<a href="/" className="btn btn-lg btn-dark">
						View more here
					</a>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};
