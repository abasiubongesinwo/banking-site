import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
	return (
		<section className="bg-white py-24">
			<div className="mx-auto max-w-7xl px-6">
				<motion.div
					initial={{ opacity: 0, y: 60 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-emerald-700 to-emerald-500 px-8 py-20 text-center shadow-2xl">
					{/* Background Pattern */}
					<div
						className="absolute inset-0 opacity-10"
						style={{
							backgroundImage:
								"repeating-linear-gradient(45deg, white 0px, white 18px, transparent 18px, transparent 36px)",
						}}
					/>

					{/* Decorative Circles */}
					<motion.div
						animate={{
							y: [-15, 15, -15],
							x: [-10, 10, -10],
						}}
						transition={{
							repeat: Infinity,
							duration: 8,
							ease: "easeInOut",
						}}
						className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-xl"
					/>

					<motion.div
						animate={{
							y: [15, -15, 15],
							x: [10, -10, 10],
						}}
						transition={{
							repeat: Infinity,
							duration: 10,
							ease: "easeInOut",
						}}
						className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-amber-400/10 blur-2xl"
					/>

					<div className="relative z-10">
						<h2 className="text-5xl font-bold text-white">Ready to Talk?</h2>

						<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-emerald-100">
							Our dedicated banking team is ready to answer your questions, help
							you open an account, and guide you toward the right financial
							solution.
						</p>

						<Link to="/contact">
							<motion.button
								whileHover={{
									scale: 1.05,
									y: -4,
								}}
								whileTap={{
									scale: 0.95,
								}}
								className="mx-auto mt-10 flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-emerald-700 shadow-xl transition hover:bg-gray-100">
								Contact Us
								<ArrowRight size={18} />
							</motion.button>
						</Link>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
