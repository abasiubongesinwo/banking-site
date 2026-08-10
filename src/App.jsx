import { Routes, Route, useLocation } from "react-router-dom";

// Navigation
import Navbar from "./components/navber/Navbar";

// Home Components
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

// Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import InvestmentManagement from "./pages/InvestmentManagement";
import Loan from "./pages/Loan";
import Terms from "./pages/Terms";

// Admin
import AdminRoutes from "./admin/AdminRoutes";

// Styles
import "./components/translator/translator.css";
import "./styles/phone.css";

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
	const location = useLocation();

	const isAdminRoute =
		location.pathname === "/admin" || location.pathname.startsWith("/admin/");

	const shouldShowFooter = () => {
		const hideFooterPaths = ["/login", "/register", "/signup"];

		if (isAdminRoute) {
			return false;
		}

		return !hideFooterPaths.includes(location.pathname);
	};

	const shouldShowNavbar = () => {
		const hideNavbarPaths = ["/login", "/register", "/signup"];

		if (isAdminRoute) {
			return false;
		}

		return !hideNavbarPaths.includes(location.pathname);
	};

	return (
		<>
			{!isAdminRoute && shouldShowNavbar() && <Navbar />}

			{/* Main Website Routes */}

			<Routes>
				<Route path="/" element={<HomePage />} />

				<Route path="/about" element={<About />} />

				<Route
					path="/investment-management"
					element={<InvestmentManagement />}
				/>

				<Route path="/business-loan" element={<Loan />} />

				<Route path="/contact" element={<Contact />} />

				<Route path="/terms" element={<Terms />} />

				{/* Authentication */}

				<Route path="/login" element={<Login />} />

				<Route path="/register" element={<Register />} />

				<Route path="/signup" element={<Register />} />
			</Routes>

			{/* Admin Routes */}

			<AdminRoutes />

			{shouldShowFooter() && <Footer />}
		</>
	);
}

export default App;
