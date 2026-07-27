import { motion } from "framer-motion";
import { ShieldCheck, Lock, Headphones, Trophy, UserPlus } from "lucide-react";

const features = [
	{
		icon: ShieldCheck,
		title: "Bank-Grade",
		subtitle: "Security",
	},
	{
		icon: Lock,
		title: "256-bit",
		subtitle: "Encryption",
	},
	{
		icon: Headphones,
		title: "24/7",
		subtitle: "Support",
	},
];

export default function Hero() {
	return (
		<section
			className="relative min-h-[90vh] bg-cover bg-center bg-no-repeat"
			style={{
				backgroundImage: "url('/main-banner2.jpg')",
			}}>
			<div className="absolute inset-0 bg-emerald-900/65" />
			<div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center justify-center px-6 py-5">
				<div className="max-w-3xl text-center text-white">
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						className="mx-auto mb-8 mt-10 inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-yellow-400">
						<Trophy size={16} />
						Trusted by Over 2 Million Customers Worldwide
					</motion.div>
					<motion.h1
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="text-5xl font-bold leading-tight md:text-7xl">
						Credible, Innovative
						<br />
						and Secured Banking
					</motion.h1>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4 }}
						className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-gray-200">
						Experience banking excellence with industry-leading security,
						personalized service, and global financial solutions. Join millions
						who trust us with their financial future. Whether you're saving for
						tomorrow or investing for the future, we provide the tools,
						expertise, and support you need to achieve your financial goals.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 25 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
						className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">
						<button className="flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-8 py-4 text-lg font-semibold text-black transition hover:bg-amber-400">
							<UserPlus size={20} />
							Open Account - It's Free
						</button>
						<button className="rounded-xl border border-white/40 bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-md transition hover:bg-white/20">
							Access Your Account
						</button>
					</motion.div>
					<div className="my-10 grid grid-cols-3 gap-4 sm:gap-8 sm:grid-cols-3">
						{features.map((feature, index) => {
							const Icon = feature.icon;
							return (
								<div
									key={index}
									className="flex items-center justify-center gap-4">
									<div className="rounded-xl bg-amber-500/20 p-2 sm:p-4">
										<Icon className="w-4 h-4 sm:w-6 sm:h-6 text-amber-400" />
									</div>
									<div className="text-left">
										<h3 className="text-sm sm:text-base font-bold">
											{feature.title}
										</h3>
										<p className="text-xs sm:text-sm text-gray-300">
											{feature.subtitle}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
