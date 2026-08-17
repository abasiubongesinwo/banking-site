import { NavLink } from "react-router-dom";
import { MapPin, Mail, ChevronRight, ArrowUp } from "lucide-react";

const companyLinks = [
	{
		name: "About Us",
		path: "/about",
	},
	{
		name: "Services",
		path: "/investment-management",
	},
	{
		name: "Careers",
		path: "/careers",
	},
	{
		name: "Contact Us",
		path: "/contact",
	},
];

const serviceLinks = [
	{
		name: "Corporate Banking",
		path: "/services/corporate-banking",
	},
	{
		name: "Personal Banking",
		path: "/services/personal-banking",
	},
	{
		name: "International Banking",
		path: "/services/international-banking",
	},
];

export default function Footer() {
	return (
		<footer className="relative overflow-hidden bg-[#111111] pt-20 pb-5 text-white">
			<div className="mx-auto max-w-7xl px-6">
				<div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
					{/* Company */}
					<div>
						<img src="/logo.png" alt="First Bank" className="mb-8 h-20" />

						<p className="leading-9 text-gray-300">
							First Bank of Delaware is a bank for premier business, offering
							financial services and competitive products to Large Corporates
							and SMEs, International Clients, Institutional Investors,
							Provident and Pension Funds, Equity Funds as well as High Net
							Worth Individuals.
						</p>
					</div>

					{/* Company Links */}
					<div>
						<h3 className="text-3xl font-bold">Company</h3>

						<div className="mt-4 h-1 w-14 rounded bg-amber-400" />

						<div className="mt-8 space-y-5">
							{companyLinks.map((link) => (
								<NavLink
									key={link.name}
									to={link.path}
									className={({ isActive }) =>
										`group flex items-center gap-2 transition ${
											isActive ? "text-emerald-400" : (
												"text-gray-300 hover:text-emerald-400"
											)
										}`
									}>
									<ChevronRight
										size={18}
										className="transition group-hover:translate-x-1"
									/>

									{link.name}
								</NavLink>
							))}
						</div>
					</div>

					{/* Financial Services */}
					<div>
						<h3 className="text-3xl font-bold">Financial Services</h3>

						<div className="mt-4 h-1 w-14 rounded bg-amber-400" />

						<div className="mt-8 space-y-5">
							{serviceLinks.map((link) => (
								<NavLink
									key={link.name}
									to={link.path}
									className={({ isActive }) =>
										`group flex items-center gap-2 transition ${
											isActive ? "text-emerald-400" : (
												"text-gray-300 hover:text-emerald-400"
											)
										}`
									}>
									<ChevronRight
										size={18}
										className="transition group-hover:translate-x-1"
									/>

									{link.name}
								</NavLink>
							))}
						</div>
					</div>

					{/* Contact */}
					<div>
						<h3 className="text-3xl font-bold">Contact Info</h3>

						<div className="mt-4 h-1 w-14 rounded bg-amber-400" />

						<div className="mt-8 space-y-7 text-gray-300">
							<div className="flex items-start gap-4">
								<MapPin className="mt-1 text-emerald-500" />

								<p>
									301 East Water Street,
									<br />
									Charlottesville, VA 22904, Virginia
								</p>
							</div>

							<div className="flex items-center gap-4">
								<Mail className="text-emerald-500" />

								<p>support@firbod.com</p>
							</div>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className="my-5 h-px bg-white/10" />

				{/* Bottom */}
				<div className="flex flex-col items-center justify-center gap-6 text-center">
					<p className="text-gray-400">
						© {new Date().getFullYear()} First Bank of Delaware. All rights
						reserved.
					</p>
				</div>
			</div>

			{/* Back To Top */}
			<button
				onClick={() =>
					window.scrollTo({
						top: 0,
						behavior: "smooth",
					})
				}
				// className="fixed right-8 bottom-8 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 shadow-2xl transition hover:-translate-y-1 hover:bg-emerald-500">
				className="fixed right-8 bottom-8 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 shadow-2xl transition hover:-translate-y-1 hover:bg-emerald-500">
				<ArrowUp size={22} />
			</button>
		</footer>
	);
}
