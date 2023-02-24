import { MenuBar } from "../components/MenuBar";
import "./Home.css";
import { PicCarousel } from "../components/PicCarousel";
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
					<VideoWidget />
					<Footer />
				</div>
			</main>
		</div>
	);
}

export default Home;
