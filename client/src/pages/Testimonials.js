import { Container, Row, Col, Image } from "react-bootstrap";
import aboutBg from "../img/about-bg.png";
import { Template } from "../components/Template";
import Test2 from "../assets/test2.png";
import Test3 from "../assets/test3.png";
import "./Testimonials.css";

export const Testimonials = () => {
	return (
		<Template>
			<Container fluid>
				<Row>
					<Col className="header-img-container d-flex justify-content-center align-items-center">
						<Image src={aboutBg} className="w-100 header-img" responsive />
						<h1 className="text-yellow">Testimonials</h1>
					</Col>
				</Row>
				<Row>
					<Col className="text-yellow" sm={12} md={6}>
						<div className="ImageOverlay w-100 h-100 d-flex flex-column justify-content-end">
							<Image
								className="card-image1 w-100"
								src={Test3}
								alt="Card image"
							/>
							<h2 className="title">
								Matthew	Age:36 yrs old
							</h2>
							<p className="title-para">Heathfield, Cape Town</p>
						</div>
					</Col>
					<Col>
						<div id="content-block1">
							<i className="bi bi-quote"></i>
							<h2>Life Changing</h2>
							<p>
								Was at HARH in 2012 for 9 months and the experience was life
								changing where I met Jesus and got saved. The program was
								disciplined and it has prepared us for some of life’s challenges
								we might face. I'm currently working as a field agent for an
								asset management company and have been married for 4 years.
							</p>
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<div id="content-block1">
							<i className="bi bi-quote"></i>
							<h2>Living Life to the Fullest</h2>
							<p>
								I was on drugs for 6 years, addicted to crystal meth and
								mandrax. I went to Hope Again in March 2009, and finished my
								program in September 2009, and graduated. I have been clean for
								14 years— praise God! I am currently employed as an accounts
								clerk. God has been amazing and blessed me with a better
								position where I will move to soon. God has been amazing and
								faithful, I count my blessings 1 by 1 and am forever grateful
								for what the Lord has done in my life. I have my own car, my own
								house, which God has blessed me with after losing everything in
								my life. 2021 was a drastic change after I lost my mom to Covid.
								I have struggled a lot but God has been faithful and carried me
								through. I have a son aged 11, who is my biggest supporter. We
								are living life to the fullest and thank God every day for
								carrying us through!
							</p>
						</div>
					</Col>
					<Col className="text-yellow" sm={12} md={6}>
						<div className="ImageOverlay w-100 h-100 d-flex flex-column justify-content-end">
							<Image
								className="card-image1 w-100"
								src={Test2}
								alt="Card image"
							/>
							<h2 className="title">
								Natalie	Age:36 yrs old
							</h2>
							<p className="title-para">Cape Town</p>
						</div>
					</Col>
				</Row>
			</Container>
		</Template>
	);
};
