import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
export const AdmissionInfo = () => {
	return (
		<Card className="bg-light card border-light mt-5 mx-5 px-5 py-5">
			<Card.Title className="text-center">How Admission Works</Card.Title>
			<Card.Subtitle className="mb-2 text-muted text-center">
				{" "}
				These are the steps to how admission into Hope Again Recovery Home
				works:
			</Card.Subtitle>
			<Card.Body>
				<ListGroup variant="flush">
					<ListGroup.Item className="text-center">
						Contact us to book your screening (See{" "}
						<Card.Link class="link-dark fw-bold" href="/booking">
							Book a Screening
						</Card.Link>
						)
					</ListGroup.Item>
					<ListGroup.Item className="text-center">
						Client candidate must be sober at all costs for screening
					</ListGroup.Item>
					<ListGroup.Item>
						The screening must be attended along with an assigned
						care-giver—this is the care-giver willing to take responsibility
						along with the client, for their recovery journey.
					</ListGroup.Item>
					<ListGroup.Item>
						During a screening, the program will be explained and an acceptance
						agreement is shared both verbally and on paper.
					</ListGroup.Item>
					<ListGroup.Item>
						Once there is a mutual acceptance of the T’s & C’s of the program,
						the candidate has been accepted into the 6-9 month aftercare program
					</ListGroup.Item>
					<ListGroup.Item>
						After acceptance, a health assessment will be conducted to
						understand the medical state of the client—this is a cost incurred
						by the family, but arrangements are made through the program
					</ListGroup.Item>
				</ListGroup>
				<Card.Text className="text-center">
					Admission Fee: R1950 <br />
					Monthly Fee: R1900
				</Card.Text>
			</Card.Body>
		</Card>
	);
};
