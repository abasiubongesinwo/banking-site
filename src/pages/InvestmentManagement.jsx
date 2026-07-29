import { motion } from "framer-motion";
import {
	TrendingUp,
	ShieldCheck,
	Briefcase,
	ChartColumn,
	CheckCircle2,
	ArrowRight,
} from "lucide-react";
import InvestmentMngBanner from "../components/InvestmentMngBanner";

const investmentServices = [
	{
		icon: TrendingUp,
		title: "Portfolio Management",
		description:
			"Our experienced investment specialists help clients build diversified portfolios designed to achieve long-term financial growth while carefully managing risk.",
	},
	{
		icon: Briefcase,
		title: "Wealth Planning",
		description:
			"Whether preserving family wealth or planning future investments, our tailored wealth management strategies are built around your financial objectives.",
	},
	{
		icon: ShieldCheck,
		title: "Capital Preservation",
		description:
			"We provide secure investment solutions that focus on protecting capital while generating stable returns through carefully selected investment opportunities.",
	},
];

const benefits = [
	"Professional investment advisory services",
	"Diversified investment portfolio strategies",
	"Competitive long-term investment returns",
	"Regular portfolio performance reviews",
	"Dedicated relationship managers",
	"Secure and transparent investment process",
];

const container = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const item = {
	hidden: {
		opacity: 0,
		y: 40,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
		},
	},
};

export default function InvestmentManagement() {
	return (
		<>
			<InvestmentMngBanner />

			<section className="bg-[#f8faf8] py-24">
				<div className="mx-auto max-w-7xl px-6">
					<div className="mb-16 text-center">
						<span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-emerald-700">
							Investment Management
						</span>

						<h2 className="mt-6 font-serif text-4xl font-bold text-slate-900 md:text-5xl">
							Grow & Protect Your Wealth
						</h2>

						<div className="mx-auto mt-6 h-1 w-24 rounded bg-amber-400" />

						<p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
							First Bank of Delaware offers professional investment management
							services designed to help individuals, businesses and institutions
							achieve sustainable financial growth through disciplined
							investment strategies and expert market insights.
						</p>
					</div>

					<motion.div
						variants={container}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="grid gap-8 lg:grid-cols-3">
						{investmentServices.map((service) => {
							const Icon = service.icon;

							return (
								<motion.div
									key={service.title}
									variants={item}
									whileHover={{
										y: -10,
									}}
									className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl">
									<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 text-white">
										<Icon size={30} />
									</div>

									<h3 className="font-serif text-3xl font-bold text-slate-900">
										{service.title}
									</h3>

									<div className="mt-4 h-1 w-16 rounded bg-amber-400" />

									<p className="mt-6 leading-8 text-slate-600">
										{service.description}
									</p>
								</motion.div>
							);
						})}
					</motion.div>

					<div className="mt-20 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
						<motion.div
							initial={{ opacity: 0, x: -40 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="rounded-3xl bg-white p-10 shadow-xl">
							<h3 className="font-serif text-4xl font-bold text-slate-900">
								Why Invest With Us
							</h3>

							<div className="mt-4 h-1 w-20 rounded bg-amber-400" />

							<p className="mt-8 text-lg leading-9 text-slate-600">
								We combine decades of banking experience with modern investment
								strategies to provide clients with reliable financial solutions.
								Every investment plan is tailored to your goals, risk tolerance
								and future aspirations.
							</p>

							<div className="mt-10 grid gap-5 md:grid-cols-2">
								{benefits.map((benefit) => (
									<div
										key={benefit}
										className="flex items-start gap-3 rounded-xl bg-emerald-50 p-4">
										<CheckCircle2
											size={22}
											className="mt-0.5 text-emerald-600"
										/>

										<p className="font-medium text-slate-700">{benefit}</p>
									</div>
								))}
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 40 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="rounded-3xl bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-500 p-10 text-white shadow-2xl">
							<div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
								<ChartColumn size={38} />
							</div>

							<h3 className="font-serif text-4xl font-bold">
								Start Investing Today
							</h3>

							<p className="mt-8 text-lg leading-9 text-white/90">
								Discover investment opportunities that help preserve wealth,
								generate consistent returns and secure your financial future
								with the guidance of our experienced advisors.
							</p>

							<button className="mt-12 flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-emerald-700 transition hover:scale-105">
								Learn More
								<ArrowRight size={20} />
							</button>
						</motion.div>
					</div>
				</div>
			</section>
		</>
	);
}
