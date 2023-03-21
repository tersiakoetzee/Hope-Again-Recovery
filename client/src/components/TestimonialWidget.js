import Card from "react-bootstrap/Card";
import "./TestimonialWidget.css";
import Image1 from "../assets/testimonial8.jpg";
import { Heading1 } from "./Heading1";
import { Paragraph } from "./Paragraph";

export const TestimonialWidget = () => {
	return (
		<Card className="text-white testimonial-container" id="testimonial-widget">
			<Card.Img src={Image1} alt="Card image" />
			<Card.Body className="d-flex flex-column align-items-center justify-content-end p-5">
				<i className="bi bi-quote text-yellow align-self-start quote-icon"></i>
				<div className="w-100 px-lg-5 testimoni">
					<Paragraph>
						I was at HARH in 2012 for 9 months and the experience was life
						changing where I met Jesus and got saved. The program was
						disciplined and it has prepared us for some of life’s challenges we
						might face. I&apos;m currently working as a field agent for an asset
						management company and married for 4 years.{" "}
						<i className="bi bi-dash"></i> Matthew
					</Paragraph>
				</div>
				<div className="w-100 px-lg-5 text-center">
					<Heading1 className="text-yellow">Life Changing Stories</Heading1>
					<Paragraph>
						Shared in Hope Again&apos;s life changing testimonials.
					</Paragraph>
					<a href="/testimonials" className="btn btn-warning">
						{" "}
						READ MORE
					</a>
				</div>
			</Card.Body>

		</Card>
	);
};
