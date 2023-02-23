import Card from "react-bootstrap/Card";
import "./../pages/Home.css";

export const TestimonialWidget = () => {
	return (
		<Card
			className="bg-dark text-white vid-test-component"
			id="testimonial-widget"
		>
			<Card.Img
				src="/testimonial-widget/testimonial-widget.jpg"
				alt="Card image"
			/>
			<Card.ImgOverlay>
				<Card.Title className="card-title" id="testimonial-title">
					Testimonials
				</Card.Title>
				<Card.Text className="card-para" id="testimonial-para">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					varius enim in eros elementum tristique. Duis cursus, mi quis viverra
					ornare, eros dolor interdum nulla, ut .
				</Card.Text>
				</Card.ImgOverlay>
		</Card>
	);
};
