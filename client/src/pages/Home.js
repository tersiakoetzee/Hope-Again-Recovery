import { Link } from "react-router-dom";
import { MenuBar } from "../components/MenuBar";
import "./Home.css";
import { PicCarousel } from "../components/PicCarousel";
import { TestimonialWidget } from "../components/TestimonialWidget";

export function Home() {
	return (
		<div>
			<header>
				<MenuBar />
			</header>
			<main role="main">
				<div>
					<PicCarousel />
					<section className="video-testimonial">
						<Link to="/about/this/site" className="vid-test-component">
							About
						</Link>
						<TestimonialWidget className="vid-test-component testimonial-widget" />
					</section>
				</div>
			</main>
		</div>
	);
}

export default Home;
