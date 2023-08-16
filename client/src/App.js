import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import Home from "./pages/Home";
import { Program } from "./pages/Program";
import { FamilyDays } from "./pages/FamilyDays";
import { Projects } from "./pages/Projects";
import { FundingPartners } from "./pages/FundingPartners";
import { BecomeAFunder } from "./pages/BecomeAFunder";
import { FuturePlans } from "./pages/FuturePlans";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { AdmissionInfo } from "./components/AdmissionInfo";
import { Bookings } from "./pages/Bookings";

import { Donate } from "./pages/Donate";

import { Testimonials } from "./pages/Testimonials";

const App = () => (
	<ThemeProvider
		breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
		minBreakpoint="xxs"
	>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/futureplans" element={<FuturePlans />} />
			<Route path="/fundingpartners" element={<FundingPartners />} />
			<Route path="/becomeafunder" element={<BecomeAFunder />} />
			<Route path="/booking" element={<Bookings />} />
			<Route path="/testimonials" element={<Testimonials />} />
			<Route path="/program" element={<Program />} />
			<Route path="/familydays" element={<FamilyDays />} />
			<Route path="/admission" element={<AdmissionInfo />} />
			<Route path="/donate" element={<Donate />} />
		</Routes>
	</ThemeProvider>
);

export default App;
