import { Container, Row, Col, Card } from "react-bootstrap";
import aboutBg from "../img/about-bg.png";
import hopeAgainImg from "../img/hope-again.png";
import houseImg from "../img/home.png";
import houseHeartImg from "../img/house-heart.png";
import peopleImg from "../img/people.png";
import landImg from "../img/land.png";
import communityImg from "../img/school.png";
import "./AboutContent.css";
import { AboutArticle } from "./AboutArticle";
import { PageHeaderTemplate } from "./PageHeaderTemplate";
import { Heading2 } from "./Heading2";
import { Paragraph } from "./Paragraph";

export const AboutContent = () => {
	return (
		<>
			<PageHeaderTemplate title="About Us" image={aboutBg} />

			<div className="bg-blue">
				<Container>
					<Row className="justify-content-center">
						<Col className="text-center custom-container" lg={8}>
							<Heading2  className="text-yellow mt-5 mb-2">Our Story</Heading2>
							<Paragraph className="text-white">
								For many years, Mount Hope Church hosted Recovery Circles and
								support groups for men as a response to the ongoing drug misuse and
								abuse plaguing Mitchell’s Plain and its surrounding communities.
								They quickly realised that something more needed to be done, and
								through a series of miraculous events Hope Again recovery Home was
								established.
							</Paragraph>
						</Col>
					</Row>
					<Row className="py-3">
						<Col className="text-white" lg={6}>
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
						</Col>
						<Col className="text-white" lg={6}>
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
						</Col>
					</Row>

				</Container>
			</div>

			<Container fluid>
				<Row>
					<Col lg={6}>
						<Row className="justify-content-center bg-warning h-100">
							<Col className="text-center mt-5" sm={10} lg={10}>
								<Heading2 >Our Values</Heading2>
								<Paragraph>
									The programme’s ultimate goal is healing of the body, soul and
									spirit of the individual, as this is a prerequisite for a full,
									constructive life with the right tools to make healthy life choices.
								</Paragraph>
							</Col>
							<Col className="mb-5 d-flex justify-content-center" sm={10} lg={10}>
								<Card.Img className="values-img" src={hopeAgainImg} responsive />
							</Col>
						</Row>
					</Col>
					<Col lg={6}>
						<Row className="justify-content-center h-100 vm-row">
							<Col className="mt-5 vm-col" sm={10} lg={10}>
								<Heading2>Vision</Heading2>
								<Paragraph>
									Our Vision is to create a safe environment for addicts to
									confront the root cause of their addictions and to empower
									them to become constructive citizens.
								</Paragraph>
								<Heading2 className="mt-5">Mission</Heading2>
								<Paragraph>
									Our Mission is to present workable principles and programs
									that will alter all areas of the individuals lives. This
									holistic approach covers the body, mind and soul of man.
								</Paragraph>
							</Col>
							<div className="about-red-block"></div>
						</Row>
					</Col>
				</Row>
			</Container>
		</>
	);
};
