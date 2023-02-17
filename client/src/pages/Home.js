import { Link } from "react-router-dom";
import { MenuBar } from "../components/MenuBar";
import "./Home.css";
import { PicCarousel } from "../components/PicCarousel";

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
				</div>
			</main>
		</div>
	);
}

export default Home;
