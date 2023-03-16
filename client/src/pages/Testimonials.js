import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Template } from "../components/Template";
import Test2 from "../assets/test2.jpg";
import Test3 from "../assets/test3.jpg";
import Test4 from "../assets/test4.jpg";
import "./Testimonials.css";

export const Testimonials = () => {
	return (
		<Template>
			<section id="testimonial-cards">
				<Card className="text-center" id="testimonial-cards-header">
					<Card.Title id="testimonial-cards-title">Testimonials</Card.Title>
					<Card.Text>
						With supporting text below as a natural lead-in to additional
						content.
					</Card.Text>
				</Card>
				<CardGroup>
					<Card>
						<Card.Img variant="top" src={Test2} />
						<Card.Body>
							<Card.Title>Samantha, 26yrs</Card.Title>
							<Card.Text>
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img variant="top" src={Test3} />
						<Card.Body>
							<Card.Title>Nathan, 19yrs</Card.Title>
							<Card.Text>
								This card has supporting text below as a natural lead-in to
								additional content.{" "}
							</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img variant="top" src={Test4} />
						<Card.Body>
							<Card.Title>David, 33yrs</Card.Title>
							<Card.Text>
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This card has even longer content
								than the first to show that equal height action.
							</Card.Text>
						</Card.Body>
					</Card>
				</CardGroup>
			</section>
		</Template>
	);
};
