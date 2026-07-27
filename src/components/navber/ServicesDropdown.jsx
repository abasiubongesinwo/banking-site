import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
	{
		title: "Investment Management",
		path: "/services/investment-management",
	},
	{
		title: "Business Loan",
		path: "/services/business-loan",
	},
];

export default function ServicesDropdown() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 12 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 12 }}
			transition={{ duration: 0.2 }}
			className="absolute left-1/2 top-12 z-50 w-56 -translate-x-1/2 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl">
			<div className="space-y-1">
				{services.map((item) => (
					<Link
						key={item.title}
						to={item.path}
						className="block rounded-lg px-3 py-3 text-[15px] text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-600">
						{item.title}
					</Link>
				))}
			</div>
		</motion.div>
	);
}
