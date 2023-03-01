import { Template } from "../components/Template";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Program = () => {
	return (
		<Template>
			<Container>
				<Row className="square rounded border border-3 bg-light ">
					<Col className="text-center py-3">
						<h3>After Care Program</h3>
						<p>
							6-9 month inhouse program focused on:<br></br>
							One on one counselling Comprehensive assessments Group counselling
							Support groups Family restoration Gardening Project Support in a
							safe, sober living environment Contact made with precious
							employers (if indicated)
						</p>
					</Col>
					<Col className="text-center py-3 square rounded border border-3 bg-secondary">
						<img
							src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fGdyb3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
							alt="First slide"
							height="250"
						></img>
					</Col>
				</Row>
				<Row className="square rounded border border-3  bg-light">
					<Col className="text-center py-3">
						<h3>Early Intervention Program</h3>
						<p>
							Schools and community program targeted at ages 13-21 years:
							<br></br>
							Motivational Interviews Comprehensive assessments One-on-one
							counselling with a social worker Group counselling Support Groups
							Family restoration Random Multi-drug urine testing
						</p>
					</Col>
					<Col className="text-center py-3 square rounded border border-3 bg-secondary">
						<img
							src="https://images.unsplash.com/photo-1516149893016-813d9a01d5d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eW91dGh8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
							alt="First slide"
							height="250"
						></img>
					</Col>
				</Row>
			</Container>
		</Template>
	);
};
