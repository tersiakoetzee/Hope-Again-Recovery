import { Template } from "../components/Template";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import familyBg from "../img/about-bg.png";
import { PageHeaderTemplate } from "../components/PageHeaderTemplate";
import { Paragraph } from "../components/Paragraph";
import "./FamilyDays.css";

export const FamilyDays = () => {
	return (
		<Template>
			<PageHeaderTemplate title="Family Day" image={familyBg} />
			<Container fluid>
				<Row className="flex-lg-row-reverse fd-row bg-dark text-white">
					<Col className="py-3 d-flex justify-content-center align-items-center" lg={6}>
						<div className="fd-content-container w-100">
							<img
								src="https://images.unsplash.com/photo-1623501387383-1e19e63f17b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGZhbWlseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
								alt="First slide"
								className="w-100 rounded"
							></img>
						</div>
					</Col>
					<Col className="d-flex justify-content-center align-items-center fd-text-col" lg={6}>
						<div className="fd-content-container w-100">
							<Paragraph>
								Family Days are held once a month and hosted by HARH.<br />
								Clients are able to spend the morning with their families around
								a meal and fellowship.<br />
								These dates and times are shared with family members timeously so
								necessary arrangements can be made, but cannot be given upfront as
								it is dependent on HARH programming.
							</Paragraph>
						</div>
						<div className="fd-yellow-block"></div>
					</Col>
				</Row>
				<div className="fd-white-block"></div>
			</Container>
		</Template>
	);
};
