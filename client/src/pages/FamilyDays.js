import { Template } from "../components/Template";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const FamilyDays = () => {
	return (
		<Template>
			<Container className="text-center py-3">
				<Row>
					<Col className="text-center py-3 rounded border border-3">
						<h2>Family Days</h2>
						<div>
							<img
								src="https://images.unsplash.com/photo-1623501387383-1e19e63f17b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGZhbWlseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
								alt="First slide"
								height="150"
							></img>
						</div>
						<p>
							Family Days are held once a month and hosted by HARH.<br></br>
							Clients are able to spend the morning with their families around
							aa meal and fellowship.<br></br>
							These dates and times are shared with family members timeously so
							necessary arrangements can be made, but cannot be given upfront as
							it is dependent on HARH programming.
						</p>
					</Col>
				</Row>
			</Container>
		</Template>
	);
};
