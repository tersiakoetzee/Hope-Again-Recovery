import { Container, Row, Col, Image, Card } from "react-bootstrap";
import aboutBg from "../img/about-bg.png";
import hopeAgainImg from "../img/hope-again.png";
import houseImg from "../img/home.png";
import houseHeartImg from "../img/house-heart.png";
import peopleImg from "../img/people.png";
import landImg from "../img/land.png";
import communityImg from "../img/school.png";
import "./AboutContent.css";
import { AboutArticle } from "./AboutArticle";

export const AboutContent = () => {
	return (
		<Container className="mb-4">
			<Row>
				<Col className="header-img-container d-flex justify-content-center align-items-center">
					<Image src={aboutBg} className="w-100 header-img" responsive />
					<h1 className="text-white">About Us |</h1>
				</Col>
			</Row>

			<Row className="justify-content-center mt-3">
				<Col lg={8}>
					<p>
						For many years, Mount Hope Church hosted Recovery Circles and
						support groups for men as a response to the ongoing drug misuse and
						abuse plaguing Mitchell’s Plain and its surrounding communities.
						They quickly realised that something more needed to be done, and
						through a series of miraculous events Hope Again recovery Home was
						established.
					</p>

					<AboutArticle
						photo={houseImg}
						title="In May 2007"
						text="The Hope Again Recovery Home for men was established"
					/>
					<AboutArticle
						photo={peopleImg}
						title="In November 2008"
						text="The programme grew to include a facility for women"
					/>
					<AboutArticle
						photo={houseHeartImg}
						title="In June 2012"
						text="The programme expanded to offer Aftercare Services to clients completing a treatment programme"
					/>
					<AboutArticle
						photo={communityImg}
						title="In July 2019"
						text="we started with Early Intervention services, targeted at ages 13-21 years, working in both local high schools and the community"
					/>
					<AboutArticle
						photo={landImg}
						title="In October 2019"
						text="Mount Hope Projects purchased land with the plan to erect a Leadership Centre for Skills Development and Recovery for Men and Women"
					/>

					<hr />
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col lg={8}>
					<h1 className="">Our Values |</h1>
					<p>
						The programme’s ultimate goal is healing of the body, soul and
						spirit of the individual, as this is a prerequisite for a full,
						constructive life with the right tools to make healthy life choices.
					</p>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col lg={8}>
					<Row>
						<Col lg={4} className="mb-3">
							<Card.Img src={hopeAgainImg} responsive />
						</Col>
						<Col lg={8}>
							<Col>
								<Card>
									<Card.Body>
										<Card.Title>Vision</Card.Title>
										<Card.Text>
											Our Vision is to create a safe environment for addicts to
											confront the root cause of their addictions and to empower
											them to become constructive citizens.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>

							<Col className="mt-3">
								<Card>
									<Card.Body>
										<Card.Title>Mission</Card.Title>
										<Card.Text>
											Our Mission is to present workable principles and programs
											that will alter all areas of the individuals lives. This
											holistic approach covers the body, mind and soul of man.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};
