import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./MenuBar.css";

export const MenuBar = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container className="justify-content-center flex-grow-1">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse className="text-center" id="basic-navbar-nav">
					<Nav className="me-auto justify-content-center flex-grow-1">
						<Nav.Link className="b-start b-right px-4" href="/">
							Home
						</Nav.Link>
						<Nav.Link className="b-right b-left px-4" href="/about">
							About
						</Nav.Link>
						{/* Program dropdown */}
						<NavDropdown
							className="b-right b-left px-4"
							title="Program"
							id="basic-nav-dropdown"
						>
							<NavDropdown.Item href="#action/3.1">
								Program Outlay
							</NavDropdown.Item>
							<NavDropdown.Item href="/familydays">
								Family Days
							</NavDropdown.Item>
						</NavDropdown>
						{/* Projects dropdown */}
						<NavDropdown
							className="b-right b-left px-4"
							title="Projects"
							id="basic-nav-dropdown"
						>
							<NavDropdown.Item href="#action/3.1">Land</NavDropdown.Item>

							<NavDropdown.Item href="#action/3.3">
								Future Plans
							</NavDropdown.Item>
						</NavDropdown>
						{/* Screening dropdown */}

						<NavDropdown
							className="b-right b-left px-4"
							title="Screening"
							id="basic-nav-dropdown"
						>
							<NavDropdown.Item href="/admission">
								How Admission Works
							</NavDropdown.Item>
							<NavDropdown.Item href="/booking">
								Book a Screening
							</NavDropdown.Item>
						</NavDropdown>

						<Nav.Link className="b-right b-left px-4" href="#link">
							Testimonials
						</Nav.Link>

						{/* Fundings dropdown */}
						<NavDropdown
							className="b-right b-left px-4"
							title="Funding"
							id="basic-nav-dropdown"
						>
							<NavDropdown.Item href="#action/3.1">
								Funding Partners
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">
								Become a Funder
							</NavDropdown.Item>
						</NavDropdown>

						<Nav.Link className="b-left b-end px-4" href="#link">
							Donate Now
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
