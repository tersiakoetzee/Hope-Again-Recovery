import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { PageHeaderTemplate } from "./PageHeaderTemplate";
import { Template } from "./Template";
import test from "../assets/img2.jpeg";
import { Container, Row, Col } from "react-bootstrap";
import { AdmissionItem } from "./AdmissionItem";
import "./AdmissionInfo.css";
import { Heading2 } from "./Heading2";

export const AdmissionInfo = () => {
	return (
		<Template>
			<PageHeaderTemplate title="How Admission Works" image={test} />
			<Container fluid>
				<Row className="justify-content-center">
					<Col className="py-5 d-flex justify-content-center align-items-center ai-col-height" lg={8}>
						<div className="ai-content px-3">
							<Card className="border-0 m-0 p-0">
								<Heading2 className="text-yellow">Steps to how admission works at Hope Again Recovery Home</Heading2>
								<Card.Body className="m-0 p-0">
									<ListGroup variant="flush">

										<AdmissionItem
											color="text-dark"
											text="Contact us to book your screening"
										/>
										<AdmissionItem
											color="text-dark"
											text="Client candidate must be sober at all costs for screening"
										/>

										<AdmissionItem
											color="text-dark"
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
											color="text-dark"
											text="Once there is a mutual acceptance of the T’s & C’s of the
									program, the candidate has been accepted into the 6-9 month
									aftercare program"
										/>
									</ListGroup>
									<Card.Text className="d-flex my-3">
										<div className="border p-2 px-lg-5">
											<p className="lead">Admission Fee: R1950</p>
											<p className="lead">Monthly Fee: R1900</p>
										</div>
									</Card.Text>
											<Card.Link className="btn btn-success ms-1 mt-2" href="/booking">
												Book a Screening
											</Card.Link>
								</Card.Body>
							</Card>
						</div>
					</Col>
					<Col className="p-0" lg={4}>
						<div className="bg-blue ai-block"></div>
					</Col>
				</Row>
				<Row>

				</Row>
			</Container>
		</Template>
	);
};
