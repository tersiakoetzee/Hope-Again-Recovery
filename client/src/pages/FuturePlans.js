import { Template } from "../components/Template";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Future from "../assets/futureplans.jpg";

export const FuturePlans = () => {
	return (
		<Template>
			<Container>
				<Row className="square rounded border border-3 ">
					<Col className="text-center py-4">
						<h1>Future Plans</h1>
						<p>
							Mount Hope Projects continues to dream for flourishing
							communities. We are currently working to grow our Early
							Intervention program that focuses on life skills development and
							psycho-social support among children under the age of 13 years
							old. Our aim is to provide a safe green space for children that
							encourages self-awareness and provides the necessary support to
							ensure children do not resort to drugs and gangsterism. The
							program continues to be developed and needs both prayer and
							resources.
						</p>
					</Col>
					<Col className=" text-center py-4">
						<img
							className="img-fluid shadow-2-strong"
							src={Future}
							width="100%"
							height="auto"
							alt="Land Project"
						/>
					</Col>
				</Row>
			</Container>
		</Template>
	);
};
