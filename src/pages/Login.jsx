import { motion } from "framer-motion";
import { Lock, Mail, KeyRound, ShieldCheck, Fingerprint } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
	return (
		<section className="min-h-screen bg-[#f5f8f7]">
			<div className="grid min-h-screen lg:grid-cols-2">
				{/* Left Side */}
				<div
					className="relative hidden overflow-hidden lg:flex"
					style={{
						backgroundImage: `
							linear-gradient(rgba(8,40,28,.85), rgba(8,40,28,.85)),
							url('/page-title-bg2.jpg')
						`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}>
					<div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 to-emerald-700/60" />

					<div className="relative z-10 flex flex-col justify-center px-16 text-white">
						<span className="text-sm uppercase tracking-[6px] text-amber-400">
							Secure Online Banking
						</span>

						<h1 className="mt-6 font-serif text-6xl font-bold leading-tight">
							Welcome Back
						</h1>

						<p className="mt-8 max-w-lg text-lg leading-9 text-gray-200">
							Access your accounts securely, transfer funds, manage investments,
							pay bills, and monitor your finances anytime, anywhere.
						</p>

						<div className="mt-14 space-y-8">
							<div className="flex items-center gap-5">
								<div className="rounded-2xl bg-white/10 p-4">
									<ShieldCheck className="text-amber-400" />
								</div>

								<div>
									<h3 className="text-xl font-semibold">Bank-Grade Security</h3>

									<p className="text-gray-300">
										Advanced encryption protects your data.
									</p>
								</div>
							</div>

							<div className="flex items-center gap-5">
								<div className="rounded-2xl bg-white/10 p-4">
									<Fingerprint className="text-amber-400" />
								</div>

								<div>
									<h3 className="text-xl font-semibold">
										Secure Authentication
									</h3>

									<p className="text-gray-300">
										Multi-layer account protection.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Right Side */}
				<div className="flex items-center justify-center px-6 py-20">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="w-full max-w-md rounded-[30px] bg-white p-10 shadow-2xl">
						<h2 className="text-center font-serif text-4xl font-bold text-gray-900">
							E-Banking Login
						</h2>

						<p className="mt-4 text-center text-gray-500">
							Sign in to access your online banking account.
						</p>

						<form className="mt-10 space-y-6">
							{/* Email */}
							<div>
								<label className="mb-2 block font-medium">Email Address</label>

								<div className="flex items-center rounded-xl border border-gray-300 px-4">
									<Mail className="text-gray-400" size={20} />

									<input
										type="email"
										placeholder="Enter your email"
										className="w-full bg-transparent px-4 py-4 outline-none"
									/>
								</div>
							</div>

							{/* Password */}
							<div>
								<label className="mb-2 block font-medium">Password</label>

								<div className="flex items-center rounded-xl border border-gray-300 px-4">
									<KeyRound className="text-gray-400" size={20} />

									<input
										type="password"
										placeholder="Enter your password"
										className="w-full bg-transparent px-4 py-4 outline-none"
									/>
								</div>
							</div>

							{/* Remember */}
							<div className="flex items-center justify-between">
								<label className="flex items-center gap-2 text-sm">
									<input type="checkbox" className="accent-emerald-600" />
									Remember Me
								</label>

								<button
									type="button"
									className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
									Forgot Password?
								</button>
							</div>

							{/* Terms */}
							<label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-gray-600">
								<input
									type="checkbox"
									className="mt-1 h-4 w-4 rounded accent-emerald-600"
								/>

								<span>
									I agree to the{" "}
									<Link
										to="/terms"
										className="font-semibold text-emerald-600 hover:underline">
										Terms & Conditions
									</Link>{" "}
									and{" "}
									<Link
										to="/privacy"
										className="font-semibold text-emerald-600 hover:underline">
										Privacy Policy
									</Link>
									.
								</span>
							</label>

							{/* Login */}
							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								type="submit"
								className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-emerald-600 py-4 font-semibold text-white transition hover:bg-emerald-700">
								<Lock size={18} />
								Sign In to Account
							</motion.button>

							{/* Divider */}
							<div className="flex items-center py-2">
								<div className="h-px flex-1 bg-gray-200" />

								<span className="px-4 text-sm font-medium text-gray-400">
									OR
								</span>

								<div className="h-px flex-1 bg-gray-200" />
							</div>

							{/* Create Account */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4 }}
								className="text-center">
								<p className="mb-5 text-sm text-gray-500">
									Don't have an online banking account?
								</p>

								<Link to="/register">
									<motion.button
										type="button"
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										className="w-full cursor-pointer rounded-xl border-2 border-emerald-600 py-4 font-semibold text-emerald-600 transition-all duration-300 hover:bg-emerald-600 hover:text-white">
										Create an Account
									</motion.button>
								</Link>
							</motion.div>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
