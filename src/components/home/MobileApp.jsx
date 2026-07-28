import { motion } from "framer-motion";
import { ShieldCheck, WifiOff, Bell, Smartphone, Download } from "lucide-react";

const features = [
	{
		icon: ShieldCheck,
		title: "Bank-Grade Security",
		description: "256-bit encryption & biometric authentication",
	},
	{
		icon: WifiOff,
		title: "Works Offline",
		description: "Access your balance & transaction history offline",
	},
	{
		icon: Bell,
		title: "Real-Time Alerts",
		description: "Instant notifications for every transaction",
	},
];

export default function MobileApp() {
	return (
		<section
			className="relative overflow-hidden py-28"
			style={{
				background:
					"linear-gradient(135deg,#17653d 0%,#2f8d58 55%,#49b772 100%)",
			}}>
			{/* Stripe Pattern */}
			<div
				className="absolute inset-0 opacity-10"
				style={{
					backgroundImage:
						"repeating-linear-gradient(45deg,white 0px,white 18px,transparent 18px,transparent 36px)",
				}}
			/>

			<div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
				{/* LEFT CONTENT */}
				<motion.div
					initial={{ opacity: 0, x: -60 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}>
					<span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-emerald-700 px-5 py-2 text-xs font-semibold uppercase tracking-[2px] text-amber-400">
						<Smartphone size={14} />
						Mobile Banking
					</span>

					<h2 className="mt-8 text-5xl font-bold leading-tight text-white">
						Bank On The Go
						<br />
						Download Our App
					</h2>

					<p className="mt-8 max-w-xl text-lg leading-9 text-emerald-100">
						Experience seamless banking from your mobile device. Access your
						accounts, transfer money, pay bills, and manage your finances
						anywhere in the world.
					</p>

					<div className="mt-10 space-y-6">
						{features.map((item, index) => {
							const Icon = item.icon;

							return (
								<motion.div
									key={item.title}
									initial={{ opacity: 0, x: -30 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{
										delay: index * 0.15,
									}}
									className="flex items-start gap-4">
									<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/20">
										<Icon size={24} className="text-amber-400" />
									</div>

									<div>
										<h3 className="text-xl font-semibold text-white">
											{item.title}
										</h3>

										<p className="mt-1 text-emerald-100">{item.description}</p>
									</div>
								</motion.div>
							);
						})}
					</div>

					<motion.button
						whileHover={{
							scale: 1.05,
							y: -3,
						}}
						whileTap={{
							scale: 0.95,
						}}
						className="mt-12 flex items-center gap-3 rounded-2xl bg-amber-400 px-8 py-4 font-semibold text-gray-900 shadow-xl transition hover:bg-amber-300">
						<Download size={20} />
						Install App
					</motion.button>
				</motion.div>

				{/* PHONE MOCKUP */}
				<motion.div
					initial={{ opacity: 0, x: 60 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="relative flex justify-center">
					{/* Floating Badge */}
					<motion.div
						animate={{
							y: [-8, 8, -8],
						}}
						transition={{
							repeat: Infinity,
							duration: 4,
						}}
						className="absolute right-0 top-12 z-20 rounded-2xl bg-white px-6 py-4 shadow-2xl">
						<p className="font-semibold text-gray-700">⚡ Fast & Secure</p>
					</motion.div>

					{/* Glow */}
					<div className="absolute h-[500px] w-[300px] rounded-full bg-white/10 blur-3xl"></div>

					{/* Phone Placeholder */}
					<div className="relative flex h-[620px] w-[300px] items-center justify-center rounded-[45px] border border-white/20 bg-emerald-500/40 p-4 shadow-[0_20px_60px_rgba(0,0,0,.35)] backdrop-blur-md">
						<div className="absolute top-3 h-7 w-28 rounded-b-2xl bg-emerald-900"></div>

						<div className="absolute bottom-3 h-1 w-24 rounded-full bg-white/30"></div>

						<div className="flex h-full w-full items-center justify-center rounded-[34px] border-2 border-white/10 bg-slate-900">
							<img
								src="/mobile-app.png"
								alt="Mobile Banking App"
								className="h-full w-full rounded-[34px] object-cover"
							/>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
