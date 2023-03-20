import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../img/harh-logo.png";
import "./Footer.css";

export const Footer = () => {
	return (
		<div className="main-footer ">
			<Container className="text-center py-1">
				<Row>
					<Col className="icon " sm={12} md={3}>
						<img
							className=" icon text-center py-2"
							src={logo}
							alt="First slide"
							width="160"
							height="100"
						/>
						{/* footer logo */}
						<p>est. 2007</p>
					</Col>
					<Col sm={12} md={3}>
						<h4>More Projects</h4>
						<a style={{ color: "white" }} href="/projects">
							New Building
						</a>
					</Col>
					<Col sm={12} md={3}>
						<h4>Socials</h4>
						<a
							style={{ color: "white" }}
							href="https://www.facebook.com/HOPEAGAINRECOVERYHOME/"
						>
							Visit FaceBook
						</a>
					</Col>
					<Col sm={12} md={3}>
						<h4>Contact Us</h4>
						<p>
							021 371 7323 57<br></br> Artemis Road, Woodlands, Mitchells Plain
							secretary@mounthope.co.za
						</p>
					</Col>
				</Row>
				<Row className="footer-bottom">
					<Col>
						<p>Copyright &copy; {new Date().getFullYear()} H-A-R-H</p>
					</Col>
					<Col>
						<p className=" text-center">Privacy Policy</p>
					</Col>
					<Col>
						<p className=" text-center">Terms & Conditions</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
