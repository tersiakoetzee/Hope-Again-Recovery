import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import Home from "./pages/Home";
import { Program } from "./pages/Program";
import { FamilyDays } from "./pages/FamilyDays";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about" element={<About />} />
		<Route path="/program" element={<Program />} />
		<Route path="/familydays" element={<FamilyDays />} />
	</Routes>
);

export default App;
