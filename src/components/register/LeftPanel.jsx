import { motion } from "framer-motion";
import {
	FaUniversity,
	FaShieldAlt,
	FaMoneyCheckAlt,
	FaHeadset,
} from "react-icons/fa";

const features = [
	{
		icon: FaShieldAlt,
		title: "Bank-Level Security",
		description: "256-bit encryption protects your data.",
	},
	{
		icon: FaMoneyCheckAlt,
		title: "Instant Transfers",
		description: "Send money securely across the globe.",
	},
	{
		icon: FaUniversity,
		title: "Trusted Banking",
		description: "Serving individuals and businesses worldwide.",
	},
	{
		icon: FaHeadset,
		title: "Expert Support",
		description: "Dedicated banking specialists are here to help.",
	},
];

export default function LeftPanel() {
	return (
		<div
			className="relative h-full w-full flex flex-col justify-center "
			style={{
				backgroundImage: `
			linear-gradient(rgba(8,40,28,.88), rgba(8,40,28,.88)),
			url('/page-title-bg2.jpg')
		`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}>
			{/* Background Glow */}
			<div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
			<div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />

			{/* Vertical Lines */}
			<div className="absolute inset-0 opacity-10">
				<div className="mx-auto flex h-full max-w-5xl justify-between">
					{[...Array(6)].map((_, index) => (
						<div key={index} className="h-full w-px bg-white" />
					))}
				</div>
			</div>

			<div className="relative z-10 flex w-full flex-col justify-center px-16 py-20 text-white">
				<motion.img
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					src="/logo.png"
					alt="First Bank"
					className="mb-8 h-20 w-fit"
				/>

				<motion.span
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.15 }}
					className="text-sm font-semibold uppercase tracking-[6px] text-amber-400">
					First Bank of Delaware
				</motion.span>

				<motion.h1
					initial={{ opacity: 0, y: 25 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="mt-6 font-serif text-6xl font-bold leading-tight">
					Start Your
					<br />
					Banking Journey
				</motion.h1>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.45 }}
					className="mt-8 max-w-xl text-lg leading-9 text-gray-200">
					Join thousands of customers who trust First Bank of Delaware for
					secure banking, international transfers, personal finance management,
					and long-term financial growth.
				</motion.p>

				<div className="mt-14 space-y-6">
					{features.map((feature, index) => {
						const Icon = feature.icon;

						return (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									delay: 0.6 + index * 0.15,
								}}
								className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
								<div className="rounded-2xl bg-white/10 p-4">
									<Icon size={22} className="text-amber-400" />
								</div>

								<div>
									<h3 className="text-lg font-semibold">{feature.title}</h3>

									<p className="mt-1 text-gray-300">{feature.description}</p>
								</div>
							</motion.div>
						);
					})}
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.2 }}
					className="mt-16 flex items-center gap-4">
					<div className="h-1 w-20 rounded-full bg-amber-400" />
					<p className="text-sm uppercase tracking-[4px] text-amber-300">
						Secure • Trusted • Global
					</p>
				</motion.div>
			</div>
		</div>
	);
}
