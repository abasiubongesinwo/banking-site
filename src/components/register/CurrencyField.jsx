import { motion } from "framer-motion";
import { useState } from "react";
import Select from "react-select";
import { FaDollarSign } from "react-icons/fa";

const currencies = [
	{ value: "USD", label: "United States Dollar (USD)" },
	{ value: "EUR", label: "Euro (EUR)" },
	{ value: "GBP", label: "British Pound (GBP)" },
	{ value: "JPY", label: "Japanese Yen (JPY)" },
	{ value: "CNY", label: "Chinese Yuan (CNY)" },
	{ value: "CAD", label: "Canadian Dollar (CAD)" },
	{ value: "AUD", label: "Australian Dollar (AUD)" },
	{ value: "CHF", label: "Swiss Franc (CHF)" },
	{ value: "INR", label: "Indian Rupee (INR)" },
	{ value: "BRL", label: "Brazilian Real (BRL)" },
	{ value: "MXN", label: "Mexican Peso (MXN)" },
	{ value: "ZAR", label: "South African Rand (ZAR)" },
	{ value: "SGD", label: "Singapore Dollar (SGD)" },
	{ value: "HKD", label: "Hong Kong Dollar (HKD)" },
	{ value: "SEK", label: "Swedish Krona (SEK)" },
	{ value: "NOK", label: "Norwegian Krone (NOK)" },
	{ value: "DKK", label: "Danish Krone (DKK)" },
	{ value: "NZD", label: "New Zealand Dollar (NZD)" },
	{ value: "KRW", label: "South Korean Won (KRW)" },
	{ value: "TRY", label: "Turkish Lira (TRY)" },
	{ value: "RUB", label: "Russian Ruble (RUB)" },
	{ value: "AED", label: "UAE Dirham (AED)" },
	{ value: "SAR", label: "Saudi Riyal (SAR)" },
	{ value: "PLN", label: "Polish Zloty (PLN)" },
	{ value: "THB", label: "Thai Baht (THB)" },
	{ value: "IDR", label: "Indonesian Rupiah (IDR)" },
	{ value: "MYR", label: "Malaysian Ringgit (MYR)" },
	{ value: "PHP", label: "Philippine Peso (PHP)" },
	{ value: "KES", label: "Kenyan Shilling (KES)" },
	{ value: "NGN", label: "Nigerian Naira (NGN)" },
];

export default function CurrencyField() {
	const [currency, setCurrency] = useState(currencies[0]);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.6 }}
			className="space-y-2">
			<label className="block font-semibold text-gray-700">Currency *</label>

			<div className="flex items-center rounded-xl border border-gray-300 px-4 py-1 transition focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-100">
				<FaDollarSign className="mr-3 text-gray-400" />

				<div className="w-full">
					<Select
						options={currencies}
						value={currency}
						onChange={setCurrency}
						placeholder="Choose Currency"
						isSearchable
						classNamePrefix="currency-select"
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
				Select the primary currency for your account.
			</p>
		</motion.div>
	);
}
