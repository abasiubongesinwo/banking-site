import { motion } from "framer-motion";
import { Building2, CreditCard, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const cardBenefits = [
	"0% Introductory Rate for the first six months",
	"No Annual Fee",
	"Additional cards for authorized users",
	"Competitive variable interest rate",
];

export default function Loan() {
	return (
		<section className="bg-[#f8faf9] py-24">
			<div className="mx-auto max-w-7xl px-6">
				<div className="grid gap-12 lg:grid-cols-2">
					{/* Business Loan */}
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="rounded-[32px] bg-white p-10 shadow-xl">
						<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 text-white">
							<Building2 size={30} />
						</div>

						<h2 className="mt-8 font-serif text-4xl font-bold text-gray-900">
							Business Loan
						</h2>

						<h3 className="mt-4 text-2xl font-semibold text-emerald-700">
							Loans To Fuel Your Growth
						</h3>

						<p className="mt-6 leading-8 text-gray-600">
							Whether you're launching a startup, expanding operations,
							purchasing equipment, or improving cash flow, First Bank of
							Delaware offers flexible financing tailored to your business
							goals.
						</p>

						<p className="mt-5 leading-8 text-gray-600">
							Choose from working capital loans, commercial term loans, lines of
							credit, equipment financing, and customized cash-management
							solutions designed to help your business grow with confidence.
						</p>

						<div className="mt-8 rounded-2xl bg-emerald-50 p-6">
							<h4 className="text-xl font-bold text-gray-900">
								Ready to Apply?
							</h4>

							<p className="mt-3 leading-7 text-gray-600">
								Speak with one of our commercial banking specialists today and
								discover financing solutions designed for your business.
							</p>

							<Link
								to="/contact"
								className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">
								Apply Now
								<ArrowRight size={18} />
							</Link>
						</div>
					</motion.div>

					{/* Business Mastercard */}
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="rounded-[32px] bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-700 p-10 text-white shadow-2xl">
						<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
							<CreditCard size={30} />
						</div>

						<h2 className="mt-8 font-serif text-4xl font-bold">
							Business Mastercard
						</h2>

						<p className="mt-6 leading-8 text-emerald-50">
							Our Business Mastercard combines purchasing flexibility,
							competitive rates, and premium benefits to help manage your
							company's everyday expenses.
						</p>

						<div className="mt-10 space-y-5">
							{cardBenefits.map((item) => (
								<div
									key={item}
									className="flex items-start gap-4 rounded-xl bg-white/10 p-4">
									<CheckCircle2 size={22} className="mt-1 text-amber-300" />

									<p className="leading-7">{item}</p>
								</div>
							))}
						</div>

						<div className="mt-10 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
							<h4 className="text-2xl font-bold">Need More Information?</h4>

							<p className="mt-4 leading-8 text-emerald-50">
								Our commercial banking team is available to answer your
								questions and help you choose the right business financing or
								credit card solution.
							</p>

							<p className="mt-5 font-semibold text-amber-300">
								support@firbod.com
							</p>
						</div>
					</motion.div>
				</div>

				{/* Bottom Banner */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mt-16 overflow-hidden rounded-[36px] bg-gradient-to-r from-[#0f5132] via-emerald-700 to-[#0f5132] p-12 text-center text-white shadow-2xl">
					<span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] backdrop-blur">
						Business Banking
					</span>

					<h2 className="mt-6 font-serif text-5xl font-bold">
						Finance Your Next Business Opportunity
					</h2>

					<p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-emerald-50">
						From startups to established enterprises, we're committed to helping
						businesses thrive through flexible lending, commercial banking
						solutions, and expert financial guidance.
					</p>

					<Link
						to="/contact"
						className="mt-10 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-8 py-4 font-semibold text-gray-900 transition hover:bg-amber-300">
						Contact Our Business Team
						<ArrowRight size={18} />
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
