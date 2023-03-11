import { Button, Modal, Card } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

export const BookingConfirmation = ({
	confirmation,
	date,
	time,
	closeConfirmation,
}) => {
	return (
		<>
			{confirmation ? (
				<div>
					<Modal show={true} backdrop="static" keyboard={false}>
						<Modal.Body>
							<div className="text-center">
								<Modal.Title>Booking Successful</Modal.Title>
								<i className="bi bi-check-circle-fill b-icon text-success"></i>
							</div>

							<h5>Booking Details</h5>
							<Card className="mb-4 p-2">
								<p className="mb-0">Date: {date}</p>
								<p className="mb-0">Time: {time}</p>
								<p className="mb-0">
									Location: 57 Artemis Road, Woodlands, Mitchell’s Plain
								</p>
							</Card>
							<h5>Contact Details</h5>
							<Card className="mb-4 p-2">
								<p className="mb-0">Tel: 021 371 7323</p>
								<p className="mb-0">
									Email:
									<span className="text-primary"> harh@mounthope.co.za</span>
								</p>
							</Card>

							<div className="d-flex justify-content-center flex-gap">
								<Button
									variant="success"
									className="m-1"
									onClick={closeConfirmation}
								>
									OK
								</Button>
								<a className="btn btn-dark m-1" href="/">
									Home
								</a>
							</div>
						</Modal.Body>
					</Modal>
				</div>
			) : (
				<div>
					<Modal show={true} backdrop="static" keyboard={false}>
						<Modal.Body>
							<div className="text-center mb-4">
								<Modal.Title>Booking Unsuccessful</Modal.Title>
								<i className="bi bi-x-circle-fill b-icon text-danger"></i>
							</div>

							<p className="text-center mb-4">
								Please reload the page and try again!
							</p>

							<div className="d-flex justify-content-center flex-gap">
								<a className="btn btn-success m-1" href="/booking">
									Reload
								</a>
								<a className="btn btn-dark m-1" href="/">
									Home
								</a>
							</div>
						</Modal.Body>
					</Modal>
				</div>
			)}
		</>
	);
};
