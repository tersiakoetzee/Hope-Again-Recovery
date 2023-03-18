import { Image } from "react-bootstrap";

export const AboutArticle = ({ photo, title, text }) => {
	return (
		<div className="d-flex align-items-center item">
			<div className="image">
				<Image src={photo} className="img-fluid" />
			</div>
			<div>
				<h2>{title}</h2>
				<p>{text}</p>
			</div>
		</div>
	);
};
