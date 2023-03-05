import { MenuBar } from "../components/MenuBar";
import "./Home.css";
import { PicCarousel } from "../components/PicCarousel";
import { VideoWidget } from "../components/VideoWidget";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

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
					<VideoWidget />
					<Footer />
				</div>
			</main>
		</div>
	);
}

export default Home;
