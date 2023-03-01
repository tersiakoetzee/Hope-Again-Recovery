import { Template } from "../components/Template";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export const Program = () =>{
    return (
			<Template>
				<Container>
					<Row>
						<Col className="text-center py-3">
							<h3>After Care Program</h3>
							<p>
								6-9 month inhouse program focused on: One on one counselling
								Comprehensive assessments Group counselling Support groups
								Family restoration Support in a safe, sober living environment
								Referrals to facilitate re-integration Contact made with
								precious employers (if indicated)
							</p>
						</Col>
						<Col className="text-center py-3">
							<img
								src="https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/280253799_745221696846746_6212596363167311079_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=0EsRaksBibsAX-MyOrZ&_nc_ht=scontent-cpt1-1.xx&oh=00_AfADm-pQDtj14jsIewKly8j0diivgPlDLmDS8wE3DOj-4g&oe=64034DA5"
								alt="First slide"
								height="150"
							/>
						</Col>
					</Row>
					<Row>
						<Col className="text-center py-3">
							<img
								src="https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/280253799_745221696846746_6212596363167311079_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=0EsRaksBibsAX-MyOrZ&_nc_ht=scontent-cpt1-1.xx&oh=00_AfADm-pQDtj14jsIewKly8j0diivgPlDLmDS8wE3DOj-4g&oe=64034DA5"
								alt="First slide"
								height="150"
							/>
						</Col>
						<Col className="text-center py-3">
							<h3>After Care Program</h3>
							<p>
								6-9 month inhouse program focused on: One on one counselling
								Comprehensive assessments Group counselling Support groups
								Family restoration Support in a safe, sober living environment
								Referrals to facilitate re-integration Contact made with
								precious employers (if indicated)
							</p>
						</Col>
					</Row>
				</Container>
			</Template>
		);
};