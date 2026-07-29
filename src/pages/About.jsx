import { motion } from "framer-motion";
import DigitalBanking from "../components/home/DigitalBanking";
import AccountBanner from "../components/home/AccountBanner";
import Footer from "../components/home/Footer";

export default function About() {
	return (
		<>
			{/* Hero */}
			<section
				className="relative flex h-[340px] items-center justify-center bg-cover bg-center"
				style={{
					backgroundImage: "url('/page-title-bg1.jpg')",
				}}>
				<div className="absolute inset-0 bg-emerald-900/70" />

				<div className="relative z-10 px-6 text-center">
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						className="font-serif text-6xl font-bold text-white">
						About Us
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="mt-6 text-3xl text-white">
						First Bank of Delaware – A global force in trade finance
					</motion.p>
				</div>
			</section>

			{/* About */}
			<section className="bg-white py-24">
				<div className="mx-auto max-w-7xl px-6">
					<div className="grid items-center gap-20 lg:grid-cols-2">
						{/* Left */}
						<motion.div
							initial={{ opacity: 0, x: -60 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}>
							<span className="rounded-full bg-emerald-100 px-6 py-3 text-sm font-semibold uppercase tracking-[2px] text-emerald-700">
								How We Were Founded
							</span>

							<h2 className="mt-8 font-serif text-6xl font-bold leading-tight text-gray-900">
								Easy, fee-free banking for entrepreneurs
							</h2>

							<div className="mt-8 h-1 w-20 rounded bg-amber-400" />

							<div className="mt-10 space-y-10 text-2xl leading-[2.2] text-gray-600">
								<p>
									First Bank of Delaware is a customer-driven provider focused
									on optimising business performance and supporting business
									growth by developing tailor-made trade finance solutions that
									provide exporters with accelerated receivables and importers
									with extended credit. The Bank is at the forefront of
									introducing and developing innovative receivable finance
									techniques in emerging markets.
								</p>

								<p>
									The First Bank of Delaware Group saw its beginning in 1991,
									with the establishment of First International Merchant Bank
									Ltd, which commenced operations in 1995. In June 2001, the
									shares of First International Merchant Bank p.l.c. were listed
									on the Germany Stock Exchange, and four years later the Bank
									changed its name to First Bank of Delaware p.l.c.
								</p>
							</div>
						</motion.div>

						{/* Right */}
						<motion.div
							initial={{ opacity: 0, x: 60 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}>
							<img
								src="/about-img1.jpg"
								alt="Office"
								className="h-[620px] w-full rounded-[28px] object-cover shadow-2xl"
							/>
						</motion.div>
					</div>

					{/* Bottom Paragraph */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="mt-24">
						<p className="text-2xl leading-[2.2] text-gray-600">
							In 2003, First Bank of Delaware acquired full control of
							UK-registered London Forfaiting Company Ltd, a market leader in
							forfaiting with an extensive international network spanning five
							continents. In 2006, the Group was further enhanced through the
							creation of First Bank of Delaware Business Solutions Ltd, which
							was launched as a business systems provider and technology
							consulting firm, while in 2008, First Bank of Delaware Property
							Investment Ltd was set up to oversee the construction of the
							Group's head office and provide facilities and property management
							services.
						</p>
					</motion.div>
				</div>
			</section>
			<DigitalBanking />
			<AccountBanner />
			<Footer />
		</>
	);
}
