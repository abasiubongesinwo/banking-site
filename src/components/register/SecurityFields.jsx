import { useState } from "react";
import { motion } from "framer-motion";
import { FaLock, FaEye, FaEyeSlash, FaKey } from "react-icons/fa";

export default function SecurityFields() {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirm, setShowConfirm] = useState(false);

	const [password, setPassword] = useState("");

	const strength = () => {
		if (password.length === 0)
			return {
				text: "",
				color: "",
				width: "0%",
			};

		if (password.length < 6)
			return {
				text: "Weak",
				color: "bg-red-500",
				width: "33%",
			};

		if (password.length < 10)
			return {
				text: "Medium",
				color: "bg-yellow-500",
				width: "66%",
			};

		return {
			text: "Strong",
			color: "bg-emerald-600",
			width: "100%",
		};
	};

	const passwordStrength = strength();

	return (
		<motion.div
			initial={{ opacity: 0, y: 25 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.7 }}
			className="space-y-8">
			<div>
				<h3 className="text-2xl font-bold text-gray-900">Account Security</h3>

				<p className="mt-2 text-gray-500">
					Create secure credentials to protect your online banking account.
				</p>
			</div>

			{/* Transaction PIN */}

			<div>
				<label className="mb-2 block font-semibold text-gray-700">
					4-Digit Transaction PIN *
				</label>

				<div className="flex items-center rounded-xl border border-gray-300 px-4 transition focus-within:border-emerald-600">
					<FaKey className="text-gray-400" />

					<input
						type="password"
						maxLength={4}
						placeholder="••••"
						className="w-full bg-transparent px-4 py-4 outline-none"
					/>
				</div>

				<p className="mt-2 text-sm text-gray-500">
					Used to authorize transfers, withdrawals and payments.
				</p>
			</div>

			{/* Password */}

			<div>
				<label className="mb-2 block font-semibold text-gray-700">
					Password *
				</label>

				<div className="flex items-center rounded-xl border border-gray-300 px-4 transition focus-within:border-emerald-600">
					<FaLock className="text-gray-400" />

					<input
						type={showPassword ? "text" : "password"}
						placeholder="Create a secure password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full bg-transparent px-4 py-4 outline-none"
					/>

					<button
						type="button"
						onClick={() => setShowPassword(!showPassword)}
						className="text-gray-500">
						{showPassword ?
							<FaEyeSlash />
						:	<FaEye />}
					</button>
				</div>

				{/* Strength */}

				<div className="mt-4">
					<div className="h-2 overflow-hidden rounded-full bg-gray-200">
						<div
							style={{
								width: passwordStrength.width,
							}}
							className={`h-full transition-all duration-500 ${passwordStrength.color}`}
						/>
					</div>

					<p className="mt-2 text-sm font-medium text-gray-600">
						{passwordStrength.text}
					</p>
				</div>
			</div>

			{/* Confirm */}

			<div>
				<label className="mb-2 block font-semibold text-gray-700">
					Confirm Password *
				</label>

				<div className="flex items-center rounded-xl border border-gray-300 px-4 transition focus-within:border-emerald-600">
					<FaLock className="text-gray-400" />

					<input
						type={showConfirm ? "text" : "password"}
						placeholder="Confirm your password"
						className="w-full bg-transparent px-4 py-4 outline-none"
					/>

					<button
						type="button"
						onClick={() => setShowConfirm(!showConfirm)}
						className="text-gray-500">
						{showConfirm ?
							<FaEyeSlash />
						:	<FaEye />}
					</button>
				</div>
			</div>
		</motion.div>
	);
}
