import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

import { Bookings } from "./pages/Bookings";
const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about" element={<About />} />
		<Route path="/booking" element={<Bookings />} />
	</Routes>
);

export default App;
