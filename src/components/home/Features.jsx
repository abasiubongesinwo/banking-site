import { motion } from "framer-motion";
import { Globe, Landmark, ShieldCheck, Lock } from "lucide-react";

const features = [
	{
		icon: Globe,
		title: "First Bank of Delaware Banking",
		description:
			"With our tradition of complete financial anonymity, we aim to provide flexible and premium financial services.",
		color: "bg-emerald-600",
	},
	{
		icon: Landmark,
		title: "Fully Encrypted",
		description:
			"Send, receive & control funds from anywhere in the world with the convenience of your mobile devices 100% Anonymous.",
		color: "bg-amber-500",
	},
	{
		icon: Lock,
		title: "Credit Advance",
		description:
			"Loan applications are always accepted from & extended to premium customers who meet our loan requirements.",
		color: "bg-emerald-600",
	},
	{
		icon: ShieldCheck,
		title: "Safe and Secure",
		description:
			"All online banking transactions are highly encrypted and secure on independent cloud servers for security.",
		color: "bg-amber-500",
	},
];

export default function Features() {
	return (
		<section className="bg-white py-24">
			<div className="mx-auto max-w-7xl px-6">
				<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
					{features.map((item, index) => {
						const Icon = item.icon;

						return (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 70 }}
								whileInView={{ opacity: 1, y: 0 }}
								whileHover={{
									y: -10,
									scale: 1.03,
								}}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.15,
								}}
								className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-2xl">
								<div
									className={`${item.color} mb-8 flex h-20 w-20 items-center justify-center rounded-3xl shadow-lg transition-transform duration-300 group-hover:rotate-6`}>
									<Icon className="h-8 w-8 text-white" />
								</div>

								<h3 className="mb-6 text-3xl font-bold leading-tight text-gray-900">
									{item.title}
								</h3>

								<p className="leading-9 text-gray-600">{item.description}</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
