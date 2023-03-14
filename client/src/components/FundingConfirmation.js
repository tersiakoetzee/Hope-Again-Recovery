import { Button, Modal, Card } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

export const FundingConfirmation = ({
	companyName,
	country,
	contactNumber,
	name,
	closeConfirmation,
}) => {
	return (
		<Modal show={true} backdrop="static" keyboard={false}>
			<Modal.Body>
				<div className="text-center">
					<Modal.Title>Submission Successful!</Modal.Title>
					<i className="bi bi-check-circle-fill b-icon text-success"></i>
				</div>

				<h5>Your Details</h5>
				<Card className="mb-4 p-2">
					<p className="mb-0">Full name: {name}</p>
					<p className="mb-0">Company Name: {companyName}</p>
					<p className="mb-0">Contact Number: {contactNumber}</p>
					<p className="mb-0">Country: {country}</p>
				</Card>

				<h5>Contact Details</h5>
				<Card className="mb-4 p-2">
					<p className="mb-0">Tel: 021 371 7323</p>
					<p className="mb-0">
						Email:
						<span className="text-primary"> harh@mounthope.co.za</span>
					</p>
					<p className="mb-0">
						Location: 57 Artemis Road, Woodlands, Mitchell’s Plain
					</p>
				</Card>

				<div className="d-flex justify-content-center flex-gap">
					<Button variant="success" className="m-1" onClick={closeConfirmation}>
						OK
					</Button>
					<a className="btn btn-dark m-1" href="/">
						Home
					</a>
				</div>
			</Modal.Body>
		</Modal>
	);
};
