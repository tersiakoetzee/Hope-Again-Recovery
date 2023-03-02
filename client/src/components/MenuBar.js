import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const MenuBar = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="/">H-A-R-H</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto justify-content-end flex-grow-1">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
						{/* Program dropdown */}
						<NavDropdown title="Program" id="basic-nav-dropdown">
							<NavDropdown.Item href="/program">
								Program Outlay
							</NavDropdown.Item>
							<NavDropdown.Item href="/familydays">
								Family Days
							</NavDropdown.Item>
						</NavDropdown>
						{/* Projects dropdown */}
						<NavDropdown title="Projects" id="basic-nav-dropdown">
							<NavDropdown.Item href="/projects">Land</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">
								Future Plans
							</NavDropdown.Item>
						</NavDropdown>
						{/* Screening dropdown */}
						<NavDropdown title="Screening" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">
								How Admission Works
							</NavDropdown.Item>
							<NavDropdown.Item href="/booking">
								Book a Screening
							</NavDropdown.Item>
						</NavDropdown>

						<Nav.Link href="#link">Testimonials</Nav.Link>

						{/* Fundings dropdown */}
						<NavDropdown title="Funding" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">
								Funding Partners
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">
								Become a Funder
							</NavDropdown.Item>
						</NavDropdown>

						<Nav.Link className="btn btn-success text-light" href="#link">
							Donate Now
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
