import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
	{
		value: 21,
		suffix: "+",
		label: "Years Of Experience",
	},
	{
		value: 150,
		suffix: "K",
		label: "Approved Loans",
	},
	{
		value: 320,
		suffix: "+",
		label: "Existing Customers",
	},
	{
		value: 58,
		suffix: "+",
		label: "Awards",
	},
];

export default function Statistics() {
	return (
		<section className="bg-emerald-700 py-28">
			<div className="mx-auto max-w-7xl px-6">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mx-auto max-w-3xl text-center">
					<span className="rounded-full bg-emerald-600 px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-amber-400">
						Our Achievements
					</span>

					<h2 className="mt-6 text-5xl font-bold text-white">
						First Bank of Delaware Over The Years
					</h2>

					<div className="mx-auto mt-6 h-1 w-16 rounded bg-amber-400" />

					<p className="mt-6 text-lg text-emerald-100">
						Our statistics are 100% accurate.
					</p>
				</motion.div>

				{/* Statistics */}
				<div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
					{stats.map((item, index) => (
						<motion.div
							key={item.label}
							initial={{ opacity: 0, y: 60 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: index * 0.15,
							}}
							whileHover={{
								y: -8,
								scale: 1.03,
							}}
							className="rounded-3xl border border-white/10 bg-white/10 p-10 text-center backdrop-blur-md transition hover:bg-white/15 hover:shadow-2xl">
							<h3 className="text-6xl font-bold text-amber-400">
								<AnimatedCounter
									end={item.value}
									suffix={item.suffix}
									duration={2500}
								/>
							</h3>

							<p className="mt-6 text-lg font-medium text-white">
								{item.label}
							</p>
						</motion.div>
					))}
				</div>

				{/* CTA */}
				<motion.div
					initial={{ opacity: 0, y: 60 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4 }}
					className="mt-20 rounded-[32px] border border-white/10 bg-white/10 px-8 py-16 text-center backdrop-blur-md">
					<h2 className="text-5xl font-bold text-white">
						Have any questions about us?
					</h2>

					<p className="mx-auto mt-5 max-w-2xl text-lg text-emerald-100">
						Our banking specialists are available 24/7 to answer your questions
						and help you choose the right banking solution.
					</p>

					<Link to="/contact">
						<motion.button
							whileHover={{
								scale: 1.05,
								y: -3,
							}}
							whileTap={{
								scale: 0.95,
							}}
							className="mx-auto mt-10 flex items-center gap-2 rounded-xl bg-amber-400 px-8 py-4 font-semibold text-gray-900 shadow-xl transition hover:bg-amber-300">
							Contact Us
							<ArrowRight size={18} />
						</motion.button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
