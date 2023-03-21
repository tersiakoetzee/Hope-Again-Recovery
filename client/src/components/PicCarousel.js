import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PicCarousel.css";
import Image1 from "../assets/img1.jpeg";
import Image2 from "../assets/img2.jpeg";
import Image3 from "../assets/img3.jpeg";
import { Heading1 } from "./Heading1";
import { Paragraph } from "./Paragraph";

export const PicCarousel = () => {
	return (
		<Carousel className="carousel-container"
			nextIcon={<span aria-hidden="true" className="carousel-control-next-icon bi bi-caret-right-fill" />}
			prevIcon={<span aria-hidden="true" className="carousel-control-next-icon bi bi-caret-left-fill" />}
		>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={Image1}
					alt="First slide"
					height="600"
				/>{" "}
				<Carousel.Caption>
					<Heading1 className="text-yellow">Celebrate Sobriety</Heading1>
					<Paragraph>
						Our last fundraiser to raise awareness on substance use, and
						fundraiser for land.
					</Paragraph>
					<a href="/projects" className="btn btn-lg btn-dark rounded">
						READ MORE
					</a>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={Image2}
					alt="Second slide"
					height="600"
				/>

				<Carousel.Caption>
					<Heading1 className="text-yellow">Book A Screening</Heading1>
					<Paragraph>Find out how admission works and book a screening.</Paragraph>
					<a href="/Admission" className="btn btn-lg btn-dark">
						{" "}
						READ MORE
					</a>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={Image3}
					alt="Third slide"
					height="600"
				/>

				<Carousel.Caption>
					<Heading1 className="text-yellow">Land Project</Heading1>
					<Paragraph>Mount Hope plans to erect a Leadership Centre for Skills Development
						and Recovery for Men and Women.</Paragraph>
					<a href="/" className="btn btn-lg btn-dark">
						READ MORE
					</a>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};
