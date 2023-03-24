import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../img/harh-logo.png";
import "./Footer.css";

export const Footer = () => {
	return (
		<div className="bg-dark footer">
			<Container className="text-center text-white py-5">
				<Row>
					<Col sm={12} md={3}>
						<img
							className="text-center"
							src={logo}
							alt="First slide"
							width="170"
							height="47"
						/>
						<p>est. 2007</p>
					</Col>
					<Col sm={12} md={3}>
						<h4 className="mt-4 mt-md-0">Useful Links</h4>
						<hr className="text-yellow" />
						<p>
							<a href="/projects">New Building</a>
						</p>
						<p>
							<a href="/booking">Book Screening</a>
						</p>
						<p>
							<a href="/">Donation</a>
						</p>
					</Col>
					<Col sm={12} md={3}>
						<h4 className="mt-4 mt-md-0">Socials</h4>
						<hr className="text-yellow" />
						<p>
							<a
								href="https://www.facebook.com/HOPEAGAINRECOVERYHOME/"
								target="_blank"
								rel="noreferrer"
							>
								<i className="bi bi-facebook"></i> Facebook
							</a>
						</p>
					</Col>
					<Col sm={12} md={3}>
						<h4 className="mt-4 mt-md-0">Contact Info</h4>
						<hr className="text-yellow" />
						<p>
							<i className="bi bi-telephone-fill"></i> 021 371 7323
						</p>
						<p>
							<i className="bi bi-envelope-fill"></i> secretary@mounthope.co.za
						</p>
						<p>
							<i className="bi bi-geo-alt-fill"></i> 57 Artemis Road Woodlands
							Mitchells Plain
						</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<hr className="text-yellow mt-4 mt-md-0" />
						<p className="my-2">
							<a href="/#">
								Copyright &copy; {new Date().getFullYear()} H-A-R-H
							</a>
							<span className="text-warning"> | </span>
							<a href="#/">Privacy Policy</a>
							<span className="text-warning"> | </span>
							<a href="/#">Terms & Conditions</a>
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
