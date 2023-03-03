import "./fonts.css";
export const Heading1 = (props) => (
	<main role="main">
		<div
			style={{
				fontFamily: "Roboto Flex",
				// fontSize: "48px",
			}}
		>
			{props.children}
		</div>
	</main>
);
