import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";

export const Footer = () => {
	return (
		<div className="bg-dark footer">
			<Container className="text-center text-white py-4">
				<Row>
					<Col sm={12} md={3}>
						<img
							className="rounded-circle text-center py-2"
							src="https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/328616358_556590029746692_1897079217511533681_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=W5TFkG91gMMAX-YUo9v&_nc_ht=scontent-cpt1-1.xx&oh=00_AfCk3QeJAeZ9IU3FnOXnJ8MehG4Aj10GL6qtJrATFF6ptQ&oe=640714B3"
							alt="First slide"
							height="100"
						/>
						<p>
							Hope Again <br />
							Recovery Home <br />
							est. 2007
						</p>
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
								Facebook
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
						<a
							href="https://www.facebook.com/HOPEAGAINRECOVERYHOME/"
							target="_blank"
							rel="noreferrer"
						>
							<i className="bi bi-facebook icon"></i>
						</a>
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
