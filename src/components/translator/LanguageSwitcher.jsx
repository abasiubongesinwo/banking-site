import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactCountryFlag from "react-country-flag";

import { languages } from "./languages";
import LanguageDropdown from "./LanguageDropdown";

function translatePage(languageCode) {
	const combo = document.querySelector(".goog-te-combo");

	if (!combo) return;

	combo.value = languageCode;

	combo.dispatchEvent(
		new Event("change", {
			bubbles: true,
		}),
	);
}

export default function LanguageSwitcher() {
	const [open, setOpen] = useState(false);

	const [selected, setSelected] = useState(() => {
		const saved = localStorage.getItem("selected-language");

		if (saved) {
			return JSON.parse(saved);
		}

		return languages[0];
	});

	useEffect(() => {
		localStorage.setItem("selected-language", JSON.stringify(selected));
	}, [selected]);

	function handleSelect(language) {
		setSelected(language);

		translatePage(language.code);
	}

	return (
		<div className="fixed left-0 top-1/2 z-[100] -translate-y-1/2">
			<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				onClick={() => setOpen(!open)}
				className="flex h-10 w-10 items-center justify-center rounded-r-full border-2 border-l-0 border-white bg-white pl-1 shadow-lg transition hover:border-emerald-500 hover:shadow-emerald-200">
				<ReactCountryFlag
					countryCode={selected.country}
					svg
					style={{
						width: "1.4em",
						height: "1.4em",
						borderRadius: "50%",
						objectFit: "cover",
					}}
				/>
			</motion.button>

			<AnimatePresence>
				{open && (
					<div className="absolute left-full top-1/2 ml-3 -translate-y-1/2">
						<LanguageDropdown
							open={open}
							selected={selected}
							onSelect={handleSelect}
							onClose={() => setOpen(false)}
						/>
					</div>
				)}
			</AnimatePresence>
		</div>
	);
}
