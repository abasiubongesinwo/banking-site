import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function RegisterSubmit({ onSubmit }) {
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		setLoading(true);

		// Replace with your API call later
		if (onSubmit) {
			onSubmit();
		}

		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 25 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.9 }}
			className="space-y-8">
			{/* Create Account Button */}

			<button
				type="submit"
				onClick={handleSubmit}
				disabled={loading}
				className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-emerald-600 py-5 text-lg font-semibold text-white transition duration-300 hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70">
				{loading ?
					<>
						<div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
						Creating Account...
					</>
				:	<>
						Create My Account
						<FaArrowRight className="transition group-hover:translate-x-1" />
					</>
				}
			</button>

			{/* Login */}

			<div className="text-center">
				<p className="text-gray-600">
					Already have an account?{" "}
					<Link
						to="/login"
						className="font-semibold text-emerald-600 transition hover:text-emerald-700 hover:underline">
						Sign In
					</Link>
				</p>
			</div>

			{/* Divider */}

			<div className="flex items-center">
				<div className="h-px flex-1 bg-gray-200" />

				<span className="px-4 text-sm text-gray-400">Trusted Banking</span>

				<div className="h-px flex-1 bg-gray-200" />
			</div>

			{/* Footer */}

			<p className="text-center text-sm leading-7 text-gray-500">
				By creating an account, you confirm that all information submitted is
				complete and accurate. First Bank of Delaware reserves the right to
				verify your identity before approving any banking relationship.
			</p>
		</motion.div>
	);
}
