import { Template } from "../components/Template";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HopeChurch from "../assets/church-logo.png";
import funderImg from "../assets/img1.jpeg";
import { PageHeaderTemplate } from "../components/PageHeaderTemplate";
import { Heading2 } from "../components/Heading2";

export const FundingPartners = () => {
	return (
		<Template>
			<PageHeaderTemplate title="Funding Partners" image={funderImg} />
			<Container className="partners text-center px-5 pt-5 mb-5">
				<Row>
					<Heading2 className="mb-5 text-blue">
						Thank you to our current funding and resource partners:
					</Heading2>
					<Col>
						<h5>Department of Social Development</h5>
						<img
							className=" icon rounded text-center py-2"
							src="https://www.bloemfonteincourant.co.za/wp-content/uploads/2017/09/Department-of-Social-Development-logo-1.jpg"
							alt="First slide"
							height="140"
						/>
					</Col>
					<Col>
						<h5>Mount Hope Church</h5>
						<img
							className=" icon rounded text-center py-2"
							src={HopeChurch}
							alt="First slide"
							height="180"
						/>
					</Col>
					<br></br>
					<Col>
						<h5>Food Forward</h5>
						<img
							className=" icon rounded text-center py-2"
							src="https://foodforwardsa.org/wp-content/uploads/2022/06/new-logo-high-res-1.png"
							alt="First slide"
							height="140"
						/>
					</Col>
					<br></br>
					<Col>
						<h5>Pick n Pay Constantia</h5>
						<img
							className=" icon rounded text-center py-2"
							src="https://searchlogovector.com/wp-content/uploads/2019/06/pick-n-pay-logo-vector.png"
							alt="First slide"
							height="140"
						/>
						<br></br>
					</Col>
				</Row>
			</Container>
		</Template>
	);
};
