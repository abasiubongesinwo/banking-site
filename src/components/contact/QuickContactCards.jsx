import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const cards = [
	{
		icon: MapPin,
		title: "Visit Our Office",
		description: "301 East Water Street, Charlottesville, VA 22904, Virginia",
		color: "bg-emerald-600",
	},
	{
		icon: Phone,
		title: "Call Us",
		description: "+1 (302) 555-2480\n+1 (302) 555-0115",
		color: "bg-blue-600",
	},
	{
		icon: Mail,
		title: "Email Support",
		description: "support@firbod.com\ninfo@firbod.com",
		color: "bg-amber-500",
	},
	{
		icon: Clock,
		title: "Business Hours",
		description: "Monday - Friday\n8:30 AM - 5:30 PM",
		color: "bg-purple-600",
	},
];

export default function QuickContactCards() {
	return (
		<section className="py-24">
			<div className="mx-auto max-w-7xl px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16 text-center">
					<span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-emerald-700">
						Reach Us
					</span>

					<h2 className="mt-6 font-serif text-5xl font-bold text-gray-900">
						Multiple Ways To Contact Us
					</h2>

					<div className="mx-auto mt-5 h-1 w-20 rounded-full bg-amber-400" />

					<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
						Whether you prefer visiting our office, calling our banking
						specialists, or sending us an email, we're here to help.
					</p>
				</motion.div>

				<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
					{cards.map((card, index) => {
						const Icon = card.icon;

						return (
							<motion.div
								key={card.title}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.15,
								}}
								whileHover={{
									y: -10,
									scale: 1.03,
								}}
								className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-8 shadow-lg transition">
								<div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gray-100 blur-3xl transition group-hover:bg-emerald-100" />

								<div
									className={`${card.color} flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg`}>
									<Icon size={30} />
								</div>

								<h3 className="mt-8 text-2xl font-bold text-gray-900">
									{card.title}
								</h3>

								<p className="mt-4 whitespace-pre-line leading-8 text-gray-600">
									{card.description}
								</p>

								<div className="mt-8 flex items-center gap-2 font-semibold text-emerald-600">
									Learn More
									<ArrowRight
										size={18}
										className="transition group-hover:translate-x-2"
									/>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
