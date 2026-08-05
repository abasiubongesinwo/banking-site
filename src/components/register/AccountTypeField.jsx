import { motion } from "framer-motion";
import { useState } from "react";
import Select from "react-select";
import { FaUniversity } from "react-icons/fa";

const accountTypes = [
	{ value: "Checking Account", label: "Checking Account" },
	{ value: "Savings Account", label: "Savings Account" },
	{ value: "Fixed Deposit Account", label: "Fixed Deposit" },
	{ value: "Current Account", label: "Current Account" },
	{ value: "Money Market Account", label: "Money Market Account" },
	{
		value: "Certificate of Deposit Account",
		label: "Certificate of Deposit (CD)",
	},
	{
		value: "Crypto Currency Account",
		label: "Crypto Currency Account",
	},
	{
		value: "Business Account",
		label: "Business Account",
	},
	{
		value: "Corporate Business Account",
		label: "Corporate Business Account",
	},
	{
		value: "Non Resident Account",
		label: "Non Resident Account",
	},
	{
		value: "Investment Account",
		label: "Investment Account",
	},
	{
		value: "Retirement Account",
		label: "Retirement Account (IRA)",
	},
	{
		value: "Joint Account",
		label: "Joint Account",
	},
	{
		value: "Trust Account",
		label: "Trust Account",
	},
	{
		value: "Student Account",
		label: "Student Account",
	},
	{
		value: "Senior Citizen Account",
		label: "Senior Citizen Account",
	},
	{
		value: "Premium Account",
		label: "Premium / VIP Account",
	},
	{
		value: "Foreign Currency Account",
		label: "Foreign Currency Account",
	},
	{
		value: "Escrow Account",
		label: "Escrow Account",
	},
];

export default function AccountTypeField() {
	const [selected, setSelected] = useState(null);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.5 }}
			className="space-y-2">
			<label className="block font-semibold text-gray-700">
				Account Type *
			</label>

			<div className="flex items-center rounded-xl border border-gray-300 px-4 py-1 transition focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-100">
				<FaUniversity className="mr-3 text-gray-400" />

				<div className="w-full">
					<Select
						options={accountTypes}
						value={selected}
						onChange={setSelected}
						placeholder="Select Account Type"
						isSearchable
						classNamePrefix="account-select"
						styles={{
							control: (base) => ({
								...base,
								border: "none",
								boxShadow: "none",
								minHeight: "52px",
								background: "transparent",
							}),
							indicatorSeparator: () => ({
								display: "none",
							}),
							menu: (base) => ({
								...base,
								borderRadius: "16px",
								zIndex: 9999,
								overflow: "hidden",
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

			<p className="text-sm text-gray-500">
				Choose the type of bank account you wish to open.
			</p>
		</motion.div>
	);
}
