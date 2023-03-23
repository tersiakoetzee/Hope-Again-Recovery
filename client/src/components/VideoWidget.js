import "./VideoWidget.css";
import { Heading2 } from "./Heading2";
import { Paragraph } from "./Paragraph";
import { Card } from "react-bootstrap";

export const VideoWidget = () => {
	return (
		<Card className="video-container">
			<iframe
				style={{ width: "100%" }}
				src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FHOPEAGAINRECOVERYHOME%2Fvideos%2F388933556082025%2F&show_text=false&width=560&t=0"
				title="FaceBook video"
			></iframe>
			<Card.Body>
				<Heading2>Fun Daily</Heading2>
				<Heading2>Workout At</Heading2>
				<Heading2>H.A.R.H</Heading2>
				<Paragraph className="mb-2">Come and join the fun</Paragraph>
			</Card.Body>
		</Card>
	);
};
