import { motion } from "framer-motion";
import {
	Building2,
	Wallet,
	Globe2,
	Mail,
	MonitorSmartphone,
	Bell,
} from "lucide-react";

const services = [
	{
		icon: Building2,
		title: "Corporate Banking",
		color: "bg-emerald-100 text-emerald-600",
		description:
			"Our experienced corporate banking team works closely with our clients to identify their true financing needs in order to reach an overall tailored solution reflecting both their business goals and their repayment capability.",
	},
	{
		icon: Wallet,
		title: "Personal Banking",
		color: "bg-amber-100 text-amber-600",
		description:
			"First Bank of Delaware has proven to be a reliable banking partner, which guarantees high level of expertise. It offers tailor made banking products and high quality solutions that create value for its customers.",
	},
	{
		icon: Globe2,
		title: "International Banking",
		color: "bg-emerald-100 text-emerald-600",
		description:
			"First Bank of Delaware established the International Banking Unit (IBU) to service its international clients. International clients include companies registered in Cyprus or abroad as well as foreign individuals residing in Cyprus or abroad.",
	},
	{
		icon: Mail,
		title: "Email Notifications",
		color: "bg-amber-100 text-amber-600",
		description:
			"Instant and responsive email notification for all your account activities, keeping you informed and in control at all times.",
	},
	{
		icon: MonitorSmartphone,
		title: "Remote Access",
		color: "bg-emerald-100 text-emerald-600",
		description:
			"Remote access to funds anywhere with complete security and convenience across all your devices.",
	},
	{
		icon: Bell,
		title: "Instant Notifications",
		color: "bg-amber-100 text-amber-600",
		description:
			"Real-time alerts for every transaction, ensuring you stay informed about your account activity instantly.",
	},
];

export default function Services() {
	return (
		<section className="bg-white py-28">
			<div className="mx-auto max-w-7xl px-6">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mx-auto mb-16 max-w-3xl text-center">
					<span className="rounded-full bg-amber-100 px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-amber-600">
						Comprehensive Solutions
					</span>

					<h2 className="mt-6 text-5xl font-bold text-slate-900">
						Our Features
					</h2>

					<div className="mx-auto mt-5 h-1 w-20 rounded bg-emerald-600" />

					<p className="mt-6 text-gray-500">
						Tailored banking solutions designed to meet your personal and
						business financial goals.
					</p>
				</motion.div>

				{/* Cards */}
				<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
					{services.map((item, index) => {
						const Icon = item.icon;

						return (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 60 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.08,
								}}
								whileHover={{
									y: -10,
								}}
								className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-2xl">
								<div
									className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.color} transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
									<Icon size={26} />
								</div>

								<h3 className="mt-8 text-2xl font-bold text-slate-900 transition group-hover:text-emerald-600">
									{item.title}
								</h3>

								<p className="mt-5 leading-8 text-gray-500">
									{item.description}
								</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
