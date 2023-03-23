import { Template } from "../components/Template";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PageHeaderTemplate } from "../components/PageHeaderTemplate";
import programBg from "../img/about-bg.png";
import { Heading2 } from "../components/Heading2";
import { Paragraph } from "../components/Paragraph";
import "./Program.css";
import { Heading1 } from "../components/Heading1";

export const Program = () => {
	return (
		<Template>
			<PageHeaderTemplate title="Program Outlay" image={programBg} />
			<Container fluid>
				<Row className="justify-content-center text-white care-row">
					<Col
						className="d-flex flex-column align-items-sm-center justify-content-sm-center align-items-lg-end justify-content-lg-end bg-danger pt-3"
						lg={6}
					>
						<div className="po-content-container w-100">
							<Heading2 className="text-yellow">After Care Program</Heading2>
							<Paragraph>
								6-9 month in house program focused on:
								<br />
								One on one counselling <br />
								Comprehensive assessments <br />
								Group counselling <br />
								Support groups <br />
								Family restoration <br />
								Gardening Project <br />
								Support in a safe, sober living environment <br />
								Contact made with precious employers (if indicated)
							</Paragraph>
						</div>
					</Col>
					<Col
						className="d-flex flex-column align-items-sm-center justify-content-sm-center align-items-lg-start justify-content-lg-end p-0"
						lg={6}
					>
						<div className="po-content-container w-100">
							<img
								src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fGdyb3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
								alt="First slide"
								height="300"
								width="100%"
							></img>
						</div>
					</Col>
				</Row>
				<Row className="flex-lg-row-reverse care-row">
					<Col
						className="d-flex flex-column align-items-sm-center justify-content-sm-center align-items-lg-start justify-content-lg-start pt-3 po-col"
						lg={6}
					>
						<div className="po-content-container w-100">
							<Heading2 className="text-blue">
								Early Intervention Program
							</Heading2>
							<Paragraph>
								Schools and community program targeted at ages 13-21 years:{" "}
								<br />
								Motivational Interviews <br />
								Comprehensive assessments <br />
								One-on-one counselling with a social worker <br />
								Group counselling Support Groups <br />
								Family restoration Random Multi-drug urine testing <br />
							</Paragraph>
						</div>
						<div className="po-red-block bg-danger"></div>
					</Col>
					<Col
						className="d-flex flex-column align-items-sm-center justify-content-sm-center align-items-lg-end justify-content-lg-start p-0"
						lg={6}
					>
						<div className="po-content-container w-100">
							<img
								src="https://images.unsplash.com/photo-1516149893016-813d9a01d5d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eW91dGh8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
								alt="First slide"
								height="300"
								width="100%"
							></img>
						</div>
					</Col>
				</Row>
				<Row>
					<Col className="quote-container bg-blue d-flex flex-column justify-content-center align-items-center">
						<blockquote className="blockquote po-content-container w-100">
							<Heading2 className="text-yellow text-center">
								&quot;
								<Heading1 className="d-inline">Strength and growth </Heading1>
								come only through continuous effort and struggle.&quot;
								<Paragraph className="lead text-white d-inline">
									{" "}
									- Napoleon Hill
								</Paragraph>
							</Heading2>
						</blockquote>
					</Col>
				</Row>
			</Container>
		</Template>
	);
};
