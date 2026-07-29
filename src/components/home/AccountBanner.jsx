import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AccountBanner() {
	return (
		<section
			className="relative my-8 overflow-hidden py-20 text-center text-white shadow-xl"
			style={{
				backgroundColor: "#2b7a4b",
				backgroundImage: `repeating-linear-gradient(
					135deg,
					rgba(255,255,255,0.05),
					rgba(255,255,255,0.05) 15px,
					transparent 15px,
					transparent 30px
				)`,
			}}>
			{/* Background Glow */}
			<div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-transparent to-emerald-400/20" />

			<div className="relative z-10 mx-auto max-w-4xl px-6">
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
					Apply for an Account in Minutes
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, delay: 0.15 }}
					className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90 sm:text-xl">
					Get your First Bank of Delaware account today and experience banking
					excellence!
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.3 }}
					className="mt-10">
					<Link
						to="/open-account"
						className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-8 py-4 text-base font-bold text-gray-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-amber-300 hover:shadow-2xl">
						Get Your First Bank of Delaware Account
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
