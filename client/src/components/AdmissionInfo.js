import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { PageHeaderTemplate } from "./PageHeaderTemplate";
import { Template } from "./Template";
import test from "../assets/img2.jpeg";
import { Container, Row, Col } from "react-bootstrap";
import { AdmissionItem } from "./AdmissionItem";

export const AdmissionInfo = () => {
	return (
		<Template>
			<PageHeaderTemplate title="How Admission Works" image={test} />
			<Container>
				<Row className="justify-content-center">
					<Col lg={8}>
						<Card className="border-0 mt-5">
							<Card.Subtitle className="text-muted text-center h-2">
								Steps to how admission works at Hope Again Recovery Home:
							</Card.Subtitle>
							<Card.Body>
								<ListGroup variant="flush">
									<ListGroup.Item className="border-0 d-flex align-items-center">
										<i className="bi bi-circle-fill mx-1 text-warning"></i>
										<p className="mb-0">Contact us to book your screening </p>
									</ListGroup.Item>
									<AdmissionItem
										color="text-success"
										text="Client candidate must be sober at all costs for screening"
									/>

									<AdmissionItem
										color="text-primary"
										text="The screening must be attended along with an assigned
										care-giver—this is the care-giver willing to take responsibility
										along with the client, for their recovery journey."
									/>
									<AdmissionItem
										color="text-dark</span>"
										text="During a screening, the program will be explained and an
										acceptance agreement is shared both verbally and on paper."
									/>

									<AdmissionItem
										color="text-danger"
										text="Once there is a mutual acceptance of the T’s & C’s of the
									program, the candidate has been accepted into the 6-9 month
									aftercare program"
									/>
								</ListGroup>
								<Card.Text className="text-center d-flex justify-content-center">
									<div className="border p-2 px-lg-5">
										<p className="lead">Admission Fee: R1950</p>
										<p className="lead">Monthly Fee: R1900</p>
										<Card.Link className="btn btn-success ms-1" href="/booking">
											Book a Screening
										</Card.Link>
									</div>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</Template>
	);
};
