import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navber/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import ServicePage from "./pages/ServicePage";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Services from "./components/home/Services";
import PrivacySection from "./components/home/PrivacySection";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Hero />
							<Features />
							<WhyChooseUs />
							<Services />
							<PrivacySection />
						</>
					}
				/>
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/login" element={<Login />} />
				<Route path="/services/:serviceSlug" element={<ServicePage />} />
			</Routes>
		</>
	);
}

export default App;
