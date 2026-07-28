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
import Statistics from "./components/home/Statistics";
import CTA from "./components/home/CTA";
import MobileApp from "./components/home/MobileApp";
import DigitalBanking from "./components/home/DigitalBanking";
import AccountBanner from "./components/home/AccountBanner";
import Footer from "./components/home/Footer";
// import GoogleTranslateProvider from "./components/translator/GoogleTranslateProvider";
import "./components/translator/translator.css";

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
							<Statistics />
							sss
							<CTA />
							<MobileApp />
							<DigitalBanking />
							<AccountBanner />
							<Footer />
						</>
					}
				/>
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/login" element={<Login />} />
				<Route path="/services/:serviceSlug" element={<ServicePage />} />
			</Routes>

			{/* <GoogleTranslat,eProvider /> */}
		</>
	);
}

export default App;
