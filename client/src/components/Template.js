import { MenuBar } from "./MenuBar";
import { Footer } from "./Footer";

export const Template = (props) => (
	<main role="main">
		<div>
			<MenuBar />
			{props.children}
			<Footer />
		</div>
	</main>
);
