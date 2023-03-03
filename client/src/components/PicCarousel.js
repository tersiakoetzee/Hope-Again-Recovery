import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PicCarousel.css";
import { Heading1 } from "./Heading1";
export const PicCarousel = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://user-images.githubusercontent.com/125136484/222224717-4856a8d7-eb25-462f-892e-c18ed3b68188.JPG"
					alt="First slide"
					height="550"
				/>
				<Carousel.Caption>
					<Heading1>
						<h3>Celebrate Sobriety</h3>
					</Heading1>
					<p>
						Our last fundraiser to raise awareness on substance use, and
						fundraiser for land.
					</p>
					<a href="/" className="btn btn-lg btn-dark">
						Become a Funder
					</a>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://user-images.githubusercontent.com/125136484/222224718-c24bfea5-d7ae-46ed-a397-d6aa134f513a.JPG"
					alt="Second slide"
					height="550"
				/>

				<Carousel.Caption>
					<Heading1>
						<h3>Book A Screening</h3>
					</Heading1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<a href="/booking" className="btn btn-lg btn-dark">
						{" "}
						Book here
					</a>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://user-images.githubusercontent.com/125136484/222224716-9740ed88-accf-4066-8283-b2066d8eb8a5.JPG"
					alt="Third slide"
					height="550"
				/>

				<Carousel.Caption>
					<Heading1>
						<h3>Land Project</h3>
					</Heading1>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
					<a href="/" className="btn btn-lg btn-dark">
						Our Land Project
					</a>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};
