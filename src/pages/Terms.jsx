import { motion } from "framer-motion";
import { FileText, CalendarDays, ShieldCheck } from "lucide-react";

export default function Terms() {
	return (
		<>
			<section className="bg-[#f6f9f8]">
				{/* Hero */}
				<section className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700 py-28">
					{/* Background Glow */}
					<div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
					<div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

					<div className="relative mx-auto max-w-7xl px-6 text-center text-white">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}>
							<div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
								<FileText size={42} />
							</div>

							<span className="rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[4px] backdrop-blur-md">
								Legal Information
							</span>

							<h1 className="mt-8 font-serif text-5xl font-bold md:text-7xl">
								Terms & Conditions
							</h1>

							<p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-emerald-50">
								These Terms & Conditions govern your access to and use of First
								Bank of Delaware's banking products, online banking platform,
								mobile services, and financial solutions.
							</p>

							<div className="mt-12 flex flex-wrap items-center justify-center gap-8">
								<div className="flex items-center gap-3">
									<CalendarDays className="text-amber-400" />

									<div className="text-left">
										<p className="text-sm text-gray-300">Last Updated</p>

										<p className="font-semibold">July 31, 2026</p>
									</div>
								</div>

								<div className="h-10 w-px bg-white/20 hidden md:block" />

								<div className="flex items-center gap-3">
									<ShieldCheck className="text-amber-400" />

									<div className="text-left">
										<p className="text-sm text-gray-300">Compliance</p>

										<p className="font-semibold">FDIC • AML • KYC Standards</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* ================= Table of Contents ================= */}

				<section className="py-20">
					<div className="mx-auto max-w-7xl px-6">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="rounded-[30px] border border-gray-200 bg-white p-10 shadow-xl">
							<div className="mb-10 text-center">
								<span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-emerald-700">
									Contents
								</span>

								<h2 className="mt-5 text-4xl font-bold text-gray-900">
									Table of Contents
								</h2>

								<p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
									Review the sections below to understand your rights,
									responsibilities, and the terms governing your banking
									relationship with First Bank of Delaware.
								</p>
							</div>

							<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
								<a
									href="#acceptance"
									className="rounded-2xl border border-gray-200 p-5 transition hover:border-emerald-600 hover:bg-emerald-50">
									<h3 className="font-bold text-gray-900">
										01. Acceptance of Terms
									</h3>
								</a>

								<a
									href="#eligibility"
									className="rounded-2xl border border-gray-200 p-5 transition hover:border-emerald-600 hover:bg-emerald-50">
									<h3 className="font-bold text-gray-900">02. Eligibility</h3>
								</a>

								<a
									href="#registration"
									className="rounded-2xl border border-gray-200 p-5 transition hover:border-emerald-600 hover:bg-emerald-50">
									<h3 className="font-bold text-gray-900">
										03. Account Registration
									</h3>
								</a>

								<a
									href="#kyc"
									className="rounded-2xl border border-gray-200 p-5 transition hover:border-emerald-600 hover:bg-emerald-50">
									<h3 className="font-bold text-gray-900">
										04. Identity Verification (KYC)
									</h3>
								</a>

								<a
									href="#banking"
									className="rounded-2xl border border-gray-200 p-5 transition hover:border-emerald-600 hover:bg-emerald-50">
									<h3 className="font-bold text-gray-900">
										05. Online Banking Services
									</h3>
								</a>

								<a
									href="#security"
									className="rounded-2xl border border-gray-200 p-5 transition hover:border-emerald-600 hover:bg-emerald-50">
									<h3 className="font-bold text-gray-900">
										06. Security Responsibilities
									</h3>
								</a>

								<a
									href="#transactions"
									className="rounded-2xl border border-gray-200 p-5 transition hover:border-emerald-600 hover:bg-emerald-50">
									<h3 className="font-bold text-gray-900">
										07. Transactions & Payments
									</h3>
								</a>

								<a
									href="#fees"
									className="rounded-2xl border border-gray-200 p-5 transition hover:border-emerald-600 hover:bg-emerald-50">
									<h3 className="font-bold text-gray-900">
										08. Fees & Charges
									</h3>
								</a>

								<a
									href="#fraud"
									className="rounded-2xl border border-gray-200 p-5 transition hover:border-emerald-600 hover:bg-emerald-50">
									<h3 className="font-bold text-gray-900">
										09. Fraud Prevention
									</h3>
								</a>

								<a
									href="#privacy"
									className="rounded-2xl border border-gray-200 p-5 transition hover:border-emerald-600 hover:bg-emerald-50">
									<h3 className="font-bold text-gray-900">
										10. Privacy Policy
									</h3>
								</a>

								<a
									href="#liability"
									className="rounded-2xl border border-gray-200 p-5 transition hover:border-emerald-600 hover:bg-emerald-50">
									<h3 className="font-bold text-gray-900">
										11. Limitation of Liability
									</h3>
								</a>

								<a
									href="#governing"
									className="rounded-2xl border border-gray-200 p-5 transition hover:border-emerald-600 hover:bg-emerald-50">
									<h3 className="font-bold text-gray-900">12. Governing Law</h3>
								</a>
							</div>
						</motion.div>
					</div>
				</section>

				{/* ================= Important Notice ================= */}

				<section className="pb-20">
					<div className="mx-auto max-w-7xl px-6">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="overflow-hidden rounded-[30px] border border-amber-200 bg-gradient-to-r from-amber-50 to-white shadow-lg">
							<div className="grid lg:grid-cols-[120px_1fr]">
								<div className="flex items-center justify-center bg-amber-400 p-10">
									<div className="rounded-full bg-white p-5">
										<ShieldCheck size={42} className="text-amber-500" />
									</div>
								</div>

								<div className="p-10 lg:p-12">
									<span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold uppercase tracking-[3px] text-amber-700">
										Important Notice
									</span>

									<h2 className="mt-6 text-4xl font-bold text-gray-900">
										Please Read Carefully Before Using Our Services
									</h2>

									<p className="mt-6 leading-8 text-gray-600">
										These Terms & Conditions constitute a legally binding
										agreement between you and{" "}
										<strong>First Bank of Delaware</strong>. By opening an
										account, accessing Online Banking, using our Mobile Banking
										application, initiating financial transactions, or utilizing
										any of our products and services, you acknowledge that you
										have read, understood, and agree to comply with these Terms.
									</p>

									<p className="mt-5 leading-8 text-gray-600">
										If you do not agree with any provision contained in these
										Terms & Conditions, you should discontinue the registration
										process and refrain from using our banking services.
									</p>

									<div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
										<h3 className="text-lg font-bold text-emerald-700">
											Your Responsibilities
										</h3>

										<ul className="mt-4 space-y-3 text-gray-700">
											<li>
												• Provide accurate and complete personal information.
											</li>
											<li>
												• Keep your password and transaction PIN confidential.
											</li>
											<li>
												• Notify us immediately of any unauthorized account
												activity.
											</li>
											<li>
												• Comply with all applicable banking laws and
												regulations.
											</li>
											<li>• Keep your contact information up to date.</li>
										</ul>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* ================= Acceptance of Terms ================= */}

				<section id="acceptance" className="pb-16">
					<div className="mx-auto max-w-7xl px-6">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="rounded-[30px] border border-gray-200 bg-white p-10 shadow-lg">
							<div className="flex flex-col gap-8 lg:flex-row">
								{/* Number */}
								<div className="flex-shrink-0">
									<div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-600 text-3xl font-bold text-white shadow-lg">
										01
									</div>
								</div>

								{/* Content */}
								<div className="flex-1">
									<span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-[3px] text-emerald-700">
										Legal Agreement
									</span>

									<h2 className="mt-5 text-4xl font-bold text-gray-900">
										Acceptance of Terms
									</h2>

									<div className="mt-6 space-y-6 leading-8 text-gray-600">
										<p>
											These Terms & Conditions govern your access to and use of
											the banking products, financial services, digital banking
											platforms, mobile applications, and related services
											provided by <strong>First Bank of Delaware</strong>.
										</p>

										<p>
											By opening an account, registering for Online Banking,
											submitting information through our website, or using any
											service offered by the Bank, you acknowledge that you have
											read, understood, and agreed to be legally bound by these
											Terms & Conditions together with our Privacy Policy and
											any other policies referenced herein.
										</p>

										<p>
											If you disagree with any provision contained within these
											Terms, you must immediately discontinue the registration
											process and refrain from accessing or using our banking
											services.
										</p>
									</div>

									{/* Highlights */}

									<div className="mt-10 grid gap-5 md:grid-cols-3">
										<div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
											<h3 className="font-bold text-emerald-700">
												Binding Agreement
											</h3>

											<p className="mt-3 text-sm leading-7 text-gray-600">
												These Terms create a legally binding agreement between
												you and First Bank of Delaware.
											</p>
										</div>

										<div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
											<h3 className="font-bold text-blue-700">
												Service Access
											</h3>

											<p className="mt-3 text-sm leading-7 text-gray-600">
												Using our website, mobile banking or financial services
												means you agree to comply with these Terms.
											</p>
										</div>

										<div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">
											<h3 className="font-bold text-amber-700">
												Policy Updates
											</h3>

											<p className="mt-3 text-sm leading-7 text-gray-600">
												These Terms may be updated periodically. Continued use
												of our services constitutes acceptance of future
												revisions.
											</p>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* ================= Eligibility ================= */}

				<section id="eligibility" className="pb-16">
					<div className="mx-auto max-w-7xl px-6">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="rounded-[30px] border border-gray-200 bg-white p-10 shadow-lg">
							<div className="flex flex-col gap-8 lg:flex-row">
								{/* Number */}
								<div className="flex-shrink-0">
									<div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-600 text-3xl font-bold text-white shadow-lg">
										02
									</div>
								</div>

								{/* Content */}
								<div className="flex-1">
									<span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-[3px] text-emerald-700">
										Account Eligibility
									</span>

									<h2 className="mt-5 text-4xl font-bold text-gray-900">
										Eligibility Requirements
									</h2>

									<div className="mt-6 space-y-6 leading-8 text-gray-600">
										<p>
											To open and maintain an account with
											<strong> First Bank of Delaware</strong>, you must satisfy
											all eligibility requirements established by applicable
											banking laws and our internal compliance policies.
										</p>

										<p>
											Applicants must provide complete and accurate personal
											information, valid government-issued identification, and
											any additional documentation requested during the account
											verification process.
										</p>

										<p>
											We reserve the right to approve, decline, suspend, or
											close any application that does not satisfy our regulatory
											obligations, risk assessment procedures, or internal
											banking policies.
										</p>
									</div>

									{/* Eligibility Cards */}

									<div className="mt-10 grid gap-5 md:grid-cols-2">
										<div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
											<h3 className="text-xl font-bold text-emerald-700">
												You Must
											</h3>

											<ul className="mt-4 space-y-3 text-gray-700">
												<li>✔ Be legally eligible to open a bank account.</li>
												<li>✔ Provide valid identification documents.</li>
												<li>✔ Submit accurate personal information.</li>
												<li>✔ Successfully complete KYC verification.</li>
												<li>✔ Accept these Terms & Conditions.</li>
											</ul>
										</div>

										<div className="rounded-2xl border border-amber-100 bg-amber-50 p-6">
											<h3 className="text-xl font-bold text-amber-700">
												Important
											</h3>

											<ul className="mt-4 space-y-3 text-gray-700">
												<li>• Additional documents may be requested.</li>
												<li>• Identity verification is mandatory.</li>
												<li>
													• Business accounts require business registration
													documents.
												</li>
												<li>
													• False information may result in account closure.
												</li>
												<li>
													• Eligibility requirements may vary by jurisdiction.
												</li>
											</ul>
										</div>
									</div>

									{/* Bottom Notice */}

									<div className="mt-8 rounded-2xl border-l-4 border-emerald-600 bg-gray-50 p-6">
										<p className="leading-8 text-gray-700">
											<strong>Note:</strong> Opening an account does not
											guarantee approval. Every application is reviewed in
											accordance with federal banking regulations, Anti-Money
											Laundering (AML) requirements, Know Your Customer (KYC)
											standards, and internal risk management policies.
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* ================= Identity Verification ================= */}

				<section id="kyc" className="pb-16">
					<div className="mx-auto max-w-7xl px-6">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="rounded-[30px] border border-gray-200 bg-white p-10 shadow-lg">
							<div className="flex flex-col gap-8 lg:flex-row">
								{/* Number */}
								<div className="flex-shrink-0">
									<div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-600 text-3xl font-bold text-white shadow-lg">
										04
									</div>
								</div>

								{/* Content */}

								<div className="flex-1">
									<span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-[3px] text-emerald-700">
										KYC & AML Compliance
									</span>

									<h2 className="mt-5 text-4xl font-bold text-gray-900">
										Identity Verification
									</h2>

									<div className="mt-6 space-y-6 leading-8 text-gray-600">
										<p>
											First Bank of Delaware is committed to maintaining a
											secure banking environment by complying with Know Your
											Customer (KYC), Anti-Money Laundering (AML),
											Counter-Terrorist Financing (CTF), and other applicable
											regulatory requirements.
										</p>

										<p>
											Before your account can be activated, we may verify your
											identity using personal information, government-issued
											identification, proof of address, employment information,
											or other documentation required by applicable laws.
										</p>

										<p>
											Verification may be performed electronically or manually.
											Additional documentation may be requested at any time to
											maintain regulatory compliance or protect your account.
										</p>
									</div>

									{/* Cards */}

									<div className="mt-10 grid gap-5 md:grid-cols-2">
										<div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
											<h3 className="text-xl font-bold text-emerald-700">
												Documents We May Request
											</h3>

											<ul className="mt-4 space-y-3 text-gray-700">
												<li>✔ Government-issued Photo ID</li>
												<li>✔ Passport or Driver's License</li>
												<li>✔ Utility Bill or Proof of Address</li>
												<li>✔ Tax Identification Number (TIN)</li>
												<li>✔ Business Registration Documents</li>
											</ul>
										</div>

										<div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
											<h3 className="text-xl font-bold text-blue-700">
												Verification Process
											</h3>

											<ul className="mt-4 space-y-3 text-gray-700">
												<li>• Identity verification</li>
												<li>• Address verification</li>
												<li>• Fraud prevention screening</li>
												<li>• Sanctions & watchlist screening</li>
												<li>• Ongoing compliance monitoring</li>
											</ul>
										</div>
									</div>

									{/* Notice */}

									<div className="mt-8 rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
										<p className="leading-8 text-gray-700">
											<strong>Important:</strong> We reserve the right to delay,
											suspend, reject, or close any account if identity
											verification cannot be completed successfully or if the
											information provided is inaccurate, incomplete,
											misleading, or inconsistent with regulatory requirements.
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* ================= Online Banking Services ================= */}

				<section id="banking" className="pb-16">
					<div className="mx-auto max-w-7xl px-6">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="rounded-[30px] border border-gray-200 bg-white p-10 shadow-lg">
							<div className="flex flex-col gap-8 lg:flex-row">
								{/* Number */}

								<div className="flex-shrink-0">
									<div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-600 text-3xl font-bold text-white shadow-lg">
										05
									</div>
								</div>

								{/* Content */}

								<div className="flex-1">
									<span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-[3px] text-emerald-700">
										Digital Banking
									</span>

									<h2 className="mt-5 text-4xl font-bold text-gray-900">
										Online Banking Services
									</h2>

									<div className="mt-6 space-y-6 leading-8 text-gray-600">
										<p>
											First Bank of Delaware provides secure online and mobile
											banking services that allow customers to conveniently
											manage their accounts, transfer funds, pay bills, monitor
											balances, and access a wide range of financial products
											from anywhere in the world.
										</p>

										<p>
											Our digital banking platform is available 24 hours a day,
											seven days a week. However, access may occasionally be
											unavailable due to scheduled maintenance, software
											upgrades, network interruptions, or circumstances beyond
											our control.
										</p>

										<p>
											You are responsible for ensuring that your internet
											connection, mobile device, computer, and login credentials
											remain secure while accessing our online banking services.
										</p>
									</div>

									{/* Services */}

									<div className="mt-10 grid gap-5 md:grid-cols-2">
										<div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
											<h3 className="text-xl font-bold text-emerald-700">
												Available Services
											</h3>

											<ul className="mt-4 space-y-3 text-gray-700">
												<li>✔ Account Management</li>
												<li>✔ Domestic & International Transfers</li>
												<li>✔ Bill Payments</li>
												<li>✔ Mobile Banking</li>
												<li>✔ Investment Services</li>
												<li>✔ Loan Applications</li>
												<li>✔ Credit Card Management</li>
											</ul>
										</div>

										<div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
											<h3 className="text-xl font-bold text-blue-700">
												Service Availability
											</h3>

											<ul className="mt-4 space-y-3 text-gray-700">
												<li>• Available 24/7</li>
												<li>• Protected with bank-grade encryption</li>
												<li>• Multi-factor authentication</li>
												<li>• Real-time account monitoring</li>
												<li>• Continuous security updates</li>
												<li>• Scheduled maintenance when required</li>
											</ul>
										</div>
									</div>

									{/* Notice */}

									<div className="mt-8 rounded-2xl border-l-4 border-emerald-600 bg-gray-50 p-6">
										<p className="leading-8 text-gray-700">
											<strong>Notice:</strong> While we strive to provide
											uninterrupted access to our digital banking services,
											First Bank of Delaware cannot guarantee continuous
											availability due to maintenance, technical issues,
											telecommunication failures, cybersecurity events, or other
											circumstances beyond our reasonable control.
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* ================= Customer Responsibilities ================= */}

				<section id="security" className="pb-16">
					<div className="mx-auto max-w-7xl px-6">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="rounded-[30px] border border-gray-200 bg-white p-10 shadow-lg">
							<div className="flex flex-col gap-8 lg:flex-row">
								{/* Number */}

								<div className="flex-shrink-0">
									<div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-600 text-3xl font-bold text-white shadow-lg">
										06
									</div>
								</div>

								{/* Content */}

								<div className="flex-1">
									<span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-[3px] text-emerald-700">
										Account Security
									</span>

									<h2 className="mt-5 text-4xl font-bold text-gray-900">
										Customer Responsibilities
									</h2>

									<div className="mt-6 space-y-6 leading-8 text-gray-600">
										<p>
											You are responsible for maintaining the confidentiality of
											your online banking credentials, including your username,
											password, transaction PIN, one-time verification codes,
											and any authentication methods associated with your
											account.
										</p>

										<p>
											You must take reasonable precautions to prevent
											unauthorized access to your banking profile. Never
											disclose your login credentials to any third party,
											including individuals claiming to represent First Bank of
											Delaware.
										</p>

										<p>
											If you suspect unauthorized access, fraudulent activity,
											or the loss or compromise of your credentials, you must
											notify our Customer Support team immediately so
											appropriate action can be taken to protect your account.
										</p>
									</div>

									{/* Cards */}

									<div className="mt-10 grid gap-5 md:grid-cols-2">
										<div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
											<h3 className="text-xl font-bold text-emerald-700">
												Your Responsibilities
											</h3>

											<ul className="mt-4 space-y-3 text-gray-700">
												<li>✔ Keep your password confidential.</li>
												<li>✔ Protect your Transaction PIN.</li>
												<li>✔ Enable multi-factor authentication.</li>
												<li>✔ Log out after every banking session.</li>
												<li>✔ Monitor your account regularly.</li>
												<li>✔ Report suspicious activity immediately.</li>
											</ul>
										</div>

										<div className="rounded-2xl border border-red-100 bg-red-50 p-6">
											<h3 className="text-xl font-bold text-red-700">
												Never Do The Following
											</h3>

											<ul className="mt-4 space-y-3 text-gray-700">
												<li>• Share your password with anyone.</li>
												<li>• Share your Transaction PIN.</li>
												<li>• Respond to suspicious emails or messages.</li>
												<li>• Log in using untrusted devices.</li>
												<li>• Ignore unusual account activity.</li>
												<li>• Store passwords in unsecured locations.</li>
											</ul>
										</div>
									</div>

									{/* Security Notice */}

									<div className="mt-8 rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
										<p className="leading-8 text-gray-700">
											<strong>Security Notice:</strong> First Bank of Delaware
											will never request your password, transaction PIN,
											verification codes, or complete debit card information by
											email, text message, telephone, or social media. If you
											receive such a request, do not respond and report it
											immediately to our Customer Support team.
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* ================= Transactions & Payments ================= */}

				<section id="transactions" className="pb-16">
					<div className="mx-auto max-w-7xl px-6">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="rounded-[30px] border border-gray-200 bg-white p-10 shadow-lg">
							<div className="flex flex-col gap-8 lg:flex-row">
								{/* Number */}

								<div className="flex-shrink-0">
									<div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-600 text-3xl font-bold text-white shadow-lg">
										07
									</div>
								</div>

								{/* Content */}

								<div className="flex-1">
									<span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-[3px] text-emerald-700">
										Payments & Transfers
									</span>

									<h2 className="mt-5 text-4xl font-bold text-gray-900">
										Transactions & Payments
									</h2>

									<div className="mt-6 space-y-6 leading-8 text-gray-600">
										<p>
											First Bank of Delaware provides secure domestic and
											international payment services, electronic fund transfers,
											bill payments, deposits, withdrawals, and other financial
											transactions through our digital banking platform and
											authorized banking channels.
										</p>

										<p>
											All transactions submitted through your account are
											considered authorized once validated using your password,
											transaction PIN, one-time verification code, biometric
											authentication, or any other approved security method.
										</p>

										<p>
											Transaction processing times may vary depending on banking
											hours, weekends, public holidays, regulatory reviews,
											compliance checks, destination financial institutions, and
											network availability.
										</p>
									</div>

									{/* Cards */}

									<div className="mt-10 grid gap-5 md:grid-cols-2">
										<div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
											<h3 className="text-xl font-bold text-emerald-700">
												Available Transactions
											</h3>

											<ul className="mt-4 space-y-3 text-gray-700">
												<li>✔ Domestic Transfers</li>
												<li>✔ International Wire Transfers</li>
												<li>✔ Bill Payments</li>
												<li>✔ Mobile & Online Payments</li>
												<li>✔ Deposits & Withdrawals</li>
												<li>✔ Scheduled Transfers</li>
												<li>✔ Business Payments</li>
											</ul>
										</div>

										<div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
											<h3 className="text-xl font-bold text-blue-700">
												Transaction Policies
											</h3>

											<ul className="mt-4 space-y-3 text-gray-700">
												<li>• Transactions may require verification.</li>
												<li>• Daily transfer limits may apply.</li>
												<li>• Processing fees may apply.</li>
												<li>• International transfers may take longer.</li>
												<li>• Compliance reviews may delay processing.</li>
												<li>• Completed transactions may not be reversible.</li>
											</ul>
										</div>
									</div>

									{/* Notice */}

									<div className="mt-8 rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
										<p className="leading-8 text-gray-700">
											<strong>Important:</strong> Customers are responsible for
											verifying recipient information before confirming any
											transaction. First Bank of Delaware is not responsible for
											losses resulting from incorrect account numbers, routing
											information, beneficiary details, or unauthorized
											instructions submitted using valid customer credentials.
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* ================= Fees, Charges & Interest ================= */}

				<section id="fees" className="pb-16">
					<div className="mx-auto max-w-7xl px-6">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="rounded-[30px] border border-gray-200 bg-white p-10 shadow-lg">
							<div className="flex flex-col gap-8 lg:flex-row">
								{/* Number */}

								<div className="flex-shrink-0">
									<div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-600 text-3xl font-bold text-white shadow-lg">
										08
									</div>
								</div>

								{/* Content */}

								<div className="flex-1">
									<span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-[3px] text-emerald-700">
										Fees & Charges
									</span>

									<h2 className="mt-5 text-4xl font-bold text-gray-900">
										Fees, Charges & Interest
									</h2>

									<div className="mt-6 space-y-6 leading-8 text-gray-600">
										<p>
											Certain banking products and services provided by First
											Bank of Delaware may be subject to applicable service
											fees, maintenance charges, transaction fees, foreign
											exchange costs, overdraft fees, loan interest, and other
											charges as outlined in our official Fee Schedule.
										</p>

										<p>
											Applicable fees will be disclosed before completing
											transactions whenever required by law. By using our
											services, you authorize the Bank to deduct any applicable
											fees directly from your account.
										</p>

										<p>
											The Bank reserves the right to revise its fees, interest
											rates, exchange rates, and service charges from time to
											time. Updated pricing will become effective after
											appropriate notice is provided where required under
											applicable regulations.
										</p>
									</div>

									{/* Cards */}

									<div className="mt-10 grid gap-5 md:grid-cols-2">
										<div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
											<h3 className="text-xl font-bold text-emerald-700">
												Common Banking Fees
											</h3>

											<ul className="mt-4 space-y-3 text-gray-700">
												<li>✔ Monthly Account Maintenance</li>
												<li>✔ Wire Transfer Fees</li>
												<li>✔ International Payment Charges</li>
												<li>✔ ATM Withdrawal Fees</li>
												<li>✔ Debit & Credit Card Replacement</li>
												<li>✔ Overdraft Charges</li>
												<li>✔ Currency Conversion Fees</li>
											</ul>
										</div>

										<div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
											<h3 className="text-xl font-bold text-blue-700">
												Interest Information
											</h3>

											<ul className="mt-4 space-y-3 text-gray-700">
												<li>• Savings accounts may earn interest.</li>
												<li>• Loan interest varies by product.</li>
												<li>• Mortgage rates are subject to approval.</li>
												<li>• Fixed deposits earn agreed interest.</li>
												<li>• Exchange rates change daily.</li>
												<li>• Promotional rates may expire.</li>
											</ul>
										</div>
									</div>

									{/* Notice */}

									<div className="mt-8 rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
										<p className="leading-8 text-gray-700">
											<strong>Important:</strong> Customers are encouraged to
											review the Bank's current Fee Schedule and applicable
											interest rates before initiating transactions or applying
											for financial products. Continued use of our services
											after fee updates constitutes acceptance of the revised
											pricing.
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* ================= Fraud Prevention ================= */}

				<section id="fraud" className="pb-16">
					<div className="mx-auto max-w-7xl px-6">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="rounded-[30px] border border-gray-200 bg-white p-10 shadow-lg">
							<div className="flex flex-col gap-8 lg:flex-row">
								{/* Number */}

								<div className="flex-shrink-0">
									<div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-600 text-3xl font-bold text-white shadow-lg">
										09
									</div>
								</div>

								{/* Content */}

								<div className="flex-1">
									<span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-[3px] text-emerald-700">
										Fraud Prevention
									</span>

									<h2 className="mt-5 text-4xl font-bold text-gray-900">
										Fraud Prevention & Security Monitoring
									</h2>

									<div className="mt-6 space-y-6 leading-8 text-gray-600">
										<p>
											First Bank of Delaware employs advanced fraud detection
											systems, real-time transaction monitoring, artificial
											intelligence, and risk management tools to protect
											customer accounts from unauthorized access, financial
											fraud, and cybersecurity threats.
										</p>

										<p>
											To safeguard customers and comply with financial
											regulations, we may temporarily delay, decline, review, or
											suspend transactions that appear unusual, suspicious, or
											inconsistent with normal account activity.
										</p>

										<p>
											Customers are responsible for promptly reviewing account
											activity and immediately reporting any unauthorized
											access, suspicious transactions, lost devices, stolen
											cards, or compromised login credentials.
										</p>
									</div>

									{/* Cards */}

									<div className="mt-10 grid gap-5 md:grid-cols-2">
										<div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
											<h3 className="text-xl font-bold text-emerald-700">
												Our Security Measures
											</h3>

											<ul className="mt-4 space-y-3 text-gray-700">
												<li>✔ 24/7 Fraud Monitoring</li>
												<li>✔ AI Transaction Analysis</li>
												<li>✔ Secure Login Verification</li>
												<li>✔ Multi-Factor Authentication</li>
												<li>✔ Suspicious Activity Detection</li>
												<li>✔ Continuous Risk Assessment</li>
											</ul>
										</div>

										<div className="rounded-2xl border border-red-100 bg-red-50 p-6">
											<h3 className="text-xl font-bold text-red-700">
												Customer Responsibilities
											</h3>

											<ul className="mt-4 space-y-3 text-gray-700">
												<li>• Never share your login credentials.</li>
												<li>• Review account activity regularly.</li>
												<li>• Report suspicious transactions immediately.</li>
												<li>• Keep contact information up to date.</li>
												<li>• Protect your mobile devices.</li>
												<li>
													• Notify the Bank if your card is lost or stolen.
												</li>
											</ul>
										</div>
									</div>

									{/* Notice */}

									<div className="mt-8 rounded-2xl border-l-4 border-red-500 bg-red-50 p-6">
										<p className="leading-8 text-gray-700">
											<strong>Important:</strong> First Bank of Delaware
											reserves the right to temporarily restrict account access,
											delay transaction processing, request additional identity
											verification, or freeze an account whenever fraudulent,
											illegal, or suspicious activity is suspected. These
											measures are intended to protect both our customers and
											the integrity of the banking system.
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* ================= Privacy & Data Protection ================= */}

				<section id="privacy" className="pb-16">
					<div className="mx-auto max-w-7xl px-6">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="rounded-[30px] border border-gray-200 bg-white p-10 shadow-lg">
							<div className="flex flex-col gap-8 lg:flex-row">
								{/* Number */}

								<div className="flex-shrink-0">
									<div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-600 text-3xl font-bold text-white shadow-lg">
										10
									</div>
								</div>

								{/* Content */}

								<div className="flex-1">
									<span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-[3px] text-emerald-700">
										Privacy Policy
									</span>

									<h2 className="mt-5 text-4xl font-bold text-gray-900">
										Privacy & Data Protection
									</h2>

									<div className="mt-6 space-y-6 leading-8 text-gray-600">
										<p>
											First Bank of Delaware respects your privacy and is
											committed to protecting the confidentiality of your
											personal and financial information. We collect, use,
											store, and process customer information only as necessary
											to provide banking services, comply with legal
											obligations, prevent fraud, and improve our products and
											services.
										</p>

										<p>
											Personal information may include your name, contact
											information, identification documents, financial
											information, account activity, device information, and
											other details provided during account registration or
											while using our banking services.
										</p>

										<p>
											We implement administrative, technical, and physical
											safeguards designed to protect customer information
											against unauthorized access, disclosure, alteration, or
											destruction.
										</p>
									</div>

									{/* Cards */}

									<div className="mt-10 grid gap-5 md:grid-cols-2">
										<div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
											<h3 className="text-xl font-bold text-emerald-700">
												Information We Collect
											</h3>

											<ul className="mt-4 space-y-3 text-gray-700">
												<li>✔ Personal Identification Information</li>
												<li>✔ Contact Details</li>
												<li>✔ Financial & Banking Information</li>
												<li>✔ Transaction History</li>
												<li>✔ Device & Login Information</li>
												<li>✔ Identity Verification Documents</li>
											</ul>
										</div>

										<div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
											<h3 className="text-xl font-bold text-blue-700">
												How We Use Your Information
											</h3>

											<ul className="mt-4 space-y-3 text-gray-700">
												<li>• Process banking transactions.</li>
												<li>• Verify customer identity.</li>
												<li>• Detect fraud and security threats.</li>
												<li>• Meet legal and regulatory obligations.</li>
												<li>• Improve banking products and services.</li>
												<li>• Provide customer support.</li>
											</ul>
										</div>
									</div>

									{/* Notice */}

									<div className="mt-8 rounded-2xl border-l-4 border-emerald-600 bg-gray-50 p-6">
										<p className="leading-8 text-gray-700">
											<strong>Privacy Commitment:</strong> First Bank of
											Delaware does not sell customer personal information.
											Information is shared only when required by law,
											regulatory authorities, trusted service providers, or with
											your express authorization in accordance with applicable
											privacy regulations.
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* ================= Suspension & Account Closure ================= */}

				<section id="liability" className="pb-16">
					<div className="mx-auto max-w-7xl px-6">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="rounded-[30px] border border-gray-200 bg-white p-10 shadow-lg">
							<div className="flex flex-col gap-8 lg:flex-row">
								{/* Number */}

								<div className="flex-shrink-0">
									<div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-600 text-3xl font-bold text-white shadow-lg">
										11
									</div>
								</div>

								{/* Content */}

								<div className="flex-1">
									<span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-[3px] text-emerald-700">
										Account Management
									</span>

									<h2 className="mt-5 text-4xl font-bold text-gray-900">
										Suspension, Restriction & Account Closure
									</h2>

									<div className="mt-6 space-y-6 leading-8 text-gray-600">
										<p>
											First Bank of Delaware reserves the right to suspend,
											restrict, temporarily freeze, or permanently close any
											account whenever necessary to comply with applicable laws,
											regulatory obligations, court orders, internal risk
											policies, or to protect the Bank and its customers from
											fraud or financial crime.
										</p>

										<p>
											Account access may be restricted without prior notice
											where immediate action is required to prevent fraud,
											unauthorized access, money laundering, terrorist
											financing, cybersecurity threats, or other illegal
											activities.
										</p>

										<p>
											Customers may also request closure of their account at any
											time, subject to settlement of outstanding loans, fees,
											pending transactions, and other contractual obligations
											owed to the Bank.
										</p>
									</div>

									{/* Cards */}

									<div className="mt-10 grid gap-5 md:grid-cols-2">
										<div className="rounded-2xl border border-red-100 bg-red-50 p-6">
											<h3 className="text-xl font-bold text-red-700">
												Account May Be Restricted If
											</h3>

											<ul className="mt-4 space-y-3 text-gray-700">
												<li>• Fraud or suspicious activity is detected.</li>
												<li>• Identity verification cannot be completed.</li>
												<li>• Regulatory investigations are initiated.</li>
												<li>• Court or government orders require action.</li>
												<li>• False information was provided.</li>
												<li>• Terms & Conditions are violated.</li>
											</ul>
										</div>

										<div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
											<h3 className="text-xl font-bold text-emerald-700">
												Account Closure
											</h3>

											<ul className="mt-4 space-y-3 text-gray-700">
												<li>✔ Customer-requested closure.</li>
												<li>✔ Outstanding balances must be settled.</li>
												<li>✔ Pending transactions must be completed.</li>
												<li>
													✔ Remaining funds will be handled according to
													applicable regulations.
												</li>
												<li>
													✔ Certain records may be retained after closure.
												</li>
											</ul>
										</div>
									</div>

									{/* Notice */}

									<div className="mt-8 rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
										<p className="leading-8 text-gray-700">
											<strong>Notice:</strong> Suspension or closure of an
											account does not eliminate any financial obligations owed
											to First Bank of Delaware. Customers remain responsible
											for outstanding loans, overdrafts, fees, interest,
											chargebacks, or any other liabilities that existed prior
											to account closure.
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* ================= Governing Law & Contact ================= */}

				<section id="governing" className="pb-24">
					<div className="mx-auto max-w-7xl px-6">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="rounded-[30px] border border-gray-200 bg-white p-10 shadow-lg">
							<div className="flex flex-col gap-8 lg:flex-row">
								{/* Number */}

								<div className="flex-shrink-0">
									<div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-600 text-3xl font-bold text-white shadow-lg">
										12
									</div>
								</div>

								{/* Content */}

								<div className="flex-1">
									<span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-[3px] text-emerald-700">
										Final Provisions
									</span>

									<h2 className="mt-5 text-4xl font-bold text-gray-900">
										Governing Law, Updates & Contact Information
									</h2>

									<div className="mt-6 space-y-6 leading-8 text-gray-600">
										<p>
											These Terms & Conditions shall be governed by and
											interpreted in accordance with the applicable federal and
											state laws governing the operations of First Bank of
											Delaware and any relevant financial regulatory
											authorities.
										</p>

										<p>
											First Bank of Delaware reserves the right to modify,
											update, replace, or amend these Terms & Conditions at any
											time to reflect changes in applicable laws, regulations,
											banking practices, security standards, or our products and
											services.
										</p>

										<p>
											Updated versions will become effective immediately upon
											publication unless otherwise required by law. Your
											continued use of our banking products and services after
											such updates constitutes acceptance of the revised Terms &
											Conditions.
										</p>
									</div>

									{/* Cards */}

									<div className="mt-10 grid gap-5 md:grid-cols-2">
										<div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
											<h3 className="text-xl font-bold text-emerald-700">
												Legal Information
											</h3>

											<ul className="mt-4 space-y-3 text-gray-700">
												<li>✔ Subject to applicable banking laws.</li>
												<li>✔ Regulatory compliance is mandatory.</li>
												<li>✔ Terms may be updated periodically.</li>
												<li>✔ Continued use signifies acceptance.</li>
												<li>✔ Previous versions become superseded.</li>
											</ul>
										</div>

										<div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
											<h3 className="text-xl font-bold text-blue-700">
												Need Assistance?
											</h3>

											<div className="mt-4 space-y-4 text-gray-700">
												<div>
													<p className="font-semibold">Customer Support</p>
													<p>support@firstbankofdelaware.com</p>
												</div>

												<div>
													<p className="font-semibold">General Enquiries</p>
													<p>info@firstbankofdelaware.com</p>
												</div>

												<div>
													<p className="font-semibold">Business Hours</p>
													<p>Monday – Friday | 8:30 AM – 5:00 PM</p>
												</div>
											</div>
										</div>
									</div>

									{/* Final Notice */}

									<div className="mt-8 rounded-2xl border-l-4 border-emerald-600 bg-gray-50 p-6">
										<p className="leading-8 text-gray-700">
											<strong>Effective Date:</strong> These Terms & Conditions
											apply to all customers using the products and services of
											First Bank of Delaware. By opening, accessing, or
											continuing to use any account or banking service, you
											acknowledge that you have read, understood, and agree to
											be legally bound by these Terms & Conditions.
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>
			</section>
		</>
	);
}
