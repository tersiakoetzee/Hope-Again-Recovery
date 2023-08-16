import { Template } from "../components/Template";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import familyBg from "../img/about-bg.png";
import { PageHeaderTemplate } from "../components/PageHeaderTemplate";
import { Paragraph } from "../components/Paragraph";
import "./FamilyDays.css";
import { Heading2 } from "../components/Heading2";

export const FamilyDays = () => {
	return (
		<Template>
			<PageHeaderTemplate title="Family Day" image={familyBg} />
			<Container fluid>
				<Row className="bg-dark text-white">
					<Col
						className="py-5 d-flex justify-content-center align-items-center fd-col-height"
						lg={6}
					>
						<div className="fd-content px-3">
							<Heading2 className="text-yellow">
								Family is the heart of a home.
							</Heading2>
							<Paragraph>
								Family Days are held once a month and hosted by HARH. Clients
								are able to spend the morning with their families around a meal
								and fellowship. These dates and times are shared with family
								members timeously so necessary arrangements can be made, but
								cannot be given upfront as it is dependent on HARH programming.
							</Paragraph>
						</div>
					</Col>
					<Col className="p-0 fd-col-height" lg={6}>
						<img
							src="https://images.unsplash.com/photo-1623501387383-1e19e63f17b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGZhbWlseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
							width="100%"
							height="100%"
							alt="Family day"
						/>
					</Col>
				</Row>
				<Row>
					<div className="bg-blue fd-stats p-0 m-0"></div>
				</Row>
			</Container>
		</Template>
	);
};
