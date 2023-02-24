import { MenuBar } from "../components/MenuBar";
import "./Home.css";
import { PicCarousel } from "../components/PicCarousel";
import { TestimonialWidget } from "../components/TestimonialWidget";
import { VideoWidget } from "../components/VideoWidget";
import { Footer } from "../components/Footer";

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
						<TestimonialWidget className="vid-test-component testimonial-widget" />
					</section>
					<VideoWidget />
					<Footer />
				</div>
			</main>
		</div>
	);
}

export default Home;
