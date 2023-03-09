import { MenuBar } from "./MenuBar";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Template = (props) => (
	<main role="main">
		<div>
			<Header />
			<MenuBar />
			{props.children}
			<Footer />
		</div>
	</main>
);
