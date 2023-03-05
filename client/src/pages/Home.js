import { MenuBar } from "../components/MenuBar";
import "./Home.css";
import { PicCarousel } from "../components/PicCarousel";
import { TestimonialWidget } from "../components/TestimonialWidget";
import { VideoWidget } from "../components/VideoWidget";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Home() {
	return (
		<div>
			<header>
				<Header />
				<MenuBar />
			</header>
			<main role="main">
				<div>
					<PicCarousel />
					<section className="video-testimonial">
						<Container>
							<Row>
								<Col className=".me-1">
									<VideoWidget />
								</Col>
								<Col className=".ms-1">
									<TestimonialWidget />
								</Col>
							</Row>
						</Container>
					</section>

					<Footer />
				</div>
			</main>
		</div>
	);
}

export default Home;
