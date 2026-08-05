import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFileContract } from "react-icons/fa";

export default function TermsCheckbox({ checked, onChange }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.8 }}
			className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
			<label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-gray-600">
				<input
					type="checkbox"
					checked={checked}
					onChange={(e) => onChange(e.target.checked)}
					className="mt-1 h-4 w-4 rounded accent-emerald-600"
				/>

				<span>
					<span className="flex items-center gap-2 font-semibold text-gray-800">
						<FaFileContract className="text-emerald-600" />
						Terms & Conditions
					</span>

					<span className="mt-1 block">
						I have read and agree to the{" "}
						<Link
							to="/terms"
							className="font-semibold text-emerald-600 hover:underline">
							Terms & Conditions
						</Link>{" "}
						and{" "}
						<Link
							to="/terms"
							className="font-semibold text-emerald-600 hover:underline">
							Privacy Policy
						</Link>
						. I confirm I am at least 18 years old and authorize First Bank of
						Delaware to verify my identity as required.
					</span>
				</span>
			</label>
		</motion.div>
	);
}
