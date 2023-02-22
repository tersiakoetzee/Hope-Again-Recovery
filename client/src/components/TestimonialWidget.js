import Card from "react-bootstrap/Card";
import "./../pages/Home.css";

export const TestimonialWidget = () => {
	return (
		<Card
			className="bg-dark text-white vid-test-component"
			id="testimonial-widget"
		>
			<Card.Img
				src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
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
