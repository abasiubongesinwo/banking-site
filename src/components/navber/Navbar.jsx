import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<>
			{/* Top Brown Line */}
			<div className="h-1 w-full bg-amber-800" />

			<header className="sticky top-0 z-50 bg-white shadow-sm">
				<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
					{/* Logo */}
					<Link to="/">
						<img src="/logo.png" alt="Bank Logo" className="h-12 w-auto" />
					</Link>

					{/* Desktop Navigation + Button */}
					<div className="hidden items-center gap-10 lg:flex">
						<DesktopNav />

						<Link
							to="/login"
							className="flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-emerald-700">
							<FaUserAlt className="text-sm" />
							E-Banking
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setMobileOpen(!mobileOpen)}
						className="lg:hidden">
						{mobileOpen ?
							<X size={28} />
						:	<Menu size={28} />}
					</button>
				</div>

				<MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
			</header>
		</>
	);
}
