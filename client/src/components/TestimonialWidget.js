import Card from "react-bootstrap/Card";
import "./TestimonialWidget.css";
import Image1 from "../assets/testimonial-widget.jpg";

export const TestimonialWidget = () => {
	return (
		<Card className="text-white" id="testimonial-widget">
			<Card.Img src={Image1} alt="Card image" />
			<Card.ImgOverlay className="d-flex flex-column align-items-end justify-content-end">
				<Card.Title className="card-title mx-auto" id="testimonial-title">
					Testimonials
				</Card.Title>
				<Card.Text className="card-para" id="testimonial-para">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					varius enim in eros elementum tristique. Duis cursus, mi quis viverra
					ornare, eros dolor interdum nulla, ut. Read more{" "}
					<a href="/about"> here.</a>
				</Card.Text>
			</Card.ImgOverlay>
		</Card>
	);
};
