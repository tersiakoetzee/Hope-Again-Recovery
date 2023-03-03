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
							src="https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/328616358_556590029746692_1897079217511533681_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=W5TFkG91gMMAX-YUo9v&_nc_ht=scontent-cpt1-1.xx&oh=00_AfCk3QeJAeZ9IU3FnOXnJ8MehG4Aj10GL6qtJrATFF6ptQ&oe=640714B3"
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
