import Card from "react-bootstrap/Card";
import "./TestimonialWidget.css";
import Image1 from "../assets/testimonial8.jpg";
import { Heading1 } from "./Heading1";
import { Paragraph } from "./Paragraph";

export const TestimonialWidget = () => {
	return (
		<Card className="text-white testimonial-container" id="testimonial-widget">
			<Card.Img src={Image1} alt="Card image" />
			<Card.ImgOverlay className="d-flex flex-column align-items-start justify-content-end">
				<Heading1 className="text-yellow">Life Changing Stories</Heading1>
				<Paragraph>Shared in Hope Again&apos;s life changing testimonials.</Paragraph>
				<a href="/testimonials" className="btn btn-warning"> READ MORE</a>
			</Card.ImgOverlay>
		</Card>
	);
};
