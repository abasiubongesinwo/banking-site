import { motion } from "framer-motion";
import { FaUser, FaUserTag, FaEnvelope } from "react-icons/fa";

export default function PersonalInfo() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
			className="space-y-8">
			{/* Section Title */}

			<div>
				<h3 className="text-2xl font-bold text-gray-900">
					Personal Information
				</h3>

				<p className="mt-2 text-gray-500">
					Enter your legal identity exactly as it appears on your
					government-issued documents.
				</p>
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				{/* First Name */}

				<div>
					<label className="mb-2 block font-semibold text-gray-700">
						Legal First Name *
					</label>

					<div className="flex items-center rounded-xl border border-gray-300 px-4 transition focus-within:border-emerald-600">
						<FaUser className="text-gray-400" />

						<input
							type="text"
							placeholder="John"
							className="w-full bg-transparent px-4 py-4 outline-none"
						/>
					</div>
				</div>

				{/* Middle Name */}

				<div>
					<label className="mb-2 block font-semibold text-gray-700">
						Middle Name
					</label>

					<div className="flex items-center rounded-xl border border-gray-300 px-4 transition focus-within:border-emerald-600">
						<FaUser className="text-gray-400" />

						<input
							type="text"
							placeholder="Michael"
							className="w-full bg-transparent px-4 py-4 outline-none"
						/>
					</div>
				</div>

				{/* Last Name */}

				<div>
					<label className="mb-2 block font-semibold text-gray-700">
						Legal Last Name *
					</label>

					<div className="flex items-center rounded-xl border border-gray-300 px-4 transition focus-within:border-emerald-600">
						<FaUser className="text-gray-400" />

						<input
							type="text"
							placeholder="Doe"
							className="w-full bg-transparent px-4 py-4 outline-none"
						/>
					</div>
				</div>

				{/* Username */}

				<div>
					<label className="mb-2 block font-semibold text-gray-700">
						Username *
					</label>

					<div className="flex items-center rounded-xl border border-gray-300 px-4 transition focus-within:border-emerald-600">
						<FaUserTag className="text-gray-400" />

						<input
							type="text"
							placeholder="johndoe"
							className="w-full bg-transparent px-4 py-4 outline-none"
						/>
					</div>
				</div>
			</div>

			{/* Email */}

			<div>
				<label className="mb-2 block font-semibold text-gray-700">
					Email Address *
				</label>

				<div className="flex items-center rounded-xl border border-gray-300 px-4 transition focus-within:border-emerald-600">
					<FaEnvelope className="text-gray-400" />

					<input
						type="email"
						placeholder="john.doe@email.com"
						className="w-full bg-transparent px-4 py-4 outline-none"
					/>
				</div>
			</div>
		</motion.div>
	);
}
