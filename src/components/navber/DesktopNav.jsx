import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "./navLinks";
import ServicesDropdown from "./ServicesDropdown";

export default function DesktopNav() {
	const [openDropdown, setOpenDropdown] = useState(false);

	return (
		<nav className="flex items-center gap-10">
			{navLinks.map((link) => {
				// Services Dropdown
				if (link.children) {
					return (
						<div
							key={link.name}
							className="relative"
							onMouseEnter={() => setOpenDropdown(true)}
							onMouseLeave={() => setOpenDropdown(false)}>
							<button className="flex items-center gap-1 font-medium text-gray-700 transition hover:text-emerald-600">
								{link.name}

								<ChevronDown
									size={18}
									className={`transition-transform duration-300 ${
										openDropdown ? "rotate-180" : ""
									}`}
								/>
							</button>

							<AnimatePresence>
								{openDropdown && <ServicesDropdown />}
							</AnimatePresence>
						</div>
					);
				}

				// Normal Links
				return (
					<NavLink
						key={link.name}
						to={link.path}
						className={({ isActive }) =>
							`relative font-medium transition ${
								isActive ? "text-emerald-600" : (
									"text-gray-700 hover:text-emerald-600"
								)
							}`
						}>
						{({ isActive }) => (
							<>
								{link.name}

								{isActive && (
									<motion.div
										layoutId="navbar-indicator"
										className="absolute -bottom-2 left-0 h-0.5 w-full bg-emerald-600"
									/>
								)}
							</>
						)}
					</NavLink>
				);
			})}
		</nav>
	);
}
