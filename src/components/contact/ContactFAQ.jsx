import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
	{
		question: "How do I open a new account?",
		answer:
			"You can open a personal or business account online in just a few minutes, or visit any of our branches with a valid government-issued ID and the required supporting documents.",
	},
	{
		question: "How secure is your online banking platform?",
		answer:
			"Our digital banking platform uses bank-grade encryption, multi-factor authentication, continuous fraud monitoring, and advanced cybersecurity protocols to keep your information protected.",
	},
	{
		question: "Can I apply for a loan online?",
		answer:
			"Yes. You can apply for personal loans, mortgages, business loans, and commercial financing directly from our website. Our loan specialists will contact you once your application has been reviewed.",
	},
	{
		question: "How can I contact customer support?",
		answer:
			"You can reach us by phone, email, visiting one of our branches, or submitting the contact form on this page. Our support team is always ready to assist you.",
	},
	{
		question: "Do you offer international banking services?",
		answer:
			"Yes. We offer international wire transfers, foreign exchange services, global business banking, wealth management, and investment solutions for both individuals and businesses.",
	},
];

export default function ContactFAQ() {
	const [openIndex, setOpenIndex] = useState(0);

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f8faf9] py-28">
			{/* Background Glow */}
			<div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-100 blur-3xl opacity-50" />
			<div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-amber-100 blur-3xl opacity-50" />

			<div className="relative mx-auto max-w-5xl px-6">
				{/* Heading */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-20 text-center">
					<span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-emerald-700">
						Frequently Asked Questions
					</span>

					<h2 className="mt-6 font-serif text-5xl font-bold text-gray-900">
						Need Some Answers?
					</h2>

					<div className="mx-auto mt-6 h-1 w-20 rounded-full bg-amber-400" />

					<p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
						Browse through some of the most common questions about our banking
						services, digital banking platform, loans, accounts, and customer
						support.
					</p>
				</motion.div>

				{/* FAQ Cards */}
				<div className="space-y-6">
					{faqs.map((faq, index) => {
						const isOpen = openIndex === index;

						return (
							<motion.div
								key={faq.question}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									delay: index * 0.08,
								}}
								className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
								<button
									onClick={() => toggleFAQ(index)}
									className="flex w-full cursor-pointer items-center justify-between px-8 py-7 text-left transition hover:bg-gray-50">
									<h3 className="pr-5 text-xl font-bold text-gray-900">
										{faq.question}
									</h3>

									<div
										className={`flex h-12 w-12 items-center justify-center rounded-full transition ${
											isOpen ?
												"bg-emerald-600 text-white"
											:	"bg-gray-100 text-gray-700"
										}`}>
										{isOpen ?
											<Minus size={20} />
										:	<Plus size={20} />}
									</div>
								</button>

								<AnimatePresence>
									{isOpen && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{
												height: "auto",
												opacity: 1,
											}}
											exit={{
												height: 0,
												opacity: 0,
											}}
											transition={{
												duration: 0.35,
											}}
											className="overflow-hidden">
											<div className="border-t border-gray-100 bg-gray-50 px-8 py-6">
												<p className="leading-8 text-gray-600">{faq.answer}</p>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						);
					})}
				</div>

				{/* CTA */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3 }}
					className="mt-24 overflow-hidden rounded-[36px] bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 p-12 text-center text-white shadow-2xl">
					<div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
						<MessageCircle size={40} />
					</div>

					<h2 className="mt-8 text-4xl font-bold">Still Need Assistance?</h2>

					<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-emerald-50">
						If you couldn't find the answer you're looking for, our dedicated
						banking specialists are always available to help you with your
						accounts, loans, investments, digital banking, and every financial
						need.
					</p>

					<Link to="/contact">
						<motion.button
							whileHover={{
								scale: 1.05,
								y: -3,
							}}
							whileTap={{
								scale: 0.95,
							}}
							className="mt-10 rounded-xl bg-amber-400 px-8 py-4 font-semibold text-gray-900 shadow-xl transition hover:bg-amber-300">
							Contact Our Team
						</motion.button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
