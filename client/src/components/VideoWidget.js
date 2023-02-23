// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./VideoWidget.css";

export const VideoWidget = () => {
	return (
		<Card className="border border-3" style={{ width: "18rem" }}>
			<iframe
				src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FHOPEAGAINRECOVERYHOME%2Fvideos%2F388933556082025%2F&show_text=false&width=560&t=0"
				title="YouTube video"
				allowfullscreen
			></iframe>
			<Card.Body>
				<Card.Title>H-A-R-H</Card.Title>
				<Card.Text>Fun daily workout at HARH.</Card.Text>
			</Card.Body>
		</Card>
	);
};
