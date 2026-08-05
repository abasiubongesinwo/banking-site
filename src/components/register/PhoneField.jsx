import { motion } from "framer-motion";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { FaPhoneAlt } from "react-icons/fa";

import "react-phone-number-input/style.css";

export default function PhoneField() {
	const [phone, setPhone] = useState("");

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
			className="space-y-2">
			<label className="block font-semibold text-gray-700">
				Phone Number *
			</label>

			<div className="flex items-center rounded-xl border border-gray-300 px-4 transition focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-100">
				<FaPhoneAlt className="mr-3 text-gray-400" />

				<div className="w-full py-3">
					<PhoneInput
						international
						defaultCountry="US"
						value={phone}
						onChange={setPhone}
						placeholder="Enter your phone number"
						className="phone-input"
					/>
				</div>
			</div>

			<p className="text-sm text-gray-500">
				Enter your phone number with country code.
			</p>
		</motion.div>
	);
}
