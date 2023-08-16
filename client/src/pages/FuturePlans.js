import { Template } from "../components/Template";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Future from "../assets/futureplans.jpg";
import { PageHeaderTemplate } from "../components/PageHeaderTemplate";
import projectImg from "../assets/img1.jpeg";
import { Heading2 } from "../components/Heading2";
import { Paragraph } from "../components/Paragraph";
import "./Projects.css";

export const FuturePlans = () => {
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
								Future <span className="text-yellow">Plans</span>
							</Heading2>
							<Paragraph>
								Mount Hope Projects continues to dream for flourishing
								communities. We are currently working to grow our Early
								Intervention program that focuses on life skills development and
								psycho-social support among children under the age of 13 years
								old. Our aim is to provide a safe green space for children that
								encourages self-awareness and provides the necessary support to
								ensure children do not resort to drugs and gangsterism. The
								program continues to be developed and needs both prayer and
								resources.
							</Paragraph>
						</div>
					</Col>
					<Col className="p-0 lp-col-height" lg={6}>
						<img src={Future} width="100%" height="100%" alt="Future Project" />
					</Col>
				</Row>
				<Row>
					<div className="bg-blue lp-stats p-0 m-0"></div>
				</Row>
			</Container>
		</Template>
	);
};
