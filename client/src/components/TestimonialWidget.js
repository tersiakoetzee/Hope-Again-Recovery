import Card from "react-bootstrap/Card";
import "./TestimonialWidget.css";
import Image1 from "../assets/testimonial7.jpg";

export const TestimonialWidget = () => {
	return (
		<Card  className="text-white" id="testimonial-widget">
			<Card.Img src={Image1} alt="Card image" />
			<Card.ImgOverlay className="d-flex flex-column align-items-end justify-content-end">
				<Card.Title className="card-title mx-auto" id="testimonial-title">
					Life Changing Stories
				</Card.Title>
				<Card.Text className="card-para" id="testimonial-para">
					Share in Hope Agains life changing testimonials.
					<a href="/testimonials"> Read more here.</a>
				</Card.Text>
			</Card.ImgOverlay>
		</Card>
	);
};
