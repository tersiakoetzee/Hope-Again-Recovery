import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../img/harh-logo.png";
import "./MenuBar.css";
export const MenuBar = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container className="menu-bar" fluid>
				<Navbar.Brand href="/">
					<img
						src={logo}
						width="153"
						height="47"
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse className="text-center" id="basic-navbar-nav">
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
							<NavDropdown.Item href="#action/3.1">Land</NavDropdown.Item>

							<NavDropdown.Item href="#action/3.3">
								Future Plans
							</NavDropdown.Item>
						</NavDropdown>
						{/* Screening dropdown */}

						<NavDropdown title="Screening" id="basic-nav-dropdown">
							<NavDropdown.Item href="/admission">
								How Admission Works
							</NavDropdown.Item>
							<Nav.Link
								className="b-right b-left px-4"
								title="Screening"
								href="/booking"
								style={{ color: "black" }}
							>
								Book a Screening{" "}
							</Nav.Link>
						</NavDropdown>
						<Nav.Link href="/testimonials">Testimonials</Nav.Link>
						{/* Fundings dropdown */}
						<NavDropdown title="Funding" id="basic-nav-dropdown">
							<NavDropdown.Item href="/fundingpartners">
								Funding Partners
							</NavDropdown.Item>
							<NavDropdown.Item href="/becomeafunder">
								Become a Funder
							</NavDropdown.Item>
						</NavDropdown>

						<Nav.Link href="#link">Donate Now</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
