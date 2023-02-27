import { Template } from "../components/Template";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Projects = () => {
	return (
		<Template>
			<Container>
				<Row className="square rounded border border-3">
					<Col className="col-md-6 col-sm-6 text-center py-4">
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
					<Col className="col-md-6 col-sm-6 text-center py-4">
						<img
							className="img-fluid shadow-2-strong"
							src="https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/315212994_660147695543635_6295274609281976028_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=OtTcppY6k9YAX_gflli&_nc_ht=scontent-cpt1-1.xx&oh=00_AfASYhQmqj_jQtd0V6khjIFkD4BYenM-ToQ3h0BTvHjwyA&oe=640220B3"
							alt=""
						/>
					</Col>
					<Col className="col-md-4 col-sm-4 text-center py-4">
						<h4>34M+</h4>
						<p>Donations Received</p>
					</Col>
					<Col className="col-md-4 col-sm-4 text-center py-4">
						<h4>400+</h4>
						<p>Volunteers</p>
					</Col>
					<Col className="col-md-4 col-sm-4 text-center py-4">
						<h4>20+</h4>
						<p>Care Homes</p>
					</Col>
				</Row>
			</Container>
		</Template>
	);
};
