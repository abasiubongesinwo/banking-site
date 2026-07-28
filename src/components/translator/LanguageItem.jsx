import ReactCountryFlag from "react-country-flag";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function LanguageItem({ language, selected, onSelect }) {
	return (
		<motion.button
			whileHover={{
				x: 4,
				backgroundColor: "#ECFDF5",
			}}
			whileTap={{
				scale: 0.98,
			}}
			onClick={() => onSelect(language)}
			className={`flex w-full items-center justify-between rounded-xl px-4 py-3 transition ${
				selected?.code === language.code ? "bg-emerald-50" : "bg-transparent"
			}`}>
			<div className="flex items-center gap-4">
				<ReactCountryFlag
					countryCode={language.country}
					svg
					style={{
						width: "1.8em",
						height: "1.8em",
						borderRadius: "50%",
						objectFit: "cover",
					}}
				/>

				<div className="text-left">
					<h4 className="font-semibold text-gray-800">{language.native}</h4>

					<p className="text-sm text-gray-500">{language.name}</p>
				</div>
			</div>

			{selected?.code === language.code && (
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ type: "spring", stiffness: 300 }}>
					<Check size={18} className="text-emerald-600" />
				</motion.div>
			)}
		</motion.button>
	);
}
