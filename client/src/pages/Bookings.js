import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useState } from "react";
import { Template } from "../components/Template";
import { BookingConfirmation } from "../components/BookingConfirmation";

export const Bookings = () => {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [age, setAge] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [addressLine1, setAddressLine1] = useState("");
	const [addressLine2, setAddressLine2] = useState("");
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	const [answer1, setAnswer1] = useState("");
	const [answer2, setAnswer2] = useState("");
	const [email, setEmail] = useState("");
	const [postCode, setPostCode] = useState("");
	const [whichOne, setWhichOne] = useState("");
	const [dateTime, setDateTime] = useState(null);
	const [validated, setValidated] = useState(false);
	// Booking confirmation pop up variables
	const [confirmation, setConfirmation] = useState(false);
	const [openConfirmation, setOpenConfirmation] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;

		setValidated(true);
		if (form.checkValidity() === false) {
			event.stopPropagation();
		} else {
			await axios
				.post("/api/booking", {
					name,
					surname,
					age,
					phoneNumber,
					addressLine1,
					addressLine2,
					city,
					country,
					dateTime,
					answer1,
					answer2,
					email,
					postCode,
					whichOne,
				})
				.then(() => {
					console.log("Booking Successful");
					setConfirmation(true);
					setOpenConfirmation(true);
				})
				.catch((err) => {
					console.log(err);
					setOpenConfirmation(true);
					setConfirmation(false);
				});
		}
	};

	const isWeekday = (date) => {
		const day = date.getDay();
		return day !== 0 && day !== 1 && day !== 2 && day !== 5 && day !== 6;
	};

	return (
		<Template>
			<h1 style={{ textAlign: "center" }}>Book a Screening</h1>
			<Form
				className="row g-3 needs-validation mx-5 my-5"
				noValidate
				validated={validated}
				onSubmit={handleSubmit}
				style={{
					border: " 1px solid",
					padding: "20px",
					borderRadius: "25px",
				}}
			>
				<Row className="mb-3">
					<Form.Group as={Col} sm={12} md={6} controlId="formGridName">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="name"
							placeholder="Enter name"
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group as={Col} sm={12} md={6} controlId="formGridSurname">
						<Form.Label>Surname</Form.Label>
						<Form.Control
							type="surname"
							placeholder="Enter surname"
							onChange={(e) => setSurname(e.target.value)}
							required
						/>
					</Form.Group>
				</Row>
				<Row className="mb-3">
					<Form.Group sm={12} as={Col} controlId="formGridAge">
						<Form.Label>Age</Form.Label>
						<Form.Control
							type="number"
							placeholder="Enter age"
							onChange={(e) => setAge(e.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group as={Col} sm={12} md={6} controlId="formGridEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>
					<Form.Group as={Col} sm={12} md={6} controlId="formGridPhoneNumber">
						<Form.Label>Phone Number</Form.Label>
						<Form.Control
							type="number"
							placeholder="Enter phone number"
							onChange={(e) => setPhoneNumber(e.target.value)}
							required
						/>
					</Form.Group>
				</Row>

				<Row className="mb-3">
					<Form.Group as={Col} sm={12} md={6} controlId="formGridAddress1">
						<Form.Label>Street Address</Form.Label>
						<Form.Control
							placeholder="123 Main Street"
							onChange={(e) => setAddressLine1(e.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group as={Col} sm={12} md={6} controlId="formGridAddress2">
						<Form.Label>Suburb</Form.Label>
						<Form.Control
							placeholder="Moghul Park"
							onChange={(e) => setAddressLine2(e.target.value)}
							required
						/>
					</Form.Group>
				</Row>

				<Row className="mb-3">
					<Form.Group as={Col} sm={12} md={4} controlId="formGridCity">
						<Form.Label>City</Form.Label>
						<Form.Control onChange={(e) => setCity(e.target.value)} required />
					</Form.Group>

					<Form.Group as={Col} sm={12} md={4} controlId="formGridCountry">
						<Form.Label>Country</Form.Label>
						<Form.Control
							onChange={(e) => setCountry(e.target.value)}
							required
						/>
					</Form.Group>

					<Form.Group as={Col} sm={12} md={4} controlId="formGridPostalCode">
						<Form.Label>Postal Code</Form.Label>
						<Form.Control onChange={(e) => setPostCode(e.target.value)} />
					</Form.Group>
				</Row>
				<Form.Group controlId="dob">
					<Form.Label>Select Date and Time for screening:</Form.Label>
					<DatePicker
						selected={dateTime}
						onChange={(date) => setDateTime(date)}
						filterDate={isWeekday}
						showTimeSelect
						dateFormat="Pp"
						placeholderText="Select a date and time"
						required
					/>
				</Form.Group>
				<br />

				<Form.Label>
					{" "}
					Have you previously been to a treatment centre?
				</Form.Label>
				<Form.Select
					aria-label="Default select example"
					onChange={(e) => setAnswer1(e.target.value)}
					required
				>
					<option selected disabled>
						Open this select menu
					</option>
					<option value="yes">Yes</option>
					<option value="no">No</option>
				</Form.Select>
				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>If so, which one?</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						onChange={(e) => setWhichOne(e.target.value)}
					/>
				</Form.Group>

				<Form.Label>
					{" "}
					Do you acknowledge that Hope Again Recovery Home requires that you
					have an assigned care-giver on your recovery journey?{" "}
				</Form.Label>
				<Form.Select
					aria-label="Default select example"
					onChange={(e) => setAnswer2(e.target.value)}
					required
				>
					<option>Open this select menu</option>
					<option value="yes">Yes</option>
					<option value="no">No</option>
				</Form.Select>
				<Button
					variant="primary"
					className="btn btn-success text-light"
					type="submit"
				>
					Submit
				</Button>

				{openConfirmation && (
					<BookingConfirmation
						date={dateTime.toDateString()}
						time={`${dateTime.toLocaleTimeString()}`}
						confirmation={confirmation}
						closeConfirmation={() => setOpenConfirmation(false)}
					/>
				)}
			</Form>
		</Template>
	);
};
