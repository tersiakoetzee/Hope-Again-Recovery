import { Link } from "react-router-dom";
import { MenuBar } from "../components/MenuBar";
import "./Home.css";
import { PicCarousel } from "../components/PicCarousel";
import { VideoWidget } from "../components/VideoWidget";
import { Footer } from "../components/Footer";
import "./VideoWidget.css";

export function Home() {
	return (
		<div>
			<header>
				<MenuBar />
			</header>
			<main role="main">
				<div>
					<PicCarousel />
					<Link to="/about/this/site">About</Link>
					<VideoWidget />
					<Footer />
				</div>
			</main>
		</div>
	);
}

export default Home;
