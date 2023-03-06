import { Container, Row, Col, Image } from "react-bootstrap";
import headerImg from "../img/header-img.png";

export const Header = () => {
	return (
		<Container>
			<Row>
				<Col>
					<Image className="w-100" src={headerImg} responsive />
				</Col>
			</Row>
		</Container>
	);
};
