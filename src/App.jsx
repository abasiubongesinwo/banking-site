import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navber/Navbar";
import Footer from "./components/home/Footer";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Services from "./components/home/Services";
import PrivacySection from "./components/home/PrivacySection";
import Statistics from "./components/home/Statistics";
import CTA from "./components/home/CTA";
import MobileApp from "./components/home/MobileApp";
import DigitalBanking from "./components/home/DigitalBanking";
import AccountBanner from "./components/home/AccountBanner";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
// import Register from "./pages/Register/index.jsx";
import InvestmentManagement from "./pages/InvestmentManagement";
import Loan from "./pages/Loan";
import Terms from "./pages/Terms";
import "./components/translator/translator.css";

function HomePage() {
	return (
		<>
			<Hero />
			<Features />
			<WhyChooseUs />
			<Services />
			<PrivacySection />
			<Statistics />
			<CTA />
			<MobileApp />
			<DigitalBanking />
			<AccountBanner />
		</>
	);
}

function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<About />} />
				<Route
					path="/investment-management"
					element={<InvestmentManagement />}
				/>
				<Route path="/business-loan" element={<Loan />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/login" element={<Login />} />
				<Route path="/terms" element={<Terms />} />
				{/* <Route path="/register" element={<Register />} /> */}
			</Routes>

			<Footer />

			{/* <GoogleTranslateProvider /> */}
		</>
	);
}

export default App;
