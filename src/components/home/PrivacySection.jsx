import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
	{
		number: "100%",
		label: "Private Transactions",
		color: "text-emerald-600",
	},
	{
		number: "24/7",
		label: "Secure Access",
		color: "text-amber-500",
	},
	{
		number: "256-bit",
		label: "Encryption",
		color: "text-emerald-600",
	},
];

export default function PrivacySection() {
	return (
		<section className="overflow-hidden bg-white py-28">
			<div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
				{/* LEFT IMAGE */}
				<motion.div
					initial={{ opacity: 0, x: -70 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="relative flex justify-center items-center">
					{/* Main Dashboard */}
					<motion.img
						whileHover={{ scale: 1.02 }}
						src="/privacydashboard.png"
						alt="Dashboard"
						className="w-full max-w-2xl rounded-[40px] shadow-2xl"
					/>

					{/* Floating Card 1 */}
					<motion.div
						animate={{
							y: [-12, 12, -12],
							rotate: [-2, 2, -2],
						}}
						transition={{
							repeat: Infinity,
							duration: 6,
							ease: "easeInOut",
						}}
						className="absolute left-6 top-14 overflow-hidden rounded-3xl border border-white/30 bg-white/20 backdrop-blur-xl shadow-2xl">
						<img
							src="/card1.png"
							alt=""
							className="h-44 w-56 object-cover opacity-80"
						/>
					</motion.div>

					{/* Floating Card 2 */}
					<motion.div
						animate={{
							y: [12, -12, 12],
							rotate: [2, -2, 2],
						}}
						transition={{
							repeat: Infinity,
							duration: 7,
							ease: "easeInOut",
						}}
						className="absolute right-4 bottom-10 overflow-hidden rounded-3xl border border-white/30 bg-white/20 backdrop-blur-xl shadow-2xl">
						<img
							src="/card2.png"
							alt=""
							className="h-48 w-60 object-cover opacity-80"
						/>
					</motion.div>
				</motion.div>

				{/* RIGHT CONTENT */}
				<motion.div
					initial={{ opacity: 0, x: 70 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}>
					<span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-emerald-700">
						Privacy First
					</span>

					<h2 className="mt-8 text-5xl font-bold leading-tight text-slate-900">
						Discreet &
						<br />
						Private Banking
					</h2>

					<div className="mt-6 h-1 w-20 rounded bg-amber-500" />

					<p className="mt-8 text-lg leading-9 text-gray-600">
						At First Bank of Delaware, we believe the beauty of life lies in the
						little things that give us a better expression of ourselves. Your
						financial privacy is our commitment.
					</p>

					{/* Stats */}
					<div className="mt-12 grid grid-cols-3 gap-6">
						{stats.map((item) => (
							<div key={item.label}>
								<h3 className={`text-5xl font-bold ${item.color}`}>
									{item.number}
								</h3>

								<p className="mt-3 text-gray-500">{item.label}</p>
							</div>
						))}
					</div>

					{/* Button */}
					<motion.button
						whileHover={{
							scale: 1.05,
						}}
						whileTap={{
							scale: 0.95,
						}}
						className="mt-12 flex items-center gap-3 rounded-xl bg-emerald-600 px-8 py-4 font-semibold text-white shadow-xl transition hover:bg-emerald-700">
						Get Started
						<ArrowRight size={18} />
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
}
