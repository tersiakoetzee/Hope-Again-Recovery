import "./Home.css";
import { PicCarousel } from "../components/PicCarousel";
import { TestimonialWidget } from "../components/TestimonialWidget";
import { VideoWidget } from "../components/VideoWidget";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Template } from "../components/Template";

export function Home() {
	return (
		<Template>
			<PicCarousel />
			<Container fluid>
				<Row>
					<Col className="p-0" sm={12} md={6} lg={6}>
						<VideoWidget />
					</Col>
					<Col className="p-0" sm={12} md={6} lg={6}>
						<TestimonialWidget />
					</Col>
				</Row>
			</Container>
		</Template>
	);
}

export default Home;
