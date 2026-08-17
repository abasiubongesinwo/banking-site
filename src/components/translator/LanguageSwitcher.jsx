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
		try {
			const saved = localStorage.getItem("selected-language");

			return saved ? JSON.parse(saved) : languages[0];
		} catch {
			return languages[0];
		}
	});

	useEffect(() => {
		localStorage.setItem("selected-language", JSON.stringify(selected));
	}, [selected]);

	function handleSelect(language) {
		setSelected(language);
		translatePage(language.code);
	}

	return (
		// <div className="fixed left-0 top-1/2 z-[100] -translate-y-1/2">
		// <div className="fixed left-0 top-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center">
		// <div className="fixed left-8 bottom-8 flex h-14 w-14 items-center justify-center rounded-full">
		<div className="fixed left-8 bottom-8 z-[9999] flex h-14 w-14 items-center justify-center">
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onClick={() => setOpen(!open)}
				className="flex h-12 w-10 items-center justify-center bg-white">
				<ReactCountryFlag
					countryCode={selected.country}
					svg
					style={{
						width: "1.5em",
						height: "1.5em",
						objectFit: "cover",
					}}
				/>
			</motion.button>
			<AnimatePresence>
				{open && (
					<div className="absolute left-full ml-1 -translate-y-1/2">
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
