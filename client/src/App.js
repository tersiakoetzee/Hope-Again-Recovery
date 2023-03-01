import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import Home from "./pages/Home";
import { Program } from "./pages/Program";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about" element={<About />} />
		<Route path="/program" element={<Program />} />
	</Routes>
);

export default App;
