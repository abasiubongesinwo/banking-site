import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
	{
		title: "Professional Service",
		description: "Expert guidance every step",
	},
	{
		title: "Global Access",
		description: "Banking without borders",
	},
	{
		title: "Secure Transactions",
		description: "Bank-grade encryption",
	},
	{
		title: "24/7 Support",
		description: "Always here to help",
	},
	{
		title: "Internet Banking",
		description: "Full digital experience",
	},
	{
		title: "Debit Mastercard",
		description: "Worldwide acceptance",
	},
];

const particles = [
	{ size: 12, color: "#22c55e", top: "8%", left: "-3%", delay: 0 },
	{ size: 10, color: "#f59e0b", top: "20%", right: "-2%", delay: 0.4 },
	{ size: 8, color: "#3b82f6", top: "55%", left: "-5%", delay: 0.8 },
	{ size: 14, color: "#ec4899", bottom: "18%", right: "-4%", delay: 1.2 },
	{ size: 10, color: "#8b5cf6", bottom: "5%", left: "10%", delay: 1.6 },
	{ size: 9, color: "#ef4444", top: "75%", right: "15%", delay: 2 },
];

export default function WhyChooseUs() {
	return (
		<section
			className="relative overflow-hidden bg-gray-50 py-24"
			style={{
				backgroundImage:
					"repeating-linear-gradient(45deg,#f9fafb,#f9fafb 22px,#f5f5f5 22px,#f5f5f5 44px)",
			}}>
			<div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
				{/* Left */}
				<motion.div
					initial={{ opacity: 0, x: -70 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-emerald-700">
						Why Choose Us
					</span>

					<h2 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
						Choose What's
						<br />
						Right for You
					</h2>

					<div className="mt-6 h-1 w-16 rounded bg-amber-500"></div>

					<p className="mt-8 text-lg leading-9 text-gray-600">
						We go to great lengths to source, attract, recruit, develop and
						retain the best talents wherever they may be.
					</p>

					<div className="mt-12 grid gap-8 sm:grid-cols-2">
						{benefits.map((item, index) => (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									delay: index * 0.1,
								}}
								className="flex gap-4">
								<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 shadow-lg">
									<Check className="text-white" />
								</div>

								<div>
									<h4 className="font-bold text-gray-900">{item.title}</h4>

									<p className="mt-1 text-gray-500">{item.description}</p>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Right */}
				<motion.div
					initial={{ opacity: 0, x: 70 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="relative flex justify-center">
					{/* Floating Dots */}
					{particles.map((dot, index) => (
						<motion.span
							key={index}
							className="absolute rounded-full"
							style={{
								width: dot.size,
								height: dot.size,
								background: dot.color,
								top: dot.top,
								bottom: dot.bottom,
								left: dot.left,
								right: dot.right,
							}}
							animate={{
								y: [-8, 8, -8],
								x: [-4, 4, -4],
								scale: [1, 1.3, 1],
								opacity: [0.6, 1, 0.6],
							}}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
								delay: dot.delay,
							}}
						/>
					))}

					{/* Background Card */}
					<div className="absolute -right-8 -top-8 h-full w-full rounded-[40px] bg-emerald-100/40 blur-sm"></div>

					{/* Image Card */}
					<motion.div
						whileHover={{
							y: -8,
							rotate: -1,
						}}
						transition={{
							type: "spring",
							stiffness: 120,
						}}
						className="relative overflow-hidden rounded-[40px] bg-white p-6 shadow-2xl">
						<img
							src="/whychooseus.png"
							alt="Why Choose Us"
							className="w-full rounded-3xl object-cover"
						/>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
