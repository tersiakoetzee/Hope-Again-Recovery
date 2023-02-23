import { MenuBar } from "../components/MenuBar";
import { Footer } from "../components/Footer";
export const Template = (props) => (
	<main role="main">
		<div>
			<MenuBar />
			{props.children}
			<Footer />
		</div>
	</main>
);
