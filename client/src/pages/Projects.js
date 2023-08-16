import { Template } from "../components/Template";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image6 from "../assets/img6.jpg";
import { PageHeaderTemplate } from "../components/PageHeaderTemplate";
import projectImg from "../assets/img1.jpeg";
import "./Projects.css";
import { Heading2 } from "../components/Heading2";
import { Paragraph } from "../components/Paragraph";

export const Projects = () => {
	return (
		<Template>
			<PageHeaderTemplate title="Projects" image={projectImg} />
			<Container fluid>
				<Row>
					<Col
						className="py-5 d-flex justify-content-center align-items-center lp-col-height"
						lg={6}
					>
						<div className="lp-content px-3">
							<Heading2>
								Land <span className="text-yellow">Project</span>
							</Heading2>
							<Paragraph>
								Land: In October 2019 Mount Hope Projects purchased land with
								the plan to erect a Leadership Centre for Skills Development and
								Recovery for Men and Women. We are currently partnering with the
								students of CAD4All who are part of drawing up the building
								plans for the centre. This dream for our community aims to see
								our youth upskilled, employable, and less susceptible to the
								snare of drug abuse and gangsterism.
							</Paragraph>
						</div>
					</Col>
					<Col className="p-0 lp-col-height" lg={6}>
						<img src={Image6} width="100%" height="100%" alt="Land Project" />
					</Col>
				</Row>
				<Row className="bg-blue text-white text-center justify-content-center align-items-center lp-stats">
					<Col lg={3} className="py-4">
						<h4>34M+</h4>
						<p>Donations Received</p>
					</Col>
					<Col className="py-4" lg={3}>
						<h4>400+</h4>
						<p>Volunteers</p>
					</Col>
					<Col className="py-4" lg={3}>
						<h4>20+</h4>
						<p>Care Homes</p>
					</Col>
				</Row>
			</Container>
		</Template>
	);
};
