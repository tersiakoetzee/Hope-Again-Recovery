import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import Home from "./pages/Home";
import { Program } from "./pages/Program";
import { FamilyDays } from "./pages/FamilyDays";
import { Projects } from "./pages/Projects";
import { FundingPartners } from "./pages/FundingPartners";
import { BecomeAFunder } from "./pages/BecomeAFunder";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { Bookings } from "./pages/Bookings";

const App = () => (
	<ThemeProvider
		breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
		minBreakpoint="xxs"
	>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/fundingpartners" element={<FundingPartners />} />
			<Route path="/becomeafunder" element={<BecomeAFunder />} />
			<Route path="/program" element={<Program />} />
			<Route path="/familydays" element={<FamilyDays />} />
			<Route path="/admission" element={<Bookings />} />
			{/* <Route path="/booking" element={<Bookings />} /> */}
		</Routes>
	</ThemeProvider>
);

export default App;
