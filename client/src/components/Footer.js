import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";

export const Footer = () => {
	return (
		<div className="main-footer">
			<Container className="text-center py-1">
				<Row>
					<Col className="icon ">
						<img
							className="text-center py-3"
							src="google.com"
							alt="First slide"
							height="150"
						/>
					</Col>
					<Col className="col-md-3 col-sm-4">
						<h4>More Projects</h4>
						<a href="/projects">New Building</a>
					</Col>
					<Col className="col-md-3 col-sm-6">
						<h4>Socials</h4>
						<a href="https://www.facebook.com/HOPEAGAINRECOVERYHOME/">
							Visit FaceBook
						</a>
					</Col>
					<Col className="col-md-3 col-sm-6">
						<h4>Contact Us</h4>
						<p>
							021 371 7323 57 Artemis Road, Woodlands, Mitchells Plain
							secretary@mounthope.co.za
						</p>
					</Col>
				</Row>
				<Row>
					<Col className="footer-bottom">
						<p className="text-center">
							Copyright &copy;{new Date().getFullYear()} H-A-R-H
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
