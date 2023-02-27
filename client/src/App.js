import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import Home from "./pages/Home";
import { Projects } from "./pages/Projects";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about" element={<About />} />
		<Route path="/projects" element={<Projects />} />
	</Routes>
);

export default App;
