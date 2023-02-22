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
				<Card.Title className="card-title">Card title</Card.Title>
				<Card.Text className="card-para">
					This is a wider card with supporting text below as a natural lead-in
					to additional content. This content is a little bit longer.
				</Card.Text>
				<Card.Text>Last updated 3 mins ago</Card.Text>
			</Card.ImgOverlay>
		</Card>
	);
};
