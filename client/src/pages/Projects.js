import { Template } from "../components/Template";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image6 from "../assets/img6.jpg";

export const Projects = () => {
	return (
		<Template>
			<Container>
				<Row className="square rounded border border-3 ">
					<Col className="text-center py-4">
						<h4>Our Journey</h4>
						<h1>Land Project</h1>
						<p>
							Land: In October 2019 Mount Hope Projects purchased land with the
							plan to erect a Leadership Centre for Skills Development and
							Recovery for Men and Women. We are currently partnering with the
							students of CAD4All who are part of drawing up the building plans
							for the centre. This dream for our community aims to see our youth
							upskilled, employable, and less susceptible to the snare of drug
							abuse and gangsterism.
						</p>
					</Col>
					<Col className=" text-center py-4">
						<img
							className="img-fluid shadow-2-strong"
							src={Image6}
							width="100%"
							height="auto"
							alt="Land Project"
						/>
					</Col>
				</Row>
			</Container>
			<Container>
				<Row>
					<Col className=" text-center py-4">
						<h4>34M+</h4>
						<p>Donations Received</p>
					</Col>
					<Col className=" text-center py-4">
						<h4>400+</h4>
						<p>Volunteers</p>
					</Col>
					<Col className=" text-center py-4">
						<h4>20+</h4>
						<p>Care Homes</p>
					</Col>
				</Row>
			</Container>
		</Template>
	);
};
