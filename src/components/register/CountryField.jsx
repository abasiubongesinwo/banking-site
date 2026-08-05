import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { FaGlobeAmericas } from "react-icons/fa";

export default function CountryField() {
	const countries = useMemo(() => countryList().getData(), []);
	const [country, setCountry] = useState(null);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
			className="space-y-2">
			<label className="block font-semibold text-gray-700">Country *</label>

			<div className="flex items-center rounded-xl border border-gray-300 px-4 py-1 transition focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-100">
				<FaGlobeAmericas className="mr-3 text-gray-400" />

				<div className="w-full">
					<Select
						options={countries}
						value={country}
						onChange={setCountry}
						placeholder="Choose Country"
						isSearchable
						classNamePrefix="country-select"
						styles={{
							control: (base) => ({
								...base,
								border: "none",
								boxShadow: "none",
								minHeight: "52px",
								backgroundColor: "transparent",
							}),
							indicatorSeparator: () => ({
								display: "none",
							}),
							menu: (base) => ({
								...base,
								borderRadius: "16px",
								overflow: "hidden",
								zIndex: 9999,
							}),
							option: (base, state) => ({
								...base,
								backgroundColor: state.isFocused ? "#ECFDF5" : "#fff",
								color: "#111827",
								padding: "12px 16px",
								cursor: "pointer",
							}),
						}}
					/>
				</div>
			</div>

			<p className="text-sm text-gray-500">Select your country of residence.</p>
		</motion.div>
	);
}

