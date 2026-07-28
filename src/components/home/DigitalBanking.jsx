import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function DigitalBanking() {
	return (
		<section
			className="relative overflow-hidden bg-gray-50 py-24"
			style={{
				backgroundImage:
					"repeating-linear-gradient(45deg,#fafafa,#fafafa 22px,#f3f4f6 22px,#f3f4f6 44px)",
			}}>
			<div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
				{/* LEFT SIDE */}
				<motion.div
					initial={{ opacity: 0, x: -60 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="relative flex h-[560px] items-center justify-center">
					{/* Background Glass */}
					<div className="absolute h-[330px] w-[430px] rounded-[40px] bg-white/50 shadow-2xl backdrop-blur-md" />

					{/* Top Floating Phone */}
					<motion.div
						animate={{ y: [-12, 12, -12] }}
						transition={{
							duration: 6,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className="absolute -top-4 left-1/2 z-30 -translate-x-1/2">
						<img
							src="/career-top.png"
							alt=""
							className="w-36 drop-shadow-2xl"
						/>
					</motion.div>

					{/* Left Phone */}
					<motion.div
						animate={{ y: [-8, 8, -8], rotate: [-6, -5, -6] }}
						transition={{
							duration: 5,
							repeat: Infinity,
						}}
						className="absolute left-12 top-36 z-10">
						<img
							src="/career-phone1.png"
							alt=""
							className="w-44 drop-shadow-2xl"
						/>
					</motion.div>

					{/* Center Phone */}
					<motion.div
						animate={{ y: [10, -10, 10] }}
						transition={{
							duration: 5.5,
							repeat: Infinity,
						}}
						className="relative z-20">
						<img
							src="/career-phone2.png"
							alt=""
							className="w-48 drop-shadow-2xl"
						/>
					</motion.div>

					{/* Right Phone */}
					<motion.div
						animate={{ y: [-10, 10, -10], rotate: [6, 5, 6] }}
						transition={{
							duration: 6,
							repeat: Infinity,
						}}
						className="absolute right-12 top-36 z-10">
						<img
							src="/career-phone3.png"
							alt=""
							className="w-44 drop-shadow-2xl"
						/>
					</motion.div>
				</motion.div>

				{/* RIGHT SIDE */}
				<motion.div
					initial={{ opacity: 0, x: 60 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}>
					<span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-emerald-700">
						Join Our Team
					</span>

					<h2 className="mt-6 text-5xl font-bold text-gray-900">Careers</h2>

					<div className="mt-5 h-1 w-16 rounded bg-amber-500" />

					<p className="mt-8 text-lg leading-9 text-gray-600">
						We're looking for talented professionals who are passionate about
						innovation, customer service, and building the future of digital
						banking. Join a collaborative team where your skills can make a real
						impact.
					</p>

					<div className="mt-12 flex gap-20">
						<div>
							<h3 className="text-5xl font-bold text-emerald-700">500+</h3>

							<p className="mt-2 text-gray-500">Team Members</p>
						</div>

						<div>
							<h3 className="text-5xl font-bold text-amber-500">50+</h3>

							<p className="mt-2 text-gray-500">Open Positions</p>
						</div>
					</div>

					<Link to="/careers">
						<motion.button
							whileHover={{
								scale: 1.05,
								y: -3,
							}}
							whileTap={{
								scale: 0.95,
							}}
							className="mt-12 flex items-center gap-2 rounded-xl bg-emerald-600 px-10 py-4 font-semibold text-white shadow-xl transition hover:bg-emerald-700">
							Apply Now
							<ArrowRight size={18} />
						</motion.button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
